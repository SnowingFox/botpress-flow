import { DragDropContext, Draggable, Droppable, OnDragEndResponder } from 'react-beautiful-dnd'
import { v4 as uuid } from 'uuid'
import { FlowLogicBaseCard } from './components/FlowLogicBaseCard.tsx'
import { Flow } from './components/flow/Flow.tsx'
import { useFlow } from './context/flow.context.ts'
import { FlowLogicBaseCardItem } from './types.ts'
import { FlowAction } from './components/action/FlowAction.tsx'

// @unocss-include
const FlowLogicItems: FlowLogicBaseCardItem[] = [
  {
    id: uuid(),
    text: 'text',
    icon: 'i-material-symbols:text-format-rounded text-green-500',
    connectable: false,
  },
  {
    id: uuid(),
    text: 'always',
    icon: 'i-ph:flow-arrow-thin',
    connectable: true,
  },
]

export default function App() {
  const { nodes, setFlow } = useFlow()

  const onDragEnd: OnDragEndResponder = (result) => {
    const { destination } = result

    if (!destination) {
      return
    }

    const isTargetInNodes = nodes.find((item) => item.id === destination.droppableId)

    if (isTargetInNodes) {
      setFlow((draft) => {
        if (!draft[destination.droppableId]) {
          draft[destination.droppableId] = []
        }

        draft[destination.droppableId].splice(
          destination.index,
          0,
          FlowLogicItems.find((item) => item.id === result.draggableId)!,
        )
      })
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        className={
          'absolute left-0 w-50 top-2% bottom-2% bg-white shadow-md bg-white rounded-md p2 bg-white z-1'
        }
      >
        <Droppable droppableId={'FLOW_LOGIC'} isDropDisabled={true}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} className={'flex space-x-2'}>
              {FlowLogicItems.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <>
                      <FlowLogicBaseCard provided={provided} item={item} />
                      {snapshot.isDragging && (
                        <FlowLogicBaseCard className={'bg-gray-300/60'} item={item} />
                      )}
                    </>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
      <Flow />
      <FlowAction />
    </DragDropContext>
  )
}
