import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    // prefer tailwind documentation
    {/* <div style={{display: "flex", justifyContent: 'space-between'}}></div> */}
    // flex 
    <div className='flex justify-between'>
      <div>
        child 1
      </div>
      <div>
        child2
      </div>
      <div>
        child 3
      </div>
    </div>


 // grids

     <div className='grid grid-cols-12'>
      <div className='col-span-4'>
        child 1
      </div>
      <div className='col-span-6'>
        child2
      </div>
      <div className='col-span-2'>
        child 3
      </div>
    </div>

    // mobile responsive
    
     <div className='grid grid-cols-12 sm:grid-cols-12'>
      <div className='col-span-12 sm:col-span-3 bg-yellow-400'>
        child 1
      </div>
      <div className='col-span-12 sm:col-span-3 bg-gray-400 text-4xl'>
        child2
      </div>
      <div className='col-span-12 sm:col-span-3 bg-red-500 rounded-full'>
        child 3
      </div>
      <div className='col-span-12 sm:col-span-3 bg-green-500'>
        child 4
      </div>
    </div>

    </>
  )
}

export default App
