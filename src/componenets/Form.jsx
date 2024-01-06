import { useMutation, useQuery } from '@tanstack/react-query'
import React from 'react'
import { usePostData } from '../hooks/postData'

const Form = () => {

    const {mutate,data}=usePostData()
console.log(data)
    const postHandler=()=>{
     const data={
            title: 'foo',
            body: 'bar',
            userId: 1,
    }
        mutate(data);
    }
  return (
    <div>
      <h1>Form</h1>
      <button onClick={postHandler}>Send </button>
    </div>
  )
}

export default Form
