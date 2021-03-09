import React from "react";
import { Button, Container, Card } from "react-bootstrap";


export default function CardRecipe(props) {
  return (
    <Container>
      <Card className="shadow " style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary">Check Recipe</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
