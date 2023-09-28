import { DraggableProvided } from 'react-beautiful-dnd'
import { FlowLogicBaseCardItem } from '../types.ts'

interface Props {
  item: FlowLogicBaseCardItem
  provided?: DraggableProvided
  className?: string
}

export function FlowLogicBaseCard({ provided, item, ...props }: Props) {
  return (
    <div
      ref={provided?.innerRef}
      {...provided?.draggableProps}
      {...provided?.dragHandleProps}
      className={`flex-1 p-1 bg-[#fafafa] border-solid border-1 border-black/5 hover:(border-blue-300 bg-blue-300/20 cursor-pointer) rounded-md select-none transition-all ${props.className}`}
    >
      <div className={'flex items-center space-x-2'}>
        <div className={item.icon} />
        <div className={'text-xs'}>{item.text}</div>
      </div>
    </div>
  )
}
