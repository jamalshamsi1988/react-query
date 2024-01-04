import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Users = () => {

    // const fetchUsers= async ()=>{
    //     const res= await fetch("https://jsonplaceholder.typicode.com/users");
    //     const data= await res.json();
    //     return data;
        
    // }

    const fetchUsers = ()=> {return axios.get("https://jsonplaceholder.typicode.com/users");}
   
    const {data,isLoading,isError,error}=useQuery({queryKey: ['repoData'],queryFn:fetchUsers , 
    // gcTime:20000 ms
   // staleTime:120 * 1000
   //refetchOnMount: false 
   refetchOnWindowFocus:false
    });
    if(isLoading) return <h1>Loading ...</h1>
    if(isError) return <h3>Somthing went wrong : {error.message}</h3>
  return (
    <div>
     {
        data.data.map(i => <h3 key={i.id}>{i.name}</h3>)
     }
    </div>
  )
}

export default Users
