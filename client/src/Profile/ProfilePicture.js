//profile image upload
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ProfileImage = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <Form className="form">
            <p>{props.msg}</p>
            <Form.Group controlId="formCategory4">
              <Form.Label>Profile Image</Form.Label>
              <Form.Control type="file" name="profileImage" />
            </Form.Group>
            <Button variant="dark">Update Profile Image</Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default ProfileImage;
