  
import axios  from "axios"

  async function getblog(){

    const response = await   axios.get("https://jsonplaceholder.typicode.com/todos");
    return response.data

  }
  

  export default async function blog(){

  const blog = await getblog()

    return (
        (JSON.stringify(blog))
     
    )
}