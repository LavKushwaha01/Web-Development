
//*************COmponents in react ************

// // Create a function component named App that will be rendered in the root element
// function App() {
//   // return JSX that will be rendered
//   return (
//       // Apply inline styles to the div element
//       <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
//           <div
//               style={{
//                   display: "flex",
//                   justifyContent: "center"
//               }}
//           >
//               <div>
//                   <div>
//                       {/* Call PostComponent here to render it in the App component */}
//                       <PostComponent />
//                   </div>
//                   <div>
//                       {/* Call PostComponent here to render it in the App component */}
//                       <PostComponent />
//                   </div>
//                   <div>
//                       {/* Call PostComponent here to render it in the App component */}
//                       <PostComponent />
//                   </div>
//               </div>
//           </div>
//       </div>
//   );
// }

// // Create a style object to apply styles to the div element in PostComponent
// const style = {
//   width: 250,
//   backgroundColor: "white",
//   borderRadius: 10,
//   borderColor: "gray",
//   borderWidth: 1,
//   padding: 20,
//   margin: 10
// };

// // Create a function component named PostComponent that will be rendered in the App component
// function PostComponent() {
//   // return JSX that will be rendered
//   return (
//       // Apply style object to the div element
//       <div style={style}>
//           <div style={{ display: "flex" }}>
//               <img
//                   src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
//                   style={{ width: 40, height: 40, borderRadius: 40 }}
//               />
//               <div style={{ fontSize: 14, marginLeft: 10 }}>
//                   <b>100xdevs</b>
//                   <div>23,888 followers</div>
//                   <div>12m</div>
//               </div>
//           </div>
          
//           <div style={{ fontSize: 14 }}>
//               What to know how to win big? Check out how these folks won $6000 in bounties.
//           </div>
//       </div>
//   );
// }

// // Export App Component to use it in other components
// export default App;



///-------------------------------------------------------------------------------------------------------------------


//***************** probs ********************

// Create a function component named App that will be rendered in the root element
// function App() {
//   // return JSX that will be rendered
//   return (
//       // Apply inline styles to the div element
//       <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
//           <div
//               style={{
//                   display: "flex",
//                   justifyContent: "center",
//               }}
//           >
//               <div>
//                   <div>
//                       {/* Call PostComponent here with props to render it in the App component */}
//                       <PostComponent
//                           name={"Rohan"}
//                           followerCount={20}
//                           time={"20m ago"}
//                           image={"https://imgs.search.brave.com/F5OoHgfmJlOgbB00VWzyvvcxuQZk7JOPrCYV51JMmNU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI3/Mzc5NDUyL3Bob3Rv/L2tpdHR5LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz13UWcw/TXdTcXJxZkkzWHdN/WGREVjhkY2RZMlNH/WVh2YndPdE12cUxX/UWpJPQ"}
//                           description={"What to know how to win big? Check out how these folks won $6000 in bounties."}
//                       />
//                   </div>
//                   <div>
//                       <div>
//                           {/* Call PostComponent here with props to render it in the App component */}
//                           <PostComponent
//                               name={"Harkirat"}
//                               followerCount={30}
//                               time={"3m ago"}
//                               image={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
//                               description={"How to get hired in 2024? I lost my Job in 2023, this is the roadmap I followed to get hired in 2024."}
//                           />
//                       </div>
//                   </div>
//                   <div>
//                       <div>
//                           {/* Call PostComponent here with props to render it in the App component */}
//                           <PostComponent
//                               name={"Gaurav"}
//                               followerCount={50}
//                               time={"18m ago"}
//                               image={"https://imgs.search.brave.com/ZACv93qZO57A2RrexnAjJi9CTpejuyu2aIGeB9-2beA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTk0/OTM2My5qcGc"}
//                               description={"Here is the roadmap to become a Web3 developer in 2024."}
//                           />
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </div>
//   );
// }

// // Create a style object to apply styles to the div element in PostComponent
// const style = {
//   width: 250,
//   backgroundColor: "white",
//   borderRadius: 10,
//   borderColor: "gray",
//   borderWidth: 1,
//   padding: 20,
//   margin: 10,
// };

