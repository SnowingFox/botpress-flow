import { useState } from 'react'
import {
  SortableElement,
  SortEndHandler,
  sortableContainer,
} from 'react-sortable-hoc'
import { arrayMoveImmutable } from 'array-move'

const SortableItem = SortableElement(({ value }: { value: string }) => (
  <div></div>
))

const SortableContainer = sortableContainer(
  ({ children }: { children: React.ReactNode }) => {
    return <ul>{children}</ul>
  },
)

export function CardDrawer() {
  const [items, setItems] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
  ])

  const onSortEnd: SortEndHandler = ({ oldIndex, newIndex }) => {
    setItems(arrayMoveImmutable(items, oldIndex, newIndex))
  }

  return (
    <div
      className={
        'bg-white rounded-lg w-25% left-0 top-1 bottom-1 absolute bg-white z-1 shadow-lg border-solid border-2 border-black/5'
      }
    >
      <SortableContainer onSortEnd={onSortEnd}>
        {items.map((value, index) => (
          <SortableItem key={`item-${value}`} index={index} value={value} />
        ))}
      </SortableContainer>
    </div>
  )
}
