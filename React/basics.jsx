// import react from ("react");

// import { useState } from "react";

import React, { useState } from 'react';

export default function App(){
  const [count , setCount] = useState(0);

  function onclickbutton(){
    setCount(count+1);
  }

  return (
    <div>
    <button onclick = {onclickbutton}> counter {count}</button>
    </div>
  )
}




// useState is a Hook that lets you add state to functional components. 
// It returns an array with the current state and a function to update it.


const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
