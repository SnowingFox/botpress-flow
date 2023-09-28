import React from 'react'
import { Handle } from 'reactflow'

export function CardHandle(props: React.ComponentProps<typeof Handle>) {
  return (
    <Handle
      {...props}
      className={`absolute !bg-gray-500/30 !right-[-20px] hover:(bg-gray-500/60 border-1 border-solild border-blue-500) ${props.className}`}
    />
  )
}
