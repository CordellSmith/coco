import React from 'react';
import { Card } from 'react-bootstrap';

function CocoCard() {
  return (
    <Card>
      <Card.Img style={{ width:'150px', height:'130px'}} src="https://www.freevector.com/uploads/vector/preview/17871/FreeVector-Computers-Icon.jpg" />
      <Card.Body>
        <Card.Title>Test Card</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CocoCard;