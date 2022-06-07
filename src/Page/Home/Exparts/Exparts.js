import React from 'react';
import { Card, CardGroup, Row } from 'react-bootstrap';
import expart1 from '../../../images/experts/expert-1.jpg'
import expart2 from '../../../images/experts/expert-2.jpg'
import expart3 from '../../../images/experts/expert-3.jpg'
import expart4 from '../../../images/experts/expert-4.jpg'
import expart5 from '../../../images/experts/expert-5.jpg'
import expart6 from '../../../images/experts/expert-6.png'
import Expart from '../Expart/Expart';

const Exparts = () => {
    const exparts = [
        { id: 1, name: 'Md Emon Hossen', img: expart1 },
        { id: 2, name: 'Md Shohag Mia', img: expart2 },
        { id: 3, name: 'Md Sujon Mia', img: expart3 },
        { id: 4, name: 'Md Siam Hassan', img: expart4 },
        { id: 5, name: 'Md Shojib Mia', img: expart5 },
        { id: 6, name: 'Md Rifat Mahamud', img: expart6 }
    ]
    return (
        <div id='exparts'>
            <h2 className='services-title mt-5 mb-5'>Our Exparts</h2>
            <div className='container'>
            <Row xs={1} md={3} className="g-4">
                    {exparts.map(expart => <Expart
                    key={expart.id}
                    expart={expart}
                    ></Expart>)}
                </Row>
            </div>
        </div>
    );
};

export default Exparts;