// // Create a function component named PostComponent with props to render it in the App component
// function PostComponent({ name, followerCount, time, image, description }) {
//   // return JSX that will be rendered
//   return (
//       // Apply style object to the div element
//       <div style={style}>
//           {/* display the name, followerCount, time, image, and description using props */}
//           <div style={{ display: "flex" }}>
//               <img src={image} style={{ width: 40, height: 40, borderRadius: 40 }} />
//               <div style={{ fontSize: 14, marginLeft: 10 }}>
//                   <b>{name}</b> 
//                   <div>{followerCount} followers</div>
//                   <div>{time}</div>
//               </div>
//           </div>

//           <div style={{ fontSize: 14 }}>{description}</div>
//       </div>
//   );
// }

// // Export App Component to use it in other components
// export default App;



// --------------------------------------------------------------------------------------------------------

// **********conditional rendering*****************


// Import the useState hook from react
// import { useState } from 'react';

// // Create a function component named App that will be rendered in the root element
// function App() {
//     // return JSX that will be rendered
//     return (
//         // Apply inline styles to the div element
//         <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
//             {/* Call ToggleMessage component here to render it in the App component */}
//             <ToggleMessage />

//             <div
//                 style={{
//                     display: "flex",
//                     justifyContent: "center",
//                 }}
//             >
//                 <div>
//                     <div>
//                         {/* Call PostComponent here with props to render it in the App component */}
//                         <PostComponent
//                             name={"Rohan Dev"}
//                             subtitle={"20 followers"}
//                             time={"20m ago"}
//                             image={
//                                 "https://imgs.search.brave.com/F5OoHgfmJlOgbB00VWzyvvcxuQZk7JOPrCYV51JMmNU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI3/Mzc5NDUyL3Bob3Rv/L2tpdHR5LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz13UWcw/TXdTcXJxZkkzWHdN/WGREVjhkY2RZMlNH/WVh2YndPdE12cUxX/UWpJPQ"
//                             }
//                             description={
//                                 "What to know how to win big? Check out how these folks won $6000 in bounties."
//                             }
//                         />
//                     </div>
//                     <div>
//                         <div>
//                             {/* Call PostComponent here with props to render it in the App component */}
//                             <PostComponent
//                                 name={"Harkirat"}
//                                 subtitle={"Promoted"}
//                                 image={
//                                     "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
//                                 }
//                                 description={
//                                     "How to get hired in 2024? I lost my Job in 2023, this is the roadmap I followed to get hired in 2024."
//                                 }
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// // Create a function component named ToggleMessage to render it in the App component
// const ToggleMessage = () => {
//     // Create a state variable isVisible and a function setIsVisible to toggle the visibility of the message
//     const [isVisible, setIsVisible] = useState(false);

//     // return JSX that will be rendered
//     return (
//         <div>
//             {/* Create a button to toggle the visibility of the message */}
//             <button onClick={() => setIsVisible(!isVisible)}>
//                 Toggle Message
//             </button>

//             {/* Conditionally render the message if isVisible is true */}
//             {isVisible && <p>This message is conditionally rendered!</p>}
//         </div>
//     );
// };

// // Create a style object to apply styles to the div element in PostComponent
// const style = {
//     width: 250,
//     backgroundColor: "white",
//     borderRadius: 10,
//     borderColor: "gray",
//     borderWidth: 1,
//     padding: 20,
//     margin: 10,
// };

// // Create a function component named PostComponent with props to render it in the App component
// function PostComponent({ name, subtitle, time, image, description }) {
//     // return JSX that will be rendered
//     return (
//         // Apply style object to the div element
//         <div style={style}>
//             <div style={{ display: "flex" }}>
//                 {/* Display the image, name, subtitle, and time */}
//                 <img src={image} style={{ width: 40, height: 40, borderRadius: 40 }} />
//                 <div style={{ fontSize: 14, marginLeft: 10 }}>
//                     <b>{name}</b> 
//                     <div>{subtitle}</div>

