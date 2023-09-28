import React, { useMemo } from 'react'
import { Dropdown } from 'antd'
import { useFlow } from '../../context/flow.context.ts'
import { MenuProps } from 'antd/es/menu/menu'
import { v4 } from 'uuid'
import { useReactFlow } from 'reactflow'

interface Props {
  children: React.ReactNode
}

export function DropDownMenu(props: Props) {
  const { setNodes } = useFlow()
  const { project } = useReactFlow()

  const MenuItems = useMemo<MenuProps['items']>(
    () => [
      {
        label: 'Add Card',
        key: '1',
        onClick(menuInfoEvent) {
          const id = v4()
          const event = menuInfoEvent.domEvent as React.MouseEvent

          setNodes((nds) =>
            nds.concat({
              id,
              // we are removing the half of the node width (75) to center the new node
              position: project({ x: event.clientX, y: event.clientY }),
              data: { label: `Node ${id}` },
              type: 'custom',
            }),
          )
        },
      },
    ],
    [],
  )

  return (
    <>
      <Dropdown
        menu={{ items: MenuItems }}
        trigger={['contextMenu']}
        dropdownRender={(menus) => <div className={'rounded-lg p-2 min-w-50'}>{menus}</div>}
      >
        {props.children}
      </Dropdown>
    </>
  )
}
