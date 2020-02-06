import React from 'react';
import { Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import emailjs from 'emailjs-com';
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', tel: '', email: '', message: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.createAlert = this.createAlert.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  createAlert() {
    var alert = document.createElement('div'); // Create a <li> node
    alert.className = 'alert alert-success';
    var textnode = document.createTextNode('Sucess! Thank you'); // Create a text node
    alert.appendChild(textnode); // Append the text to <li>
    var form = document.getElementById('contactform'); // Get the <ul> element to insert a new node
    form.insertBefore(alert, form.childNodes[0]); // Insert <li> before the first child of <ul>
  }
  handleSubmit(e) {
    e.preventDefault();
    const userID = 'user_tMxXXkIPTSbBxvv05sm2e';
    const templateID = 'CenterForBetterLearning';
    const message = this.state.message.replace(/\\n/g, '<br>');
    console.log(message);
    const templateParams = {
      to_name: 'afarinac.14@gmail.com',
      from_name: this.state.name,
      from_tel: this.state.tel,
      reply_to: this.state.email,
      message_html: message
    };
    emailjs.send('gmail', templateID, templateParams, userID).then(
      response => {
        console.log('SUCCESS!', response.status, response.text);
        this.createAlert();
      },
      err => {
        console.log('FAILED...', err);
      }
    );
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    this.setState({ name: '', tel: '', email: '', message: '' });
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit} id="contactform">
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
        <Button type="submit" color="primary" className="formBtn">
          Submit
        </Button>
      </Form>
    );
  }
}

export default ContactForm;
