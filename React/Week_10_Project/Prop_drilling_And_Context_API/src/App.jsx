// // prop drilling use for pass the argument to grandchild via parent which is not usefull for parent

// // Import the useState hook from the React library, which is used for managing state in functional components
// import { useState } from "react";

// // Create a function component named App, which serves as the main entry point of the application
// function App() {
//     // Declare a state variable 'bulbOn' initialized to true, and a state updater function 'setBulbOn' to toggle the state
//     const [bulbOn, setBulbOn] = useState(true);

//     // Define a function named toggleBulb to invert the value of 'bulbOn'
//     function toggleBulb() {
//         // Update the 'bulbOn' state by setting it to the opposite of its current value (on becomes off, and vice versa)
//         setBulbOn(!bulbOn);
//     }

//     // Return JSX to render the components within a div element
//     return (
//         <div>
//             {/* Render the Light component, passing 'bulbOn' and 'toggleBulb' as props */}
//             <Light bulbOn={bulbOn} toggleBulb={toggleBulb} />
//         </div>
//     );
// }

// // Define the Light component that accepts 'bulbOn' and 'toggleBulb' as props
// function Light({ bulbOn, toggleBulb }) {
//     // Return JSX to render both the LightBulb and LightSwitch components
//     return (
//         <div>
//             {/* Render the LightBulb component, passing 'bulbOn' as a prop */}
//             <LightBulb bulbOn={bulbOn} />

//             {/* Render the LightSwitch component, passing 'toggleBulb' as a prop */}
//             <LightSwitch toggleBulb={toggleBulb} />
//         </div>
//     );
// }

// // Define the LightBulb component that accepts 'bulbOn' as a prop
// function LightBulb({ bulbOn }) {
//     // Return JSX to conditionally display the text "Bulb is on" or "Bulb is off" based on the value of 'bulbOn'
//     return (
//         // Display the text "Bulb is on" if 'bulbOn' is true, otherwise display "Bulb is off"
//         <div>{bulbOn ? "Bulb is on" : "Bulb is off"}</div>
//     );
// }

// // Define the LightSwitch component that accepts 'toggleBulb' as a prop
// function LightSwitch({ toggleBulb }) {
//     // Return JSX to display a button, which when clicked, triggers the 'toggleBulb' function to toggle the bulb state
//     return (
//         <div>
//             {/* Add an onClick event listener to the button that calls 'toggleBulb' when the button is clicked */}
//             <button onClick={toggleBulb}>Toggle the Bulb</button>
//         </div>
//     );
// }

// // Export the App component as the default export so it can be imported and used in other files
// export default App;



//------------------------------------------------------------------------------------------------------------------------------------


// context-API removes the drawback of prop drilling by passing the argument direct to the down component without pass in middle component

// Import useContext from react module
import { useContext } from "react";

// Import BulbContextProvider and BulbContext from BulbContextProvider.jsx file
import { BulbContextProvider, BulbContext } from "./BulbContextProvider";

// Import createContext and useState from react module
// const BulbContext = createContext();

// Create a function component named App that serves as the main application component
function App() {
    // Create a state variable named bulbOn and a function named setBulbOn to update the state variable
    // const [bulbOn, setBulbOn] = useState(true);

    return (
        // Wrap the Light component with BulbContextProvider component
        <BulbContextProvider>
            {/* Render the Light component */}
            <Light />
        </BulbContextProvider>

        // // This will not work because the BulbContext.Provider is not available in this file
        // // Wrap the Light component with BulbContext.Provider component
        // <BulbContext.Provider value={{
        //     bulbOn,
        //     setBulbOn,
        // }}>
        //     {/* Render the Light component */}
        //     <Light />
        // </BulbContext.Provider>
    );
}

// Create a function component named Light that renders the LightBulb and LightSwitch components
function Light() {
    // Return the JSX for the component
    return (
        // Render the LightBulb and LightSwitch components
        <div>
            {/* Render the LightBulb component */}
            <LightBulb />

            {/* Render the LightSwitch component */}
            <LightSwitch />
        </div>
    );
}

// Create a function component named LightBulb that displays the status of the bulb
function LightBulb() {
    // Use the useContext hook to access the value of bulbOn from the BulbContext
    const { bulbOn } = useContext(BulbContext);

    // Return the JSX for the component
    return (
        // Display the status of the bulb
        <div>
            {/* Display the status of the bulb using the ternary operator */}
            {bulbOn ? "Bulb is on" : "Bulb is off"}
        </div>
    );
}

// Create a function component named LightSwitch that toggles the status of the bulb
function LightSwitch() {
    // Use the useContext hook to access the value of bulbOn and setBulbOn from the BulbContext
    const { bulbOn, setBulbOn } = useContext(BulbContext);

    // Create a function named toggleBulb that toggles the status of the bulb
    function toggleBulb() {
        // Update the state of the bulbOn using the setBulbOn function to toggle the status of the bulb
        setBulbOn(!bulbOn);
    }

    // Return the JSX for the component
    return (
        // Display a button to toggle the status of the bulb
        <div>
            {/* Button to toggle the status of the bulb using the toggleBulb function */}
            <button onClick={toggleBulb}>Toggle the Bulb</button>
        </div>
    );
}

// Export the App component as the default export to be used in other files or components
export default App;
