import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { FlowContextProvider } from './context/flow.context.ts'

import './index.css'
import '@unocss/reset/normalize.css'
import 'uno.css'
import 'reactflow/dist/style.css'
import { ReactFlowProvider } from 'reactflow'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FlowContextProvider>
    <ReactFlowProvider>
      <App />
    </ReactFlowProvider>
  </FlowContextProvider>,
)
