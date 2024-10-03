import { Icon } from '@iconify-icon/react/dist/iconify.js'
import './App.css'
import { Button } from './components/ui/button'

function App() {

  return (
    <div>
      <Button className='font-geistMono'>
        Hello techverse developers! 
        <Icon icon="mdi:human-hello-variant" width="24" height="24" />
      </Button>
    </div>
  )
}

export default App
