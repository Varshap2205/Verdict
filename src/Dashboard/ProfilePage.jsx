import React, { useEffect, useState, useCallback } from 'react';
import Sidebar1 from "./components/Sidebar1";
import Profile from './components/Profile';
import { useFirebase } from '../Firebase/FireBase';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  // Memoize getData function so it doesn't change between renders
  const getData = useCallback(async () => {
    if (firebase.user) {
      const userDoc = await firebase.getDocs(firebase.user.uid);
      setUser(userDoc.data());
    }
  }, [firebase]);

  useEffect(() => {
    if (!firebase.user) {
      navigate('/');
    } else {
      getData(); // Safe to call as getData is memoized
    }
  }, [firebase.user, navigate, getData]); // Dependencies list now has memoized getData

  return (
    <div className='flex'>
      <Sidebar1 />
      <Profile user={user} />
    </div>
  );
}

export default ProfilePage;
