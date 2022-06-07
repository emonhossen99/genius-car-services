import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, Navigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spener from '../Shered/Spener/Spener';

function RequireAuth({ children }) {
  let [user, loading] = useAuthState(auth);
  let location = useLocation();
  if (loading) {
    return <Spener></Spener>
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
export default RequireAuth;