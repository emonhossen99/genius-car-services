import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {name,img,price,description,id} = service;
    const navigate = useNavigate();

    const handlePassId = id => {
      navigate(`service/${id}`)
    }
    return (
        <div className='service-container'>
          <img src={img} alt="" />  
          <h3>Name : {name}</h3>
          <p>Price :{price}</p>
          <p>{description}</p>
          <Button onClick={() => handlePassId(id)} variant="primary">Book :{name}</Button>
        </div>
    );
};

export default Service;