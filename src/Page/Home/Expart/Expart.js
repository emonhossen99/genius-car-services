import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Expart = ({ expart }) => {
    const { name, img } = expart;
    return (
        <div>
             <Col>
      <Card>
        <Card.Img variant="top" src={img}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <Button variant="primary">Here Now</Button>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Expart;


 
