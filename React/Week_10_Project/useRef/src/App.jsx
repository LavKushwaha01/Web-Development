// Import useState and useRef from react


// ### What is `useRef`?

// In React, `useRef` is a hook that provides a way to create a **reference** to a value or a DOM element that persists across renders but **does not trigger a re-render** when the value changes.

// ### Key Characteristics of `useRef`:

// 1. **Persistent Across Renders**: The value stored in `useRef` persists between component re-renders. 
//    This means the value of a `ref` does not get reset when the component re-renders, unlike regular variables.
// 2. **No Re-Renders on Change**: Changing the value of a `ref` (`ref.current`) does **not** cause a component to re-render. 
//     This is different from state (`useState`), which triggers a re-render when updated.


import { useState, useRef } from "react";

// Create a function component named App that will be rendered in the root element
function App() {
    // Return the JSX of the component
    return (
        // Create a div element
        <div>
            {/* Render the FocusInput component */}
            <FocusInput />
            <hr />

            {/* Render the Stopwatch component */}
            <Stopwatch />
        </div>
    );
}

// Create a function component named FocusInput that will be rendered in the App component
function FocusInput() {
    // Create a reference to the input element using the useRef hook
    const inputRef = useRef(null);

    // Create a function named focusOnInput that will focus on the input element
    function focusOnInput() {
        // document.getElementById("name").focus();

        // Focus on the input element using the ref attribute
        inputRef.current.focus();
    }

    // Return the JSX of the component
    return (
        // Create a div element
        <div>
            <h2>Focus Input</h2>

            {/* Create an input element with an id of name and a ref attribute */}
            <input type="text" id="name" ref={inputRef} />

            {/* Create a button element with an onClick event handler */}
            <button onClick={focusOnInput}>Submit</button>
        </div>
    );
}

// Create a function component named Stopwatch that will be rendered in the App component
function Stopwatch() {
    // Create a state variable named currentCount and a function to update it
    const [currentCount, setCurrentCount] = useState(0);

    // Create a reference to the timer using the useRef hook
    const timer = useRef(null);

    // Create a function named startClock that will start the stopwatch
    function startClock() {
        // Set an interval to update the currentCount every second
        let value = setInterval(() => {
            // Update the currentCount by incrementing it by 1
            setCurrentCount((count) => count + 1);
        }, 1000);

        // Assign the interval to the timer reference variable
        timer.current = value;
    }

    // Create a function named stopClock that will stop the stopwatch by clearing the interval timer
    function stopClock() {
        // log the timer to the console
        console.log(timer);

        // Clear the interval timer using the clearInterval function
        clearInterval(timer.current);
    }

    // Return the JSX of the component
    return (
        // Create a div element
        <div>
            {/* Create an h1 element with the text "Stopwatch" */}
            <h1>Stopwatch</h1>

            {/* Display the currentCount */}
            {currentCount}
            <br />

            {/* Create two button elements with an onClick event handler */}
            <button onClick={startClock}>Start</button>
            <button onClick={stopClock}>Stop</button>
        </div>
    );
}

// Export the App component as the default export to be used in other files or components
export default App;