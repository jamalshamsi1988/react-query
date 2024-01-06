import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetailes = () => {
    const {id,name}=useParams()

    const fetchUserDetails=({queryKey})=>{
        return axios.get(`https://jsonplaceholder.typicode.com/users/${queryKey[1]}`)

    }
    const {data}=useQuery({queryKey: ['Users',id],queryFn:fetchUserDetails })

  return (
    <div>
    <h2>User Detail : {id }|| {data?.data.name}</h2>
    </div>
  )
}

export default UserDetailes
