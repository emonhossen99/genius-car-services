import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import './LogIn.css'
import SosalLogin from './SosalLogin/SosalLogin';


const LogIn = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate();
    const location = useLocation()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }
    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value
        await sendPasswordResetEmail(email);
        alert('Sent email');
      }

    const handleregiser = () => {
        navigate('/register')
    }

    return (
        <div>
            <h1 className='text-info text-center mt-2'>Places Login</h1>
            <div className='w-50 mx-auto loginfrom'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                   
                    {
                        loading && <p className='loading'>Loading...</p>
                    }
                     {
                    error && <p className='error'>{error?.message}</p>
                    }
                    <Button variant="primary" type="submit" className='w-50 d-block mx-auto mb-2'>
                        LogIn
                    </Button>
                    <p>New To Genius Car?<Link to='/register' className='registerButton' onClick={handleregiser}>Register Now</Link></p>
                    <p>Forget Password?<span className='registerButton' onClick={handleResetPassword}>ForGet PassWord</span></p>
                </Form>
                <SosalLogin></SosalLogin>
            </div>
        </div>
    );
};

export default LogIn;