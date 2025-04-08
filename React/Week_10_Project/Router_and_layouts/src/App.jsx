
// run npm i react-router-dom  to install first all the route library

import {BrowserRouter , Routes , Route , Link , useNavigate, Outlet } from "react-router-dom";

function App(){

  // here link is use for no loading all the html from starting basically for single page application
  // if we use "a" tag and href all the pages load first before switch to next route on clicking the button so here we use "Link"

  // layout is used to fix some content in all the pages like navigation and footer


  // "/" use in Route of layout is use for baound the route that is only accese by those routes under
  // which means "/" gives authodrity to run all routes starting from "/" is "/neet"  use in layout then all routes under
  // this layout is starting from neet and only of these will allow under routes other all is failed
  return <div>
  <BrowserRouter>

      <Routes>
      <Route path="/" element={<Layout />}> 
          <Route  path="/neet/online-coaching-class-11" element={<Class11Program />}  />
          <Route  path="/neet/online-coaching-class-12" element={<Class12Program />}  />
          <Route  path="/" element={<Landing />}  />
          <Route  path="*" element={<ErrorLanding/>}  />
      </Route>
      </Routes>
  </BrowserRouter>
  </div>
}

function Layout(){
  return <div style={{background: "black", height : "100vh",  color: "white"}}> 
   <Header />
   <div style={{background: "orange", height : "90vh" }}>
<Outlet />
</div>
footer
</div>
}

// outlet is middel part of site which changes and header and footer is constant in layout
function Landing(){
  return  <div>
    Allen home page
  </div>
}

function Header(){
  return <div>
    
    <Link to="/">Allen</Link>
      | 
      <Link to="/neet/online-coaching-class-11">Class 11</Link> 
      | 
      <Link to="/neet/online-coaching-class-12">Class 12</Link>
  </div>
}

function ErrorLanding(){
  return  <div>
   Anything of URL (after '/') except given in route is show this Error 
   As Something went wrong...
  </div>
}

function Class11Program() {
  return <div>
      NEET programs for Class 11th
  </div>
}

function Class12Program() {
  return <div>
      NEET programs for Class 12th
  </div>
}

export default App



// ---------------------------------------------------------------------------------------------

//********************** Detailed code  */





// // Import the necessary components from react-router-dom for routing
// import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

// // Create a function component named App that serves as the main application component
// function App() {

//     // Return the JSX for the component
//     return (
//         <div>
//             {/* Wrap the routes inside BrowserRouter for routing management */}
//             <BrowserRouter>
//                 <Routes>
//                     {/* Define a layout route to include a common layout structure (nav, footer) for all child routes */}
//                     <Route path="/" element={<Layout />}>
//                         <Route path="/" element={<Landing />} /> {/* Define the route for the landing page */}
//                         <Route path="/neet/online-coaching-class-11" element={<Class11Program />} /> {/* Define the route for the NEET Class 11 program page */}
//                         <Route path="/neet/online-coaching-class-12" element={<Class12Program />} /> {/* Define the route for the NEET Class 12 program page */}
//                         <Route path="*" element={<ErrorPage />} /> {/* Define a wildcard route to handle 404 errors for unknown paths */}
//                     </Route>
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     );
// }

// // Function component to display a 404 error message for unmatched routes
// function ErrorPage() {

//     // Return the JSX for the component
//     return (
//         <div>
//             {/* Display the 404 error message */}
//             <h1>404 Page not found</h1>
//         </div>
//     );
// }

// // Function component that serves as a layout wrapper containing navigation, content, and footer
// function Layout() {

//     // Return the JSX for the layout component
//     return (
//         <div style={{ height: "100vh" }}>
//             {/* Navigation section with links to different routes */}
//             <nav style={{ background: "yellow" }}>
//                 <Link to="/">Allen</Link> |{" "}
//                 <Link to="/neet/online-coaching-class-11">Class 11</Link> |{" "}
//                 <Link to="/neet/online-coaching-class-12">Class 12</Link>
//             </nav>
            
//             {/* Main content section with Outlet to render the child routes */}
//             <div style={{ height: "80vh", background: "gray" }}>
//                 <Outlet />
//             </div>
            
//             {/* Footer section with basic information */}
//             <footer style={{ background: "yellow" }}>Footer | Contact Us</footer>
//         </div>
//     );
// }

// // Function component for the landing page
// function Landing() {
//     // Return the JSX for the component
//     return (
//         <div>
//             {/* Display a welcome message on the landing page */}
//             <h1>Welcome to Allen</h1>
//         </div>
//     );
// }

// // Function component for displaying information about the NEET Class 11 program
// function Class11Program() {

//     // Return the JSX for the component
//     return (
//         <div>
//             {/* Display a heading for the Class 11 program */}
//             <h2>Neet Programs for Class 11th</h2>
//         </div>
//     );
// }

// // Function component for displaying information about the NEET Class 12 program
// function Class12Program() {
//     // useNavigate hook to enable programmatic navigation
//     const navigate = useNavigate();

//     // Function to navigate back to the landing page
//     function redirectUser() {
//         navigate("/"); // Navigate to the landing page ("/")
//     }

//     // Return the JSX for the component
//     return (
//         <div>
//             {/* Display a heading for the Class 12 program */}
//             <h2>Neet Programs for Class 12th</h2>

//             {/* Button that triggers a redirect to the landing page */}
//             <button onClick={redirectUser}>Back to Landing Page</button>
//         </div>
//     );
// }

// // Export the App component to make it available for rendering
// export default App;
