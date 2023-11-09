import { ReactNode, useEffect, useState } from 'react';

import { authorization } from '../../services/firebase';
import { onAuthStateChanged } from 'firebase/auth'
import { Navigate } from 'react-router-dom';

interface PrivateProps {
  children: ReactNode;
}

export function Private({ children } : PrivateProps): any{
  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(false);


  useEffect(() => {
    onAuthStateChanged(authorization, (user) => {
      const userData = { uid: user?.uid, email: user?.email }
      
      if (user) {
        localStorage.setItem('@links', JSON.stringify(userData));
        setLoading(false);
        setSigned(true);
      } else {
        setLoading(false);
        setSigned(false);
      }
    })
  }, [])

  if (loading) {
    return (
      <h1>Loading</h1>
    )
  }

  if (!signed) {
    return(
      <Navigate to='/sign-in' />
    )
  }

  return(
    children
  );
}