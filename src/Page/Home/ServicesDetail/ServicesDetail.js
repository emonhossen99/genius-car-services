import React from 'react';
import { useParams } from 'react-router-dom';

const ServicesDetail = () => {
    const [servicesid] = useParams();
    return (
        <div>
            <h1>Welcome To Services Detail : {servicesid}</h1>
            <p>
                <button>Cheakout</button>
            </p>
        </div>
    );
};

export default ServicesDetail;