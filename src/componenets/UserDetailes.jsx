import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { useUserDetails } from '../hooks/querys'

const UserDetailes = () => {
    const {id,name}=useParams()

    const {data}=useQuery(useUserDetails(id))

  return (
    <div>
    <h2>User Detail : {id } || {data?.data.name}</h2>
    </div>
  )
}

export default UserDetailes
