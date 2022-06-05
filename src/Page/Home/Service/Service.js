import React from 'react';
import { Button } from 'react-bootstrap';
import './Service.css'

const Service = ({service}) => {
    const {name,img,price,description} = service;

    return (
        <div className='service-container'>
          <img src={img} alt="" />  
          <h3>Name : {name}</h3>
          <p>Price :{price}</p>
          <p>{description}</p>
          <Button variant="primary">Book :{name}</Button>
        </div>
    );
};

export default Service;