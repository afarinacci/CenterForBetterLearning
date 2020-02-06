import React from 'react';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', tel: '', email: '', message: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e) {
    const userID = 'user_tMxXXkIPTSbBxvv05sm2e';
    const template = 'CenterForBetterLearning';
    e.preventDefault();
    console.log(this.state.name + ' ' + this.state.tel);
    this.setState({ name: '', tel: '', email: '', message: '' });
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="contactName">First Name</Label>
              <Input
                type="text"
                name="name"
                id="contactName"
                onChange={this.handleInputChange}
                value={this.state.name}
                required
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="contactTel">Phone Number</Label>
              <Input
                type="number"
                name="tel"
                id="contactTel"
                onChange={this.handleInputChange}
                value={this.state.tel}
                required
              />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Label for="contactEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="contactEmail"
            onChange={this.handleInputChange}
            value={this.state.email}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="contactMessage">Message</Label>
          <Input
            type="textarea"
            name="message"
            id="contactMessage"
            rows="6"
            onChange={this.handleInputChange}
            value={this.state.message}
            required
          />
        </FormGroup>
        <input
          type="submit"
          value="Submit"
          className="btn btn-primary formBtn"
        />
      </Form>
    );
  }
}

export default ContactForm;
