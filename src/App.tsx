import { useCallback } from 'react'
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow'

import 'reactflow/dist/style.css'
import 'uno.css'
import './index.css'

import { CardDrawer } from './components/CardDrawer.tsx'

const initialNodes = [
  {
    id: 'start',
    position: { x: window.innerWidth / 2 - 300, y: window.innerHeight / 2 },
    data: { label: 'start' },
  },
  {
    id: 'end',
    position: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
    data: { label: 'end' },
  },
]
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  )

  return (
    <div className={'w-screen h-screen flex relative'}>
      <CardDrawer />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <Background variant={'dots'} gap={12} size={1} />
      </ReactFlow>
    </div>
  )
}
