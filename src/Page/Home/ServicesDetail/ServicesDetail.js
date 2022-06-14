import React, {  } from 'react';
import { Link, useParams } from 'react-router-dom';
import useIdHooks from '../../../hooks/useIdHooks';

const ServicesDetail = () => {
    const {serviceId} = useParams();
    const [service,setServices] = useIdHooks(serviceId);

   
    return (
        <div className='w-50 mx-auto'>
            <h1>You Book Now : {service.name}</h1>
            <h5>Price: {service.price}</h5>
            <p>You Book Now : {service.description}</p>
            <p>
                <Link to={`/cheakout/${serviceId}`}><button className='btn btn-primary'>Cheakout</button></Link>
            </p>
        </div>
    );
};

export default ServicesDetail;