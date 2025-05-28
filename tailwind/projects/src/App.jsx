import { useState } from 'react'
import { Button } from './component/button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-screen bg-blue-950 py-10'  >
   <Button disabled={true}  >Sign up</Button>
    </div>
    </>
  )
}

export default App
