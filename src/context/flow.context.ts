import { useImmer } from 'use-immer'
import { createStore } from 'hox'
import { FlowLogicBaseCardItem } from '../types.ts'
import { addEdge, useEdgesState, useNodesState } from 'reactflow'
import {
  edges as initialEdges,
  nodes as initialNodes,
} from '../components/flow/initial-elements.tsx'
import { useCallback } from 'react'

export const [useFlow, FlowContextProvider] = createStore(() => {
  const [flow, setFlow] = useImmer<Record<string, FlowLogicBaseCardItem[]>>({})
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges])

  return {
    flow,
    setFlow,
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
    onConnect,
  }
})
