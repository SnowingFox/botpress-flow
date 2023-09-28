import { NodeProps, Position } from 'reactflow'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { FlowLogicBaseCard } from '../FlowLogicBaseCard.tsx'
import { useFlow } from '../../context/flow.context.ts'
import { useMemo } from 'react'
import * as classNames from 'classnames'
import { CardHandle } from './CardHandle.tsx'
import { v4 } from 'uuid'

export function FlowCardNode(props: NodeProps) {
  const { flow } = useFlow()

  const logicCard = useMemo(() => flow[props.id], [flow, props.id])
  const isFocused = useMemo(() => props.selected, [props.selected])

  console.log(flow, logicCard)
  return (
    <>
      <Droppable droppableId={props.id}>
        {(provided) => (
          <div
            className={classNames(
              'border-[0.5px] border-[#d4d4d8] border-solid bg-white rounded-lg shadow-[0_4px_12px_#00000014] w-[200px] pb-4 transition-all',
              {
                'border-blue-500': isFocused,
                'border-1': isFocused,
              },
            )}
          >
            <CardHandle
              type={'source'}
              position={Position.Left}
              isConnectable={props.isConnectable}
              className={'absolute important:(top-4 left-[-10px])'}
            />
            <div className={'space-y-2'}>
              <div className={'flex gap-2 drag-handle p-2 hover:bg-blue-200/30 transition-all'}>
                <div className={'i-solar:hamburger-menu-broken'} />
                <span className={'text-xs'}>Standard Card</span>
              </div>
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={'space-y-1 px-2'}
              >
                {logicCard?.length &&
                  logicCard?.map((item, index) => (
                    <>
                      {item && (
                        <Draggable
                          draggableId={`${item?.id}-${index}`}
                          index={index}
                          key={`${item?.id}-${index}`}
                        >
                          {(provided) => (
                            <div className={'relative flex items-center'}>
                              {item?.connectable && (
                                <CardHandle
                                  type={'target'}
                                  position={Position.Right}
                                  isConnectable={props.isConnectable}
                                />
                              )}
                              <FlowLogicBaseCard key={v4()} provided={provided} item={item} />
                            </div>
                          )}
                        </Draggable>
                      )}
                    </>
                  ))}
                {provided.placeholder}
                <div
                  className={
                    'mt-2 border-dashed border-1 border-black/40 text-black/60 rounded-full px-2 text-xs py-1 transition-all'
                  }
                >
                  Add Card
                </div>
              </div>
            </div>
          </div>
        )}
      </Droppable>
    </>
  )
}