//                     {/* Condition is applied is ..like if time is not equal to undefined then do this or return null...its kind of if else statement */}
//                     {time !== undefined ? (
//                         <div style={{ display: "flex" }}>
//                             <div>{time}</div>
//                             <img
//                                 src="https://imgs.search.brave.com/HR4XL7q_XpiQSqNwAl17jYkdNBrGw-fKdXxJlCr-uls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM3/MDc3ODM3Ni9waG90/by9jbG9jay02LW9j/bG9jay5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VTZKUXI5/UFdPYmVuY2lOMHVj/QkgycXJFeWd5WlY4/VUdDem1UQ1pVRnVE/cz0"
//                                 style={{ width: 15, height: 15 }}
//                             />
//                         </div>
//                     ) : null}
//                 </div>
//             </div>

//             <div style={{ fontSize: 14, marginTop: 5 }}>{description}</div>
//         </div>
//     );
// }

// // Export App Component to use it in other components
// export default App;


// ------------------------------------------------------------------------------------------

//***********useState***********************


// // Importing useState hook from React for state management
// import { useState } from "react"; 

// // Importing the PostComponent from a local file
// import { PostComponent } from "./Post"; 

// // Main App component declaration
// function App() { 
//   // Initializing 'posts' state as an empty array and providing 'setPosts' to update it
//   const [posts, setPosts] = useState([]); 

//   // Mapping over 'posts' array to render each post as a PostComponent
//   const postComponents = posts.map(post => 
//     <PostComponent 
//       // Passing 'name' prop to PostComponent
//       name={post.name} 
//       // Passing 'subtitle' prop to PostComponent
//       subtitle={post.subtitle} 
//       // Passing 'time' prop to PostComponent (minor typo: should be post.time instead of post.title)
//       time={post.title} 
//       // Passing 'image' prop to PostComponent
//       image={post.image} 
//       // Passing 'description' prop to PostComponent
//       description={post.description} 
//     />
//   )

//   // Function to add a new post to the 'posts' state
//   function addPost() { 
//     // Using spread operator to add a new post while retaining existing posts
//     setPosts([...posts, { 
//       // Name of the user for the new post
//       name: "Rohan Dev Singh", 
//       // Subtitle for the new post
//       subtitle: "2000 followers", 
//       // Time for the new post
//       time: "12m ago", 
//       // Image URL for the new post
//       image: "https://assets-prd.ignimgs.com/2021/10/14/demonslayer-art-1634244394273.png", 
//       // Description for the new post
//       description: "Heyy Everyone!" 
//     }])
//   }

//   // JSX to render the App component UI
//   return ( 
//     // Styling the main container
//     <div style={{background: "#dfe6e9", height: "100vh", }}> 
//       {/* Button to add a new post on click */}
//       <button onClick={addPost}>Add post</button> 
//       {/* Flex container to center the content */}
//       <div style={{display: "flex", justifyContent: "center" }}> 
//         {/* Container for the list of posts */}
//         <div> 
//           {/* Rendering the list of PostComponents */}
//           {postComponents} 
//         </div>
//       </div>
//     </div>
//   )
// }

// // Exporting App component as the default export
// export default App;



// -------------------------------------------------------------------------------------------------------------

//**********UseEffect */


// Import the useState and useEffect hooks from react
// import { useState, useEffect } from "react";

// // Create a function component named App that will be rendered in the root element
// function App() {
//     // Create a state variable named count and a function to update it named setCount
//     const [count, setCount] = useState(0);

//     // useEffect hook to update the count state every 5 seconds 
//     useEffect(() => {
//         // setInterval function to update the count state every 5 seconds
//         const interval = setInterval(() => {
//             setCount(prev => prev + 1); // Update the count state by 1
//         }, 1000);

//         // Return a cleanup function to clear the interval when the component unmounts
//         return () => clearInterval(interval);
//     }, []); // Empty dependency array to run the effect only once when the component mounts

//     // return JSX that will be rendered
//     return (
//         <div>
//             {/* Display the count state in a div */}
//             <div>
//                 <h3>Stopwatch in React using useEffect</h3>
//             </div>
//             <div>
//             <h1>{count}</h1>
//             </div>
//         </div>
//     );
// }


