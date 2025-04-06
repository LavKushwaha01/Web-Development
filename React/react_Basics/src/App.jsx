import { useState, useEffect } from "react";

function App(){

  // conditional re-rendering

  const [countCondition, SetCounterVisible] = useState(true);

  useEffect( function(){
    setInterval(function(){
        SetCounterVisible(c=>!c);
    },5000);
  },[]);

  return  <div> 
   hii
  {countCondition &&  <Counter></Counter> } 
  hello
  </div>
}

function Counter() {
  const [count, setCount] = useState(0);
      
  function counter(){
   setCount(count+1);
  }

  // setCount( function(cunt){   // another way of  setCount(count=> count+1);
  //  cunt=cunt+1;
  // })
      
 console.log("counter")  // this is called on every re rendering call 


 // component mount then this logic will run
  useEffect(function(){
    console.log("ON MOUNT only if dependency array is empty")
  let clock = setInterval(function(){
    console.log("this is called regualry and contineously print")
  setCount(count=> count+1); 
  },1000);

  // component unmount it's stop executing insinde Setinterval  all logic which create multiple clock
  return function(){
    console.log("ON UNMOUNT only if dependency array is empty")
    clearInterval(clock)
  }
    console.log("inside interval") // this is called only once 
  },[]); // dependency array , cleanup and fetch inside useeffect

  // Arrow function call because of not calling the same re rendering , Arg of 2nd index of
  // state function takes first index here count in setCount instead of count c, a or anything
 // which is eqivalent to count

     return  <div>
      <h1>{count}</h1>
      <button onClick={counter}>increament</button>
     </div>
     
}

export default App;


// ---------------------------------------------------------------------------------

//  ****************dependacy Array *************

// // Import the useState and useEffect hooks from the React library

// // Create a functional component called App to serve as the root component
// function App() {
//     // Declare a state variable called 'count1' with an initial value of 0, and 'setCount1' to update it
//     const [count1, setCount1] = useState(0);

//     // Declare a state variable called 'count2' with an initial value of 0, and 'setCount2' to update it
//     const [count2, setCount2] = useState(0);

//     // Function to increase 'count1' by 1 when called
//     function increaseCount() {
//         setCount1(count1 + 1);
//     }

//     // Function to decrease 'count2' by 1 when called
//     function decreaseCount() {
//         setCount2(count2 - 1);
//     }

//     // Render the JSX layout of the component
//     return (
//         <div>
//             {/* Display the main heading */}
//             <h1>useEffect Cleanup and Dependency Array</h1>

//             {/* Render the Counter component and pass 'count1' and 'count2' as props */}
//             <Counter count1={count1} count2={count2} />

//             {/* Button to trigger 'increaseCount' function when clicked */}
//             <button onClick={increaseCount}>Increase Count</button>

//             {/* Button to trigger 'decreaseCount' function when clicked */}
//             <button onClick={decreaseCount}>Decrease Count</button>
//         </div>
//     );
// }

// // Create a functional component called Counter to display the count values passed as props
// function Counter(props) {
//     // Log message to indicate when the Counter component is re-rendered
//     console.log("Counter Component is Rendered");

//     // useEffect hook to handle side effects when the component is mounted and unmounted
//     useEffect(function () {
//         // Log message when the component is mounted
//         console.log("Counter Component is mounted");

//         // Return a cleanup function that logs when the component is unmounted
//         return function () {
//             console.log("Counter Component is unmounted");
//         };
//     }, []); // Empty dependency array ensures this effect runs only once (on mount and unmount)

//     // useEffect hook to handle side effects when 'props.count1' changes
//     useEffect(
//         function () {
//             // Log message whenever 'props.count1' changes
//             console.log("Count has changed");

//             // Return a cleanup function that logs after 'props.count1' changes
//             return function () {
//                 console.log("Cleanup inside second useEffect");
//             };
//         },
//         [props.count1]
//     ); // Dependency array makes this effect run only when 'props.count1' changes

//     // Render the JSX to display the counter values
//     return (
//         <div>
//             {/* Display the value of 'count1' passed from the parent component */}
//             <h2>Counter1: {props.count1}</h2>

//             {/* Display the value of 'count2' passed from the parent component */}
//             <h2>Counter2: {props.count2}</h2>
//         </div>
//     );
// }

// // Export the App component as the default export so it can be imported and used elsewhere
// export default App;