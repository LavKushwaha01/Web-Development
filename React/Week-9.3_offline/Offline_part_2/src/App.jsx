// // Create a function component named App that will be rendered in the root element
// function App() {
//   // Return JSX that will be rendered in the browser
//   return (
//       // Create a container div element with inline CSS for flexbox layout
//       <div style={{ display: "flex" }}>
//           {/* Render a Card component containing an input field */}
//           <Card>
//               <div style={{ color: "green" }}>
//                   What do you want to post
//                   <br />
//                   <br />
//                   <input type="text" />
//               </div>
//           </Card>

//           {/* Render a Card component with a title and paragraph content */}
//           <Card>
//               <h2>Card Title</h2>
//               <p>This is some content inside the card.</p>
//           </Card>

//           {/* Render another Card component with different content */}
//           <Card>
//               <h2>Another Card</h2>
//               <textarea type="text"></textarea>
//               <p>This card has different content!</p>
//           </Card>
//       </div>
//   );
// }

// // Create a Card component that will render children elements passed to it as props
// function Card({ children }) {
//   return (
//       // Apply inline styles for background, border, padding, margin, and shadow
//       <div
//           style={{
//               background: "white",
//               borderRadius: 10,
//               border: "1px solid #ccc",
//               padding: "10px",
//               margin: "10px",
//               boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
//           }}
//       >
//           {/* Render any children elements passed to the Card component */}
//           {children}
//       </div>
//   );
// }

// // Export the App component as the default export to be used in other files or components
// export default App;




// // Alternative code with different Card usage pattern:

// function App() {
//     return (
//         <div style={{ display: "flex" }}>
//             {/* Render Card with inline content passed as innerContent prop */}
//             <Card
//                 innerContent={
//                     <div style={{ color: "green" }}>
//                         What do you want to post
//                         <br />
//                         <br />
//                         <input type="text" />
//                     </div>
//                 }
//             />

//             {/* Render Card with a string passed as innerContent */}
//             <Card innerContent="Hi there" />
//         </div>
//     );
// }

// // Define the Card component that receives innerContent prop and renders it inside the styled div
// function Card({ innerContent }) {
//     return (
//         <div
//             style={{
//                 background: "black",
//                 color: "white",
//                 borderRadius: 10,
//                 padding: "10px",
//                 margin: "10px",
//                 boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
//             }}
//         >
//             {innerContent}
//         </div>
//     );
// }

// // Export the App component for use in other files
// export default App;
//



//----------------------------------------------------------------------------------------------------------------]

// **********model 

// // Import useState from react
// import { useState } from "react";

// // Create a function component named App that will be rendered in the root element
// const App = () => {
//     // Create a state variable called isModalOpen and a function setModalOpen to update the state variable
//     const [isModalOpen, setModalOpen] = useState(false);

//     // Return the JSX that will be rendered in the browser
//     return (
//         <div>
//             {/* Create a button element with an onClick event handler that calls setModalOpen with true */}
//             <button onClick={() => setModalOpen(true)}>Open Modal</button>

//             {/* Render a Modal component with isOpen, onClose, and children props */}
//             <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
//                 <h2>Modal Title</h2> {/* Render a heading element with text content */}
//                 <p>This is some content inside the modal.</p> {/* Render a paragraph element with text content */}
//             </Modal>
//         </div>
//     );
// };

// // Create a Modal component that will render children elements passed to it as props
// const Modal = ({ isOpen, onClose, children }) => {
//     // If the modal is not open, return null
//     if (!isOpen) {
//         return null;
//     }

//     // Return JSX that will be rendered in the browser
//     return (
//         // Create a div element with inline CSS
//         <div
//             style={{
//                 position: "fixed",
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 backgroundColor: "rgba(0, 0, 0, 0.5)",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//             }}
//         >
//             <div
//                 style={{
//                     background: "white",
//                     padding: "20px",
//                     borderRadius: "5px",
//                 }}
//             >
//                 {/* Render a button element with an onClick event handler that calls onClose */}
//                 <button onClick={onClose}>Close</button>

//                 {/* Render any children elements passed to the Modal component */}
//                 {children}
//             </div>
//         </div>
//     );
// };

// // Export the App component as the default export to be used in other files or components
// export default App;



