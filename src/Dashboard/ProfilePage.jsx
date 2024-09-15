import React from 'react'
import Sidebar1 from "./components/Sidebar1"
import Profile from './components/Profile'

function ProfilePage() {
  return (
    <div className='flex'>
        <Sidebar1/>
        <Profile/>
    </div>
  )
}

export default ProfilePage