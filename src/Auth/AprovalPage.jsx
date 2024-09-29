import React, { useEffect, useState } from 'react';
import { useFirebase } from '../Firebase/FireBase';
import { useNavigate } from 'react-router-dom';

const ApprovalPage = () => {
  const firebase = useFirebase();
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = () => {
      try {
        if (firebase.user) {
          setUser(firebase.user);
        } else {
          navigate('/auth/lawyer');
        }
      } catch (error) {
        console.error('Error fetching user:', error.message);
        // Optionally, navigate to an error page or display an error message
        navigate('/auth/lawyer'); // Redirect on error
      }
    };

    checkUser();
  }, [firebase.user, navigate]);

  return (
    <div>{user ? user : 'Loading...'}</div> // Display loading text while user data is being fetched
  );
};

export default ApprovalPage;