//---------------------------------------------------------------------------------------------------------------

// collapsible section

// // Import the useState hook from the react package 
// import { useState } from 'react';

// // Create a function component named App that will be rendered in the root element
// const App = () => {
//     // Return the JSX that will be rendered in the browser
//     return (
//         // Create a div element with JSX
//         <div>
//             {/* Render two Collapsible components with title and children props */}
//             <Collapsible title="Section 1">
//                 <p>This is the content of section 1.</p>
//             </Collapsible>
            
//             <Collapsible title="Section 2">
//                 <p>This is the content of section 2.</p>
//             </Collapsible>
//         </div>
//     );
// };

// // Create a Collapsible component that will render children elements passed to it as props
// const Collapsible = ({ title, children }) => {
//     // Create a state variable called isOpen and a function setIsOpen to update the state variable 
//     const [isOpen, setIsOpen] = useState(false);

//     // Return JSX that will be rendered in the browser
//     return (
//         // Create a div element with JSX
//         <div>
//             {/* Create a button element with an onClick event handler that calls setIsOpen with the opposite value of isOpen */}
//             <button onClick={() => setIsOpen(!isOpen)}>
//                 {title} {isOpen ? '-' : '+'} {/* Render the title and a plus or minus sign based on the value of isOpen */}
//             </button>
            
//             {/* Render the children elements if isOpen is true */}
//             {isOpen && <div>{children}</div>}
//         </div>
//     );
// };

// // Export the App component as the default export to be used in other files or components
// export default App;




//-----------------------------------------------------------------------------------------------------------------------------------

//***************************  Lists and keys  */

// // Create a function component named App that will be rendered in the root element
// function App() {
//   // Create an array of objects with todo items and their status (done or not done)
//   const todos = [
//       { title: "Get out of bed", done: true },
//       { title: "Brush teeth", done: false },
//       { title: "Go to the gym", done: false },
//       { title: "Eat breakfast", done: true },
//   ];

//   // Create an array of objects with item names and ids
//   const items = [
//       { id: 1, name: "Item 1" },
//       { id: 2, name: "Item 2" },
//       { id: 3, name: "Item 3" },
//   ];

//   // Return the JSX that will be rendered in the browser
//   return (
//       // Create a div element with JSX
//       <div>
//           {/* Render the Todo component for each todo item in the todos array */}
//           {todos.map((todo, index) => (
//               <Todo key={index} title={todo.title} done={todo.done} />
//           ))}

//           {/* Render the ItemList component with the items array */}
//           <ItemList items={items} />
//       </div>
//   );
// }

// // Create a Todo component that will render the title and status of a todo item
// function Todo({ title, done }) {
//   // Return JSX that will be rendered
//   return (
//       // Create a div element with JSX
//       <div>
//           {/* Render the title and status of the todo item */}
//           {title} - {done ? "Done" : "Not done"}
//       </div>
//   );
// }

// // Create an ItemList component that will render a list of items
// const ItemList = ({ items }) => {
//   // Return JSX that will be rendered
//   return (
//       // Create an unordered list element with JSX
//       <ul>
//           {/* Render a list item for each item in the items array */}
//           {items.map((item) => (
//               <li key={item.id}>{item.name}</li>
//           ))}
//       </ul>
//   );
// };

// // Export the App component as the default export to be used in other files or components
// export default App;


//----------------------------------------------------------------------------------------------------------------------

//******************** Inlined Css */

// // Create a function component named App that will be rendered in the root element
// function App() {
//   // Return the JSX that will be rendered in the browser
//   return (
//       // Create a div element with JSX
//       <div>
//           {/* Render the MyComponent component */}
//           <MyComponent />
//       </div>
//   );
// }

// // Create a MyComponent component that will render a div element with inline CSS
// function MyComponent() {
  
// // Return JSX that will be rendered
//   return (
//       // Create a div element with inline CSS
//       <div style={{ backgroundColor: "blue", color: "white", padding: 10, borderRadius: 20 }}>
//           Hello, World!
//       </div>
//   );
// }

// // Export the App component as the default export to be used in other files or components
// export default App;



//--------------------------------------------------------------------------------------------------------------------

//*****************************  class-based-vs-functional-components   */

// // Import useState and Component from react module
// import { useState, Component } from "react";

