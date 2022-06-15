import React, { useEffect, useState } from 'react';

const useHooks = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://ancient-hollows-54210.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services, setServices]
};

export default useHooks;