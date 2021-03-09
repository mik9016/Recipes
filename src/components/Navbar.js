import React from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

export default function Navbar() {
  return (
    <Container>
      <Row >
        <ul className="d-flex ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </Row>
    </Container>
  );
}