// // Create a functional component App that will be rendered in the root element
// function App() {
//     // Render the JSX that will be rendered in the browser
//     return (
//         // Create a div element with JSX
//         <div>
//             {/* Render the ClassCounter component  */}
//             <ClassCounter />

//             {/* Render the ClassCounter component  */}
//             <FunctionalCounter />
//         </div>
//     );
// }

// // Create a class-based component ClassCounter that will render a div element with a count property
// class ClassCounter extends Component {
//     // Create a state object with a count property set to 0
//     state = { count: 0 };

//     // Create a method named increment that will increment the count property by 1
//     increment = () => {
//         // Set the state of the count property to the current count plus 1 using setState method
//         this.setState({ count: this.state.count + 1 });
//     };

//     // Render the JSX that will be rendered in the browser
//     render() {
//         return (
//             // Create a div element with JSX
//             <div>
//                 {/* Render the count property from the state object */}
//                 <p>Count: {this.state.count}</p>

//                 {/* Create a button element with an onClick event that will call the increment method */}
//                 <button onClick={this.increment}>Increment</button>
//             </div>
//         );
//     }
// }

// // Create a functional component FunctionalCounter that will render a div element with a count property
// const FunctionalCounter = () => {
//     // Create a state object with a count property set to 0 using the useState hook
//     const [count, setCount] = useState(0);

//     // Create a function named increment that will increment the count property by 1
//     function increment() {
//         // Set the state of the count property to the current count plus 1 using the setCount function
//         setCount((count) => count + 1);
//     }

//     // Render the JSX that will be rendered in the browser
//     return (
//         // Create a div element with JSX
//         <div>
//             {/* Render the count property from the state object */}
//             <p>Count: {count}</p>

//             {/* Create a button element with an onClick event that will call the increment function */}
//             <button onClick={increment}>Increment</button>
//         </div>
//     );
// };

// // Export the App component as the default export to be used in other files or components
// export default App;



//-----------------------------------------------------------------------------------------------------------------------

//******************  classComponent lifeCycle */

// // Import the React from the react module
// import React from "react";

// // Create a function component named App that will be rendered in the root element
// function App() {
//     // Return the JSX that will be rendered in the browser
//     return (
//         // Create a div element with JSX
//         <div>
//             {/* Render MyComponent Component inside App */}
//             <MyComponent />
//         </div>
//     );
// }

// // Create a class component named MyComponent that extends React.Component class
// class MyComponent extends React.Component {
//     // Constructor method initializes state and logs to console
//     constructor(props) {
//         console.log("Constructor"); // Logs when the component is instantiated
//         super(props); // Calls the constructor of the parent class
//         this.state = { count: 0 }; // Initialize state with a count of 0
//     }

//     // componentDidMount is called after the component is inserted into the DOM
//     componentDidMount() {
//         console.log("Component Mounted"); // Logs when the component has mounted
//     }

//     // componentDidUpdate is called after the component's state or props are updated
//     componentDidUpdate(prevProps, prevState) {
//         console.log("Component Updated"); // Logs whenever the component updates
//     }

//     // componentWillUnmount is called just before the component is removed from the DOM
//     componentWillUnmount() {
//         console.log("Component will Unmount"); // Logs when the component is about to unmount
//     }

//     // The render method is responsible for rendering the component's UI
//     render() {
//         // Logs during the render process
//         console.log("Render");

//         // Return JSX that will be rendered in the browser
//         return (
//             // Create a div element with JSX
//             <div>
//                 {/* Display the current count from state */}
//                 <p>Count: {this.state.count}</p>

//                 {/* Button to increment the count by updating state */}
//                 <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
//             </div>
//         );
//     }
// }

// // Export the App component as the default export to be used in other files or components
// export default App;


//-------------------------------------------------------------------------------------------------------------------------

//************************ functional component lifecycle */

// // Import useState and useEffect hooks from React module
// import { useState, useEffect } from "react";

// // Create a function component named App that will be rendered in the root element 
// function App() {

//     // Return the JSX that will be rendered in the browser
//     return (
//         // Create a div element with JSX
//         <div>
//             {/* Render MyComponent inside App component */}
//             <MyComponent />
//         </div>
//     );
// }

