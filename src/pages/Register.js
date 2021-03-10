import React from 'react';
import{Container,Form,Button,Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Register() {
    return (
        <Container className="d-flex justify-content-center m-4">
        <Card
          className="shadow d-flex align-items-center"
          style={{ width: "35vw", height: "50vh" }}
        >
          <h2 className="m-4">Register</h2>
          <Form>
            <Form.Label>
            <Form.Group style={{ width: "20vw" }}>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" />
              </Form.Group>
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
                Already have an account?<Link to="/login">Login</Link>.
              </Form.Text>
            </Form.Label>
          </Form>
        </Card>
      </Container>
    )
}
