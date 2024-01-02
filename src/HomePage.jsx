import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
    const fetchUsers= async ()=>{
        const res= await fetch("https://jsonplaceholder.typicode.com/users");
        const data= await res.json();
        return data;
        
    }
   
    const {data,isLoading}=useQuery({queryKey: ['repoData'],queryFn:fetchUsers});
    if(isLoading) return <h1>Loading ...</h1>
  return (
    <div>
     {
        data.map(i => <h3 key={i.id}>{i.name}</h3>)
     }
    </div>
  )
}

export default HomePage
