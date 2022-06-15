import React, { useEffect, useState } from 'react';

const useIdHooks = (serviceId) => {
    const [service,setServices] = useState({});

    useEffect(() => {
        const url = `https://ancient-hollows-54210.herokuapp.com/service/${serviceId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return [service,setServices]
};

export default useIdHooks;