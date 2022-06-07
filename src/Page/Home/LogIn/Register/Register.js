import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../../../firebase.init';
import SosalLogin from '../SosalLogin/SosalLogin';

const Register = () => {
    const [agree,setAgree] = useState(false);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handlelogin = () => {
        navigate('/login')
    }
    if (user) {
        navigate('/home')
    }
    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if(agree){
            createUserWithEmailAndPassword(email, password)
        }
    }
    return (
        <div>
            <h1 className='text-info text-center mt-2'>Places Register</h1>
            <div className='w-50 mx-auto loginfrom'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Your Name : </Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name :" required />
                    </Form.Group>

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
                     <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        {/* <Form.Check  onClick={() =>setAgree(!agree)} className={agree ? 'text-primary' : 'text-danger'} type="checkbox" label="Accept Genius Terms And Condition" /> */}
                        <Form.Check  onClick={() =>setAgree(!agree)} className={`p6-2 ${agree ? 'text-primary' : ''  }`} type="checkbox" label="Accept Genius Terms And Condition" />
                    </Form.Group>
                    <Button 
                    disabled={!agree}
                    className='w-50 d-block mx-auto mb-2'
                     variant="primary"
                      type="submit"
                      >
                        Register
                    </Button>
                    <p>Already Have An Account?<Link to='/login' className='registerButton' onClick={handlelogin}>LogIn</Link></p>
                    <SosalLogin></SosalLogin>
                </Form>
            </div>
        </div>
    );
};

export default Register;