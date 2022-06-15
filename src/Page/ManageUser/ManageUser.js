import React from 'react';
import useHooks from '../../hooks/useHooks';
import { toast, ToastContainer } from 'react-toastify';

const ManageUser = () => {
    const [services, setServices] = useHooks();

    const handleDelete = id => {
        const proceed = window.confirm("Are You Sure To Delete Services")
        if(proceed){
            const url = `https://ancient-hollows-54210.herokuapp.com/service/${id}`
            fetch(url,{
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
               if(data.deletedCount > 0){
                const remaining = services.filter(service => service._id !== id)
                setServices(remaining);
                toast('Your Services Delete Completed')
               }
            })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h1>This is Manage User :{services.length}</h1>
            {
            services.map(service => <h3 key={service._id}>{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h3>)
            }
            <ToastContainer></ToastContainer>
        </div>
        
    );
};

export default ManageUser;