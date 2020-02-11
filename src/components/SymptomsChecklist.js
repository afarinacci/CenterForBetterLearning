import React from 'react';
import {
  Col,
  Row,
  Form,
  FormGroup,
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle
} from 'reactstrap';

const Checkbox = ({ name, checked = false, onChange }) => (
  <input type="checkbox" name={name} checked={checked} onChange={onChange} />
);
const checkboxes = [
  { id: '1', symptom: 'Skip lines while reading or copying', score: 3 },
  {
    id: '2',
    symptom: 'Lose your place while reading or copying',
    score: 3
  },
  { id: '3', symptom: 'Skip words while reading or copying', score: 3 },
  {
    id: '4',
    symptom: 'Substitute words while reading or copying',
    score: 3
  },
  { id: '5', symptom: 'Reread words or lines', score: 3 },
  { id: '6', symptom: 'Reverse letters, numbers or words', score: 3 },
  {
    id: '7',
    symptom: 'Use a finger or marker to keep place while reading or writing',
    score: 3
  },
  { id: '8', symptom: 'Read very slowly', score: 3 },
  { id: '9', symptom: 'Poor reading comprehension', score: 3 },
  {
    id: '10',
    symptom: "Difficulty remembering what you've read",
    score: 3
  },
  {
    id: '11',
    symptom: 'Close (within 7-8 inches) to reading and/or writing material',
    score: 3
  },
  {
    id: '12',
    symptom: 'Squint, close or cover one eye while reading',
    score: 3
  },
  {
    id: '13',
    symptom: 'Tilt head in an unusual posture when reading or writing',
    score: 3
  },
  {
    id: '14',
    symptom:
      'Headaches after intense visual activities such as reading or computer work',
    score: 3
  },
  {
    id: '15',
    symptom: 'Eyes hurt or feel tired after close work',
    score: 3
  },
  {
    id: '16',
    symptom: 'Unusually tired after completing a visual task',
    score: 3
  },
  { id: '17', symptom: 'Double vision', score: 3 },
  {
    id: '18',
    symptom: 'Vision blurs at a distance when looking up from near work',
    score: 3
  },
  { id: '19', symptom: 'Crooked or poorly spaced writing', score: 3 },
  {
    id: '20',
    symptom: 'Print moves or goes in and out of focus when reading',
    score: 3
  },
  { id: '21', symptom: 'Poor spelling skills', score: 3 },
  {
    id: '22',
    symptom: 'Letters or lines “run together” when reading',
    score: 3
  },
  {
    id: '23',
    symptom: 'Words appear to jump on the page when reading',
    score: 3
  },
  { id: '24', symptom: 'Misalign letters or numbers', score: 3 },
  { id: '25', symptom: 'Make errors when copying', score: 3 },
  {
    id: '26',
    symptom: 'Difficulty tracking moving objects such as balls',
    score: 3
  },
  { id: '27', symptom: 'Clumsiness or poor coordination', score: 3 },
  {
    id: '28',
    symptom: 'Difficulty with eye‐hand coordination sports such as baseball',
    score: 3
  },
  { id: '29', symptom: 'An eye that turns in or out', score: 3 },
  {
    id: '30',
    symptom: 'One eye sees more clearly than the other, even with glasses',
    score: 3
  },
  { id: '31', symptom: 'Feel sleepy while reading', score: 2 },
  {
    id: '32',
    symptom: 'Lose awareness of surroundings when concentrating',
    score: 2
  },
  {
    id: '33',
    symptom: 'Dislike tasks requiring sustained concentration',
    score: 2
  },
  { id: '34', symptom: 'Confuse right and left directions', score: 2 },
  { id: '35', symptom: 'Restless when working at a desk', score: 2 },
  { id: '36', symptom: 'You must feel things to "see" them', score: 2 },
  { id: '37', symptom: 'Car sickness or motion sickness', score: 2 },
  { id: '38', symptom: 'Excessive blinking', score: 1 },
  { id: '39', symptom: 'Excessive eye rubbing', score: 1 },
  { id: '40', symptom: 'Dry eyes', score: 1 },
  { id: '41', symptom: 'Watery eyes', score: 1 },
  { id: '42', symptom: 'Experiencing red eyes', score: 1 },
  { id: '43', symptom: 'Sensitivity to light', score: 1 }
];
class SymptomsChecklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checkedItems: new Map() };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(state => ({
      checkedItems: state.checkedItems.set(item, isChecked)
    }));
  }
  handleSubmit(e) {
    e.preventDefault();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    this.setState({ checkedItems: new Map() });
  }
  render() {
    const totalScore = checkboxes.reduce((accumulator, currentValue) => {
      return (
        accumulator +
        (this.state.checkedItems.has(currentValue.id)
          ? this.state.checkedItems.get(currentValue.id)
            ? currentValue.score
            : 0
          : 0)
      );
    }, 0);
    return (
      <Form onSubmit={this.handleSubmit} className="form mr-auto ml-auto">
        <h1 className="text-center pageTitle">Symptoms Checklist</h1>
        <h5>Please check off all of your symptoms:</h5>
        <Row>
          <Col sm="12" md="8">
            <FormGroup>
              {checkboxes.map(item => (
                <div>
                  <label key={item.id}>
                    <Checkbox
                      name={item.id}
                      checked={this.state.checkedItems.get(item.id)}
                      onChange={this.handleInputChange}
                    />{' '}
                    {item.symptom}
                  </label>
                  <br />
                </div>
              ))}
            </FormGroup>
            <FormGroup row className="">
              <Col>
                <Button
                  type="submit"
                  color="primary"
                  className="formBtn"
                  onClick={this.handleSubmit}
                >
                  Clear
                </Button>
              </Col>
            </FormGroup>
          </Col>
          <Col sm="12" md="4" className="checklistcards text-center">
            <Card
              inverse
              style={{
                backgroundColor: 'var(--secondary)',
                borderColor: 'var(--secondary)'
              }}
            >
              <CardBody>
                <CardTitle>
                  <h4>Your Score: {totalScore}</h4>
                </CardTitle>
                <CardText>
                  A score of 20 or more indicates the need for a functional
                  vision evaluation.
                </CardText>
              </CardBody>
            </Card>
            <Card
              inverse
              style={{
                backgroundColor: 'var(--success)',
                borderColor: 'var(--success)'
              }}
            >
              <CardBody>
                <CardTitle>
                  <h5>15-20</h5>
                </CardTitle>
                <CardText>
                  You have a possible functional vision problem.
                </CardText>
              </CardBody>
            </Card>
            <Card
              inverse
              style={{
                backgroundColor: 'var(--warning)',
                borderColor: 'var(--warning)'
              }}
            >
              <CardBody>
                <CardTitle>
                  <h5>21-30</h5>
                </CardTitle>
                <CardText>
                  You have a probable functional vision problem.
                </CardText>
              </CardBody>
            </Card>
            <Card
              inverse
              style={{
                backgroundColor: 'var(--danger)',
                borderColor: 'var(--danger)'
              }}
            >
              <CardBody>
                <CardTitle>
                  <h5>31+</h5>
                </CardTitle>
                <CardText>
                  You have a definite functional vision problem.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default SymptomsChecklist;
