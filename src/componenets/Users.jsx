import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {

    // const fetchUsers= async ()=>{
    //     const res= await fetch("https://jsonplaceholder.typicode.com/users");
    //     const data= await res.json();
    //     return data;
        
    // }

    const fetchUsers = ()=> {return axios.get("https://jsonplaceholder.typicode.com/users");}
    
   
    const {data,isLoading,isError,error,refetch}=useQuery({queryKey: ['Users'],queryFn:fetchUsers , 
    // gcTime:20000 ms
   // staleTime:120 * 1000
   //refetchOnMount: false 
   //refetchOnWindowFocus:false
  // refetchInterval: 2 * 100 
  enabled :false,
                            //all useQuery
  //https://tanstack.com/query/latest/docs/react/reference/useQuery
    });
   // if(isLoading) return <h1>Loading ...</h1>
    //if(isError) return <h3>Somthing went wrong : {error.message}</h3>
  return (
    <div>
        <button onClick={refetch}>ReFetch Data</button>
        {
            isLoading && refetch && <h1>Loading...</h1>
        }
     {
        data?.data.map(i => <h3 key={i.id}><Link to={`/users/${i.id}`}>{i.name}</Link></h3>)
     }
    </div>
  )
}

export default Users
