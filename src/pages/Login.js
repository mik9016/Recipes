import React from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <Container className="d-flex justify-content-center m-4">
      <Card
        className="shadow d-flex align-items-center"
        style={{ width: "35vw", height: "50vh" }}
      >
        <h2 className="m-4">Login</h2>
        <Form>
          <Form.Label>
            <Form.Group style={{ width: "20vw" }}>
              <Form.Label>Email adress</Form.Label>
              <Form.Control type="text" placeholder="Email" />
            </Form.Group>
            <Form.Group>
              <Form.Label> Password</Form.Label>
              <Form.Control type="password" placeholder="password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <Form.Text>
              Don't have an account?<Link to="/register">Register</Link> first.
            </Form.Text>
          </Form.Label>
        </Form>
      </Card>
    </Container>
  );
}