// // Export the App component to use it in the other files
// export default App;



//--------------------------------------------------------------------------------------------------------------------

//*****************Linkedin Notification */

// // Import the useState hook from react
// import { useState } from "react";

// // Create a function component named App that will be rendered in the root element
// function App() {
//     // Create a state variable named count and a function to update it named setCount
//     const [count, setCount] = useState(1);

//     // Create a function named increaseCount that will increase the count state by 1
//     function increaseCount() {
//         // Call the setCount function to update the count state by 1
//         setCount(count + 1);
//     }

//     // return JSX that will be rendered
//     return (
//         <div style={{ background: "#dfe6e9", minHeight: "100vh", padding: 20 }}>
//             {/* Display the count state in a div */}
//             <div
//                 style={{
//                     background: "red",
//                     borderRadius: 30,
//                     width: 30,
//                     height: 30,
//                     paddingLeft: 10,
//                     paddingTop: 5,
//                     position: "relative",
//                     left: 12,
//                 }}
//             >
//                 {count}
//             </div>

//             {/* Add an image */}
//             <img
//                 src="https://cdn-icons-png.flaticon.com/512/472/472371.png"
//                 style={{
//                     width: 30,
//                     height: 30,
//                 }}
//             />

//             {/* Add a button that will call the increaseCount function when clicked */}
//             <button
//                 onClick={increaseCount}
//                 style={{
//                     marginLeft: 10,
//                     padding: 10,
//                     borderRadius: 5,
//                     cursor: "pointer",
//                 }}
//             >
//                 Increase the Count
//             </button>
//         </div>
//     );
// }

// // Export the App component to use it in the other files
// export default App;



//------------------------------------------------------------------------------------------------------

//*************************Linked in like top bar */


// // Import the useEffect and useState hooks from React
// import { useEffect, useState } from "react";

// // Import the App.css file to apply styles
// import "./App.css";

// // Create a function component named App that will be rendered in the root element 
// function App() {
//     // Create a state variable named currentTab and a function to update it named setCurrentTab that will be used to store the current tab number
//     const [currentTab, setCurrentTab] = useState(1);

//     // Create a state variable named tabData and a function to update it named setTabData that will be used to store the data for the current tab
//     const [tabData, setTabData] = useState({});

//     // Create a state variable named loading and a function to update it named setLoading that will be used to show a loading message
//     const [loading, setLoading] = useState(true);

//     // Use the useEffect hook to send a backend request to fetch the data for the current tab when the currentTab state changes
//     useEffect(
//         function () {
//             // Send a backend request to fetch the data for the current tab 
//             // Log the current tab to the console 
//             console.log("Sent request to backend to get data for tab", currentTab);

//             // Set the loading state to true to show a loading message 
//             setLoading(true);

//             // Fetch the data for the current tab from the backend 
//             fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab).then(async (res) => {
//                 const json = await res.json(); // Convert the response to JSON format 
//                 setTabData(json); // Update the tabData state with the fetched data 
//                 setLoading(false); // Set the loading state to false to hide the loading message
//             });
//         }, [currentTab]); // Add the currentTab state as a dependency to the useEffect hook 

//     // Return JSX that will be rendered 
//     return (
//         <div style={{ margin: 20, textAlign: "center" }}>
//             {/* Add 4 buttons to switch between the tabs */} 
//             <button
//                 onClick={function () {
//                     setCurrentTab(1);
//                 }}
//                 style={{ color: currentTab === 1 ? "red" : "black" }}
//             >
//                 Todo #1
//             </button>            
//             <button
//                 onClick={function () {
//                     setCurrentTab(2);
//                 }}
//                 style={{ color: currentTab === 2 ? "red" : "black" }}
//             >
//                 Todo #2
//             </button>
//             <button
//                 onClick={function () {
//                     setCurrentTab(3);
//                 }}
//                 style={{ color: currentTab === 3 ? "red" : "black" }}
//             >
//                 Todo #3
//             </button>
//             <button
//                 onClick={function () {
//                     setCurrentTab(4);
//                 }}
//                 style={{ color: currentTab === 4 ? "red" : "black" }}
//             >
//                 Todo #4
//             </button>

