import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function UserForm(props) {
  return (
    <Container>
      <Row>
        <Col>
          <img src="/logo.png" />
        </Col>
        <Col>
          <Form
            className={`my-form ${props.showInput === false ? "hide" : ""}`}
            onSubmit={props.handleLogin}
          >
            <Form.Group
              as={Row}
              className="mb-3 form-input"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  placeholder="Email Address"
                  id="email"
                  type="text"
                  defaultValue={props.email}
                  onChange={props.handleEmailChange}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3 form-input"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  placeholder="Password"
                  id="password"
                  type="password"
                  value={props.password}
                  onChange={props.handlePasswordChange}
                />
              </Col>
            </Form.Group>
            <Button variant="dark" type="submit">
              {props.buttonText}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default UserForm;
