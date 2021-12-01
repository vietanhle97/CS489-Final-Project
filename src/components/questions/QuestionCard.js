import { Component } from "react";
import { Card, FormCheck } from "react-bootstrap";

class QuestionCard extends Component {

  constructor(props) {
    super(props);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  checkAnswer(e) {
    const pos = Number(e.target.name);
    this.props.showButton();
    this.props.handleCheckBox(pos);
  }    
    render() {
      const choices = this.props.answers.map((answer, idx) => {
        const id = "inlineRadio" + (idx+1);
        const value = "option" + (idx+1);
        const name = idx;
        return (
          <FormCheck className="form-check-inline answer-choice">
            <input onChange={this.checkAnswer} className="check-input-form radio-button" type="radio" name={name} id={id}
              value={value} checked = {this.props.choices[idx]}/>
            <label className="form-check-label" for={id}>{answer}</label>
          </FormCheck>
        );
      }
      );
      return (
        <div className="mx-5 mx-sm-auto question-card align-items-center justify-content-center">
          <Card>
            <div className="card-body">
              <div className="text-center">
                <h3>
                  <strong>{this.props.question}</strong>
                </h3>
              </div>
  
              <div className="text-center mb-3 answer-choice">
                <div className="d-inline range-choice-min">
                  {this.props.ranges[0]}
                </div>
                {choices}
                <div className="d-inline range-choice-max">
                {this.props.ranges[1]}
                </div>
              </div>
            </div>
          </Card>
        </div>
      );
    }
}

export default QuestionCard;