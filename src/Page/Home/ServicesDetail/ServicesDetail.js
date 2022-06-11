import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServicesDetail = () => {
    const {serviceId} = useParams();
    const [service,setServices] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <h1>You Book Now : {service.name}</h1>
            <h5>Price: {service.price}</h5>
            <p>You Book Now : {service.description}</p>
            <p>
                <Link to='cheakout'><button>Cheakout</button></Link>
            </p>
        </div>
    );
};

export default ServicesDetail;