// // Create a function component named MyComponent that will be rendered inside App component
// function MyComponent() {
//     // useState hook initializes count state with 0 and provides setCount to update it
//     const [count, setCount] = useState(0);

//     // useEffect hook runs when the component mounts or the count state changes
//     useEffect(() => {
//       // Logs on mount and count change
//         console.log("Component mounted or count updated");  
//     }, [count]);  // Dependency array with count ensures this runs when count changes

//     // useEffect hook runs only once when the component mounts and cleans up when it unmounts
//     useEffect(() => {
//       // Logs when the component has mounted
//         console.log("Component mounted");  
        
//         // Return a cleanup function to run when the component unmounts 
//         return () => {
//             console.log("Component will unmount");  // Logs when the component is about to unmount
//         };
//     }, []);  // Empty dependency array ensures this runs only on mount and unmount

//     // Return JSX that will be rendered in the browser
//     return (
//         // Create a div element with JSX
//         <div>
//             {/* Display the current count from state */}
//             <p>Count: {count}</p>
            
//             {/* Button to increment the count by updating state */}
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//         </div>
//     );
// }

// // Export the App component as the default export to be used in other files or components
// export default App; 



//--------------------------------------------------------------------------------------------------------------------

// ***********************  error boundry ******************

// // Import the ErrorBoundary component for error handling in the App component.
// import ErrorBoundary from "./ErrorBoundary";

// // Create a function component named App that will be rendered in the root element
// const App = () => {
//     // Return the JSX that will be rendered in the browser
//     return (
//         // Create a div element with JSX
//         <div>
//             {/* Wrap Card1 in ErrorBoundary to catch any potential rendering errors. */}
//             <ErrorBoundary>
//                 <Card1 /> {/* Renders Card1 component. */}
//             </ErrorBoundary>

//             {/* Similarly, wrap Card2 to ensure any errors are caught. */}
//             <ErrorBoundary>
//                 <Card2 /> {/* Renders Card2 component. */}
//             </ErrorBoundary>

//             {/* Card3 is not wrapped in ErrorBoundary, so errors will not be caught by the boundary. */}
//             <Card3 /> {/* Renders Card3 component. */}
//         </div>
//     );
// };

// // Create a function component named Card1 that will be rendered in the App component
// function Card1() {
//     // Throw an error to simulate a rendering error in the component.
//     throw new Error("Error While Rendering Card 1");

//     // Return the JSX that will be rendered in the browser
//     return (
//         // Renders the content of Card1 (though this code is unreachable due to the thrown error).
//         <div style={{ background: "red", borderRadius: 10, padding: 20 }}>
//             <h2>Card 1</h2>
//         </div>
//     );
// }

// // Create a function component named Card2 that will be rendered in the App component
// function Card2() {
//     // Return the JSX that will be rendered in the browser
//     return (
//         // Renders the content of Card2 with styling and padding, no errors thrown here.
//         <div style={{ background: "red", borderRadius: 10, padding: 20, marginTop: 20 }}>
//             <h2>Card 2</h2>
//         </div>
//     );
// }

// // Create a function component named Card3 that will be rendered in the App component
// function Card3() {
//     // Return the JSX that will be rendered in the browser
//     return (
//         // Renders the content of Card3 with styling similar to Card2.
//         <div style={{ background: "red", borderRadius: 10, padding: 20, marginTop: 20 }}>
//             <h2>Card 3</h2> 
//         </div>
//     );
// }

// // Exporting the main App component for use in the application.
// export default App;


// ----------------------------------------------------------------------------------------------------------------

// *********************************** fragment *****************


// Import
import { Fragment } from "react";

// Create a function component named App that will be rendered in the root element
function App() {
    // Return the JSX that will be rendered in the browser
    return (
        // Wrap the JSX in a Fragment to avoid adding an extra div element to the DOM
        <>
            <h1>Hello Baccho!</h1>

            {/* Render the MyComponent component */}
            <MyComponent />
        </>
    );
}

// Create a function component named MyComponent that will be rendered in the App component
const MyComponent = () => {
    // Return the JSX that will be rendered in the browser
    return (
        // Wrap the JSX in a Fragment to avoid adding an extra div element to the DOM
        <Fragment>
            <h2>Hello</h2>
            <p>World</p>
        </Fragment>
    );
};

// Exporting the main App component for use in the application.
export default App;
