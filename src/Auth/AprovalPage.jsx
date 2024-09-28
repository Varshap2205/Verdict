import React, { useEffect, useState } from 'react'
import { useFirebase } from '../Firebase/FireBase'
import { useNavigate } from 'react-router-dom'

const AprovalPage = () => {
  const firebase = useFirebase()
  const [user,setUser] = useState('')
  const Navigate = useNavigate()
  
  useEffect(()=>{
    if(firebase.user){
      setUser(firebase.user)
    }else{
        Navigate('/auth/lawyer')
    }
  },[firebase.user,Navigate])
  return (
    <div>{user}</div>
  )
}

export default AprovalPage