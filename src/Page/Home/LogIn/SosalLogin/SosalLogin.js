import React from 'react';
import facebook from '../../../../images/social/facebook.png'
import google from '../../../../images/social/google.png'
import github from '../../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../../hooks/useToken';


const SosalLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [token] = useToken(user || user1)
    const navigate = useNavigate();
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";


    let errorElement;
    if (error || error1) {
        errorElement =
            <div>
                <p>Error: {error?.message} {error1?.message}</p>
            </div>
            ;
    }
    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex  align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='px-3 mt-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <p className='text-danger'>{errorElement}</p>
            <div className='facebook'>
                <button className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img src={facebook} alt="" />
                    <span>Facebook</span>
                </button>
            </div>
            <div className='facebook'>
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img src={google} alt="" />
                    <span>Google</span>
                </button>
            </div>
            <div className='facebook'>
                <button onClick={() => signInWithGithub()} className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img src={github} alt="" />
                    <span>Github</span>
                </button>
            </div>
        </div>
    );
};

export default SosalLogin;