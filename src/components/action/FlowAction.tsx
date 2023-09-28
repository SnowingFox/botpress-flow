import { Button } from 'antd'
import { useFlow } from '../../context/flow.context.ts'

export function FlowAction() {
  const { nodes } = useFlow()

  return (
    <div
      className={
        'absolute right-0 top-0 bottom-0 bg-white border-1 border-solid border-black/5 w-64 p-2'
      }
    >
      <div className={'grid'}>
        <div className={'flex justify-end'}>
          <Button
            type={'primary'}
            onClick={() => {
              console.log(nodes)
            }}
          >
            Publish
          </Button>
        </div>
      </div>
    </div>
  )
}
