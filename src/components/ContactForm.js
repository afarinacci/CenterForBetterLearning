import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ContactForm = props => {
  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="contactFirstName">First Name</Label>
            <Input type="text" name="firstName" id="contactFirstName" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="contactLastName">Last Name</Label>
            <Input type="text" name="lastName" id="contactLastName" />
          </FormGroup>
        </Col>
      </Row>

      <FormGroup>
        <Label for="contactEmail">Email</Label>
        <Input type="email" name="email" id="contactEmail" />
      </FormGroup>
      <FormGroup>
        <Label for="contactMessage">Message</Label>
        <Input type="textarea" name="message" id="contactMessage" rows="6" />
      </FormGroup>
      <Button color="primary" className="formBtn">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
