
import { useState , useEffect } from "react";

// export function usePostTitle(){

// const [post , setPost] = useState({});

//   async function getpost() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/5");
//     const json = await response.json();
//     setPost(json);
//   }

//   // whenever bakend request call or mount use effect run once 
//   useEffect( () =>{
//     getpost();
//  },[]);

//  return post.title;

// }


export function useFetch(url,retryTime) {

 const [data , setData] = useState({});
 const [loading , setLoading] = useState(true);

async function getdata(){
    setLoading(true);
const response = await fetch(url);
const json = await response.json();
setData(json)
setLoading(false);

}

useEffect( ()=>{
    getdata();
},[url])


useEffect( () =>{
   setInterval(() => {
    getdata();
   } , retryTime*1000);
},[])


return{
   data ,
   loading
}
}