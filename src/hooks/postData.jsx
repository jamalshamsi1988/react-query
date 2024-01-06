import { useMutation } from "@tanstack/react-query";
import axios from "axios"


const usePostData=()=>{


  const addPost=(data)=>{   return axios.post("https://jsonplaceholder.typicode.com/posts",data);}
  return useMutation({mutationFn:addPost})

}

export {usePostData}