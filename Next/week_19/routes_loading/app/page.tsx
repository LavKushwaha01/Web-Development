import axios from "axios"
import { promise } from "zod";


export default  async function Home() {

   const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");

  await new Promise(r => setTimeout(r,5000))

  const data = response.data;

  return (
    <div>
    user detail
   
    {data.name}
    {data.email}
   </div>
  );
}
