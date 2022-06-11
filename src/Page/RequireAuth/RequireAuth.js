import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useLocation, Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Spener from '../Shered/Spener/Spener';
import './RequireAuth.css'

function RequireAuth({ children }) {
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth)
  let [user, loading] = useAuthState(auth);
  let location = useLocation();
  if (loading) {
    return <Spener></Spener>
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
    return <div className='verifiyEmail'>
      <h1 className='text-danger '>Your Email is Not Verified</h1>
      <h3 className='text-success'>Places Verify Your Email</h3>
      <button
        className='btn btn-primary'
        onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}
      >
       Sent Verify Email
      </button>
      <ToastContainer></ToastContainer>
    </div>
  }

  return children;
}
export default RequireAuth;