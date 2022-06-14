import React, { useEffect, useState } from 'react';

const useIdHooks = (serviceId) => {
    const [service,setServices] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return [service,setServices]
};

export default useIdHooks;