import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getOrders = async () => {
            const email = user?.email;
            const url = `https://ancient-hollows-54210.herokuapp.com/orders?email=${email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setOrders(data)
            }
            catch(error){
                if (error.response.status === 401 || error.response.status === 403){
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getOrders()
    }, [user])

    return (
        <div className='w-50 mx-auto text-info mt-3 mb-2'>
            <h1>This Is A Orders Pages : {orders.length}</h1>
            {
                orders.map(order => <p key={order._id}>{order.email} : {order.service}</p>)
            }
        </div>
    );
};

export default Orders;