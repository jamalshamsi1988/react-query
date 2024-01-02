import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const HomePage = () => {
    // const fetchUsers= async ()=>{
    //     const res= await fetch("https://jsonplaceholder.typicode.com/users");
    //     const data= await res.json();
    //     return data;
        
    // }
    const fetchUsers = ()=> {return axios.get("https://jsonplaceholder.typicode.com/users");}
   
    const {data,isLoading}=useQuery({queryKey: ['repoData'],queryFn:fetchUsers});
    if(isLoading) return <h1>Loading ...</h1>
  return (
    <div>
     {
        data.data.map(i => <h3 key={i.id}>{i.name}</h3>)
     }
    </div>
  )
}

export default HomePage
