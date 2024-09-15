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
  })
   
  return (
    <div>hiii</div>
  )
}

export default AprovalPage