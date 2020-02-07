import React from 'react';
import { Col, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import emailjs from 'emailjs-com';

class ApptForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patientName: '',
      patientDOB: '',
      parentName: '',
      tel: '',
      email: '',
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
      morning: false,
      afternoon: false,
      contactbyphone: false,
      contactbyemail: false,
      alertSuccessVisible: false,
      alertFailureVisible: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
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
    e.preventDefault();
    const userID = 'user_U4tGWwpwOzAQ4FchtTo0x';
    const templateID = 'centerforbetterlearning_apptform';
    const templateParams = {
      to_name: 'info@centerforbetterlearning.com',
      patient_name: this.state.patientName,
      patient_dob: this.state.patientDOB,
      parent_name: this.state.parentName,
      from_tel: this.state.tel,
      reply_to: this.state.email,
      mon: this.state.mon ? 'monday' : '',
      tue: this.state.tue ? 'tuesday' : '',
      wed: this.state.wed ? 'wednesday' : '',
      thu: this.state.thu ? 'thursday' : '',
      fri: this.state.fri ? 'friday' : '',
      sat: this.state.sat ? 'saturday' : '',
      morning: this.state.morning ? 'morning' : '',
      afternoon: this.state.afternoon ? 'afternoon' : '',
      phone: this.state.contactbyphone ? 'phone' : '',
      email: this.state.contactbyemail ? 'email' : ''
    };
    emailjs.send('smtp_server', templateID, templateParams, userID).then(
      response => {
        console.log('SUCCESS!', response.status, response.text);
        this.setState({ alertSuccessVisible: true });
      },
      err => {
        console.log('FAILED...', err);
        this.setState({ alertFailureVisible: true });
      }
    );
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    this.setState({
      patientName: '',
      patientDOB: '',
      parentName: '',
      tel: '',
      email: '',
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
      morning: false,
      afternoon: false,
      contactbyphone: false,
      contactbyemail: false
    });
  }
  onDismiss() {
    this.setState({ alertSuccessVisible: false, alertFailureVisible: false });
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="form mr-auto ml-auto">
        <Alert
          color="success"
          isOpen={this.state.alertSuccessVisible}
          toggle={this.onDismiss}
          fade={false}
        >
          Thank you, we have received your appointment request.
        </Alert>
        <Alert
          color="danger"
          isOpen={this.state.alertFailureVisible}
          toggle={this.onDismiss}
          fade={false}
        >
          Sorry, we encountered an error in sending your request.
        </Alert>
        <FormGroup row>
          <Label for="patientName" md={3}>
            Patient Name
          </Label>
          <Col md={9} className="mb-auto mt-auto">
            <Input
              type="text"
              name="patientName"
              id="patientName"
              onChange={this.handleInputChange}
              value={this.state.patientName}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="parentName" md={3}>
            Parent Name{' '}
            <span style={{ fontStyle: 'italic' }}>(If patient is child)</span>
          </Label>
          <Col md={9} className="mb-auto mt-auto">
            <Input
              type="text"
              name="parentName"
              id="parentName"
              onChange={this.handleInputChange}
              value={this.state.parentName}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="patientDOB" md={3}>
            Patient Date of Birth
          </Label>
          <Col md={9} className="mb-auto mt-auto">
            <Input
              type="date"
              name="patientDOB"
              id="patientDOB"
              onChange={this.handleInputChange}
              value={this.state.patientDOB}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="tel" md={3}>
            Phone Number
          </Label>
          <Col md={9} className="mb-auto mt-auto">
            <Input
              type="number"
              name="tel"
              id="tel"
              onChange={this.handleInputChange}
              value={this.state.tel}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="email" md={3}>
            Email
          </Label>
          <Col md={9} className="mb-auto mt-auto">
            <Input
              type="email"
              name="email"
              id="email"
              onChange={this.handleInputChange}
              value={this.state.email}
              required
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label md={3}>Preferred Day of Week</Label>
          <Col md={9} className="row mb-auto mt-auto">
            <div>
              <label className="apptcheckbox">
                <input
                  name="mon"
                  type="checkbox"
                  checked={this.state.mon}
                  onChange={this.handleInputChange}
                />{' '}
                Monday
              </label>

              <label className="apptcheckbox">
                <input
                  name="tue"
                  type="checkbox"
                  checked={this.state.tue}
                  onChange={this.handleInputChange}
                />{' '}
                Tuesday
              </label>
            </div>
            <div>
              <label className="apptcheckbox">
                <input
                  name="wed"
                  type="checkbox"
                  checked={this.state.wed}
                  onChange={this.handleInputChange}
                />{' '}
                Wednesday
              </label>

              <label className="apptcheckbox">
                <input
                  name="thu"
                  type="checkbox"
                  checked={this.state.thu}
                  onChange={this.handleInputChange}
                />{' '}
                Thursday
              </label>
            </div>
            <div>
              <label className="apptcheckbox">
                <input
                  name="fri"
                  type="checkbox"
                  checked={this.state.fri}
                  onChange={this.handleInputChange}
                />{' '}
                Friday
              </label>

              <label className="apptcheckbox">
                <input
                  name="sat"
                  type="checkbox"
                  checked={this.state.sat}
                  onChange={this.handleInputChange}
                />{' '}
                Saturday
              </label>
            </div>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label md={3}>Preferred Time of Day</Label>
          <Col md={9} className="row mb-auto mt-auto">
            <label className="apptcheckbox">
              <input
                name="morning"
                type="checkbox"
                checked={this.state.morning}
                onChange={this.handleInputChange}
              />{' '}
              Morning
            </label>

            <label className="apptcheckbox">
              <input
                name="afternoon"
                type="checkbox"
                checked={this.state.afternoon}
                onChange={this.handleInputChange}
              />{' '}
              Afternoon
            </label>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label md={3}>Preferred Method of Contact</Label>
          <Col md={9} className="row mb-auto mt-auto">
            <label className="apptcheckbox">
              <input
                name="contactbyphone"
                type="checkbox"
                checked={this.state.contactbyphone}
                onChange={this.handleInputChange}
              />{' '}
              Phone
            </label>

            <label className="apptcheckbox">
              <input
                name="contactbyemail"
                type="checkbox"
                checked={this.state.contactbyemail}
                onChange={this.handleInputChange}
              />{' '}
              Email
            </label>
          </Col>
        </FormGroup>

        <FormGroup row className="">
          <Col className="text-center">
            <Button type="submit" color="primary" className="formBtn">
              Submit
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default ApptForm;
