import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://ancient-hollows-54210.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='services'>
            <h1 className='services-title  mt-3 mb-3'>Our Services</h1>
            <div className=' services-container'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;