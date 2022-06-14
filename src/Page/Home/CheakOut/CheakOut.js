import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useIdHooks from '../../../hooks/useIdHooks';
import { toast, ToastContainer } from 'react-toastify';
import PageTitle from '../../Shered/PageTitle/PageTitle';



const CheakOut = () => {
    const { serviceId } = useParams();
    const [service, setServices] = useIdHooks(serviceId);
    const [user] = useAuthState(auth);
    // const [user,setUser] = useState({
    //     name : 'emon',
    //     email : 'emon@gamail.com',
    //     address : 'natore,rajshahi',
    //     phone : '01822562843',
    // })

    // const handleAddressChange = event => {
    //     const {address, ...rest} = user;
    //     const NewAddress = event.target.value;
    //     const NewData = {address : NewAddress, ...rest}
    //     setUser(NewData);
    //     console.log(NewData);
    // }


    const handleSubmit = event => {
        event.preventDefault()
        const orders = {
            service: service.name,
            serviceId: serviceId,
            email: user.email,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        console.log(orders.email)

        axios.post('http://localhost:5000/oreders', orders)
            .then(response => {
                const { data } = response
                if (data.insertedId) {
                    toast('Your Booking Completed See O Soon!!!')
                    event.target.reset();
                }
            })
    }
    return (
        <div className='w-50 mx-auto mt-5 mb-3'>
            <PageTitle title='CheakOut'></PageTitle>
            <h5>This Is a Our Product Name : {service.name}</h5>
            <form className='w-100' onSubmit={handleSubmit}>
                <input className='w-100 mb-2' value={user.displayName} type="text" name="name" id="" placeholder='Enter Name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' value={user.email} type="email" name="email" id="" placeholder='Enter Email : ' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' value={service.name} type="text" name="name" id="" placeholder='Enter Email : ' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" name="address" id="" placeholder='Enter Address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="number" name="phone" id="" placeholder='Enter Phone Number' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Done" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default CheakOut;