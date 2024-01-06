import axios from "axios";

const useUserData = () => {
  const fetchUsers = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  };
  return {
    queryKey: ["Users"],
    queryFn: fetchUsers,
    // gcTime:20000 ms
    // staleTime:120 * 1000
    //refetchOnMount: false
    //refetchOnWindowFocus:false
    // refetchInterval: 2 * 100
    enabled: false,
    //all useQuery
    //https://tanstack.com/query/latest/docs/react/reference/useQuery
  };
};

const useUserDetails = (id) => {
  const fetchUserDetails = ({ queryKey }) => {
    return axios.get(
      `https://jsonplaceholder.typicode.com/users/${queryKey[1]}`
    );
  };
  return { queryKey: ["Users", id], queryFn: fetchUserDetails };
};

export { useUserData , useUserDetails};