//             {/* Display the title of the current tab */} 
//             <div>{loading ? "Loading..." : tabData.title}</div>
//         </div>
//     );
// }

// export default App;



//-------------------------------------------------------------------------------------------------------

///*********************CountDown_App_With_CleanUp */

// // Import the useState and useEffect hooks from React
// import { useState, useEffect } from "react";

// // Create a function component named App that will be rendered in the root element
// function App() {
//     // Create a state variable named showTimer and a function to update it named setShowTimer
//     const [showTimer, setShowTimer] = useState(true);

//     // Use the useEffect hook to toggle the showTimer state after 5 seconds using setTimeout
//     useEffect(() => {
//         // Create a timeout that toggles the showTimer state after 5 seconds
//         setInterval(() => {
//             // Update the showTimer state by toggling its current value
//             setShowTimer((currentValue) => !currentValue);
//         }, 5000);
//     }, []); // Empty dependency array means this runs once when the component mounts.

//     // return JSX that will be rendered in the root element
//     return (
//         <div style={{ margin: 20, textAlign: "center" }}>
//             {/* Display the title of the app */}
//             <h1>Countdown App</h1>

//             {
//                 // Use the showTimer state to conditionally render the Timer component
//                 showTimer && <Timer />
//             }
//         </div>
//     );
// }

// // Create a function component named Timer that will be rendered in the App component
// function Timer() {
//     // Create a state variable named seconds and a function to update it named setSeconds
//     const [seconds, setSeconds] = useState(0);

//     // Use the useEffect hook to update the seconds state every second using setInterval
//     useEffect(() => {
//         // Create an interval that increments the seconds state by 1 every second
//         const clock = setInterval(() => {
//             console.log("Mounted");

//             // Update the seconds state by incrementing it by 1 every second
//             setSeconds((prev) => prev + 1);
//         }, 1000);

//         // Return a cleanup function that clears the interval when the component unmounts
//         return function () {
//             clearInterval(clock);
//         };
//     }, []); // Empty dependency array means this runs once when the component mounts.

//     // return JSX that will be rendered in the root element
//     return <h3>{seconds} seconds elapsed</h3>;
// }

// // Export the App component to use it in other files
// export default App;



//---------------------------------------------------------------------------------------------------

//*********************Fetch Data */

// Import useState and useEffect hooks from react
import { useState, useEffect } from "react";

// Create a function component named App that will be rendered in the root element
function App() {
    // Create a state variable named users and a function to update it named setUsers
    const [users, setUsers] = useState([]);

    // Create a state variable named loading and a function to update it named setLoading
    const [loading, setLoading] = useState(true);

    // Use the useEffect hook to fetch data from the API
    useEffect(() => {
        // Create an async function named fetchData that will fetch data from the API
        const fetchData = async () => {
            // Use a try-catch block to handle errors while fetching data
            try {
                // Fetch data from the API using the fetch function and store the response in the response variable
                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                // Convert the response to JSON format and store it in the data variable
                const data = await response.json();

                // Update the users state with the data fetched from the API
                setUsers(data);
            } catch (error) { // Catch any errors that occur while fetching data
                // Log the error to the console if there is an error while fetching data
                console.error("Error fetching data:", error);
            } finally { // this block will run whether the try block is successful or not
                // Update the loading state to false after fetching the data
                setLoading(false);
            }
        };

        // Call the fetchData function when the component mounts to fetch the data
        fetchData();
    }, []); // Empty dependency array means this runs once when the component mounts.

    // Display a loading message if the data is still being fetched
    if (loading) {
        // return JSX that will be rendered while the data is being fetched
        return <h2>Loading...</h2>;
    }

    // return JSX that will be rendered once the data is fetched successfully
    return (
        <div>
            <ul>
                {/* Map over the users array and display the user details in a list format */}
                {users.map((user) => (
                    // Display the user details in a list format with name, email, and city
                    <li key={user.id} style={{ margin: 10 }}>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>City: {user.address.city}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Export the App component to use it in the other files
export default App;