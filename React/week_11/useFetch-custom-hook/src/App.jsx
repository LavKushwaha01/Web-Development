import { useState , useEffect } from "react";

import "./App.css"
import { useFetch } from "../hooks/postTitle";


// function App(){

//   // By using hooks and function defined outside 

//    const postTitle = usePostTitle();


//   // by simple and inside function defined 

//   // const [post , setPost] = useState({});
//   // async function getpost() {
//   //   const response = await fetch("https://jsonplaceholder.typicode.com/posts/5");
//   //   const json = await response.json();
//   //   setPost(json);
//   // }


//   // // run only once (due to empty dependenci array) whenever bakend request call or mount use effect run once
//   //  not call again and again when the react re-render
//   // useEffect( () =>{
//   //   getpost();
//   // },[])


//   return (
//   <div>
//     {postTitle}
//   </div>
//   )
// }

function App(){
  const [count , setCount] = useState(1);
  const { data , loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" + count);

  if (loading){
    return <div>
        loading..
      </div>
    
  }


return(
  <div>
    <button onClick={()=> setCount(1)}>1</button>
    <button onClick={()=> setCount(2)}>2</button>
    <button onClick={()=> setCount(3)}>3</button>

  {JSON.stringify(data)}
  </div>
)
}

 export default App;