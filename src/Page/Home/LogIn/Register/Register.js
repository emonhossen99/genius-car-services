import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'
import auth from '../../../../firebase.init';
import SosalLogin from '../SosalLogin/SosalLogin';
import Spener from '../../../Shered/Spener/Spener';
import PageTitle from '../../../Shered/PageTitle/PageTitle';
import useToken from '../../../../hooks/useToken';
import { toast, ToastContainer } from 'react-toastify';



const Register = () => {
    const [agree, setAgree] = useState(false);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user)
    if (loading || updating) {
        return <Spener></Spener>
    }
    const handlelogin = () => {
        navigate('/login')
    }
    if (token) {
        navigate('/home');
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        toast('Updated profile');
       
    }
    return (
        <div>
            <h1 className='text-info text-center mt-2'>Places Register</h1>
            <div className='w-50 mx-auto loginfrom'>
                <PageTitle title='Register'></PageTitle>
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
                        error && <p className='error'>{error?.message}</p>
                    }
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        {/* <Form.Check  onClick={() =>setAgree(!agree)} className={agree ? 'text-primary' : 'text-danger'} type="checkbox" label="Accept Genius Terms And Condition" /> */}
                        <Form.Check onClick={() => setAgree(!agree)} className={`p6-2 ${agree ? 'text-primary' : ''}`} type="checkbox" label="Accept Genius Terms And Condition" />
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
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Register;