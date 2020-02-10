import React from 'react';
import { Col, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';

const Checkbox = ({ type = 'checkbox', name, checked = false, onChange }) => (
  <input type={type} name={name} checked={checked} onChange={onChange} />
);

class SymptomsChecklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: new Map(),
      alertSuccessVisible: false,
      alertFailureVisible: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }
  handleInputChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked)
    }));
  }
  handleSubmit(e) {
    e.preventDefault();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    this.setState({
      checkedItems: new Map(),
      alertSuccessVisible: false,
      alertFailureVisible: false
    });
  }
  onDismiss() {
    this.setState({ alertSuccessVisible: false, alertFailureVisible: false });
  }
  render() {
    const checkboxes = [
      { id: '1', symptom: 'Skip lines while reading or copying' },
      { id: '2', symptom: 'Lose your place while reading or copying' },
      { id: '3', symptom: 'Skip words while reading or copying' },
      { id: '4', symptom: 'Substitute words while reading or copying' },
      { id: '5', symptom: 'Reread words or lines' },
      { id: '6', symptom: 'Reverse letters, numbers or words' },
      {
        id: '7',
        symptom: 'Use a finger or marker to keep place while reading or writing'
      },
      { id: '8', symptom: 'Read very slowly' },
      { id: '9', symptom: 'Poor reading comprehension' },
      { id: '10', symptom: "Difficulty remembering what you've read" },
      {
        id: '11',
        symptom: 'Close (within 7-8 inches) to reading and/or writing material'
      },
      { id: '12', symptom: 'Squint, close or cover one eye while reading' },
      {
        id: '13',
        symptom: 'Tilt head in an unusual posture when reading or writing'
      },
      {
        id: '14',
        symptom:
          'Headaches after intense visual activities such as reading or computer work'
      },
      { id: '15', symptom: 'Eyes hurt or feel tired after close work' },
      { id: '16', symptom: 'Unusually tired after completing a visual task' },
      { id: '17', symptom: 'Double vision' },
      {
        id: '18',
        symptom: 'Vision blurs at a distance when looking up from near work'
      },
      { id: '19', symptom: 'Crooked or poorly spaced writing' },
      {
        id: '20',
        symptom: 'Print moves or goes in and out of focus when reading'
      },
      { id: '21', symptom: 'Poor spelling skills' },
      { id: '22', symptom: 'Letters or lines “run together” when reading' },
      { id: '23', symptom: 'Words appear to jump on the page when reading' },
      { id: '24', symptom: 'Misalign letters or numbers' },
      { id: '25', symptom: 'Make errors when copying' },
      { id: '26', symptom: 'Difficulty tracking moving objects such as balls' },
      { id: '27', symptom: 'Clumsiness or poor coordination' },
      {
        id: '28',
        symptom: 'Difficulty with eye‐hand coordination sports such as baseball'
      },
      { id: '29', symptom: 'An eye that turns in or out' },
      {
        id: '30',
        symptom: 'One eye sees more clearly than the other, even with glasses'
      },
      { id: '31', symptom: 'Feel sleepy while reading' },
      {
        id: '32',
        symptom: 'Lose awareness of surroundings when concentrating'
      },
      { id: '33', symptom: 'Dislike tasks requiring sustained concentration' },
      { id: '34', symptom: 'Confuse right and left directions' },
      { id: '35', symptom: 'Restless when working at a desk' },
      { id: '36', symptom: 'You must feel things to "see" them' },
      { id: '37', symptom: 'Car sickness or motion sickness' },
      { id: '38', symptom: 'Excessive blinking' },
      { id: '39', symptom: 'Excessive eye rubbing' },
      { id: '40', symptom: 'Dry eyes' },
      { id: '41', symptom: 'Watery eyes' },
      { id: '42', symptom: 'Experiencing red eyes' },
      { id: '43', symptom: 'Sensitivity to light' }
    ];
    return (
      <Form onSubmit={this.handleSubmit} className="form mr-auto ml-auto">
        <Alert
          color="success"
          isOpen={this.state.alertSuccessVisible}
          toggle={this.onDismiss}
          fade={false}
        >
          Thank you, we have received for your message.
        </Alert>
        <Alert
          color="danger"
          isOpen={this.state.alertFailureVisible}
          toggle={this.onDismiss}
          fade={false}
        >
          Sorry, we encountered an error in sending your message.
        </Alert>
        <FormGroup>
          {checkboxes.map(item => (
            <label key={item.id}>
              {item.symptom}
              <Checkbox
                name={item.id}
                checked={this.state.checkedItems.get(item.id)}
                onChange={this.handleInputChange}
              />
            </label>
          ))}
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

export default SymptomsChecklist;
