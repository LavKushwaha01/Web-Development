// As your application grows, you might find that multiple components need access to the same state.
//  Instead of duplicating state in each component,
//  you can lift the state up to the LCA, allowing the common ancestor to manage it.



import { useState } from 'react'
import './App.css'

function App() {
  return <div>
    <LightBulb />
  </div>
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true)

  return <div>
    <BulbState bulbOn={bulbOn} />
    <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
  </div>
}

function BulbState({bulbOn}) {
  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"}
  </div>
}

function ToggleBulbState({bulbOn, setBulbOn}) {

  function toggle() {
    // setBulbOn(currentState => !currentState)
    setBulbOn(!bulbOn)
    
  }

  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
}

export default App




// // Import useState hook from react
// import { useState } from "react";

// // Create a function component named App that serves as the main application component
// function App() {
//     // Return the JSX for the component
//     return (
//         // Wrap the Parent component inside a div
//         <div>
//             {/* Render the Parent component */}
//             <Parent />
//         </div>
//     );
// };

// // Create a function component named Parent to manage the state of the count
// function Parent() {
//     // Declare a state variable count and a function setCount to update the state of the count
//     const [count, setCount] = useState(0);

//     // Return the JSX for the component
//     return (
//         // Wrap the JSX inside a div element
//         <div>
//             {/* Render the Incrase component with the count state and setCount function as props */}
//             <Incrase count={count} setCount={setCount} />

//             {/* Render the Decrease component with the count state and setCount function as props */}
//             <Decrease count={count} setCount={setCount} />
            
//             {/* Render the Value component with the count state as a prop */}
//             <Value count={count} />
//         </div>
//     );
// }

// // Create a function component named Decrease to decrease the count
// function Decrease({ count, setCount }) {
//     // Return the JSX for the component
//     return (
//         // Button to decrease the count on click using the setCount function with the updated value of count
//         <button onClick={() => setCount(count - 1)}>Decrease</button>
//     );
// }

// // Create a function component named Incrase to increase the count 
// function Incrase({ count, setCount }) {
//     // Return the JSX for the component
//     return (
//         // Button to increase the count on click using the setCount function with the updated value of count
//         <button onClick={() => setCount(count + 1)}>Increase</button>
//     );
// }

// // Create a function component named Value to display the count
// function Value({ count }) {
//     // Return the JSX for the component
//     return (
//         // Display the count value using the count prop
//         <p>Count: {count}</p>
//     );
// }

// // Export the App component as the default export to be used in other files or components
// export default App;