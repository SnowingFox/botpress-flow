import ReactFlow, { MiniMap, Controls, Background } from 'reactflow'
import { FlowCardNode } from './FlowCardNode.tsx'
import { DropDownMenu } from './DropDownMenu.tsx'
import { useFlow } from '../../context/flow.context.ts'

const nodeTypes = {
  custom: FlowCardNode,
}

const minimapStyle = {
  height: 120,
}

export const Flow = () => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useFlow()

  return (
    <div className={'h-screen w-screen'}>
      <DropDownMenu>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          attributionPosition="top-right"
          nodeTypes={nodeTypes}
        >
          <MiniMap style={minimapStyle} zoomable pannable />
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </DropDownMenu>
    </div>
  )
}
