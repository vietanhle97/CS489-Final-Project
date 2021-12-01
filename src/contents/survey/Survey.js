import { Component } from "react";
import { Button } from "react-bootstrap";
import QuestionCard from "../../components/questions/QuestionCard";
import questions from "../../data/questions";

class Survey extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        nr: 0,
        total: questions.length,
        showNext: false,
        showPrev: false,

        score: 0,
        displayPopup: 'flex'
    }
    this.nextQuestion = this.nextQuestion.bind(this);
    this.prevQuestion = this.prevQuestion.bind(this);
    this.handleShowButton = this.handleShowButton.bind(this);
    this.handleStartSurvey = this.handleStartSurvey.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
  }

  saveAnswer(nr) {
    localStorage.setItem(nr, this.state.choices.map(Number).join(','));
  }

  getAnswer(nr) {
    const choices =  localStorage.getItem(nr.toString());

    if (choices != undefined) {
      return choices.split(",").map(Number).map(Boolean);
    }

    return choices;    
  }
  // -1 = prev, 0 = init, 1 = next
  pushQuestions(nr, code) {
    if (code === 1) {
      this.saveAnswer(nr);
      this.setState({
          question: questions[nr].question,
          answers: questions[nr].answers,
          ranges: questions[nr].ranges,
          nr: this.state.nr + 1
      });
    } else if (code === 0) {
        let choices = this.getAnswer(nr+1)
        this.setState({
          question: questions[nr].question,
          answers: questions[nr].answers,
          ranges: questions[nr].ranges,
          choices: choices != undefined? choices : Array(questions[nr].answers.length).fill(false),
          nr: this.state.nr + 1,
          showNext: choices != undefined? true : false
        });
    } else {
      let choices = this.getAnswer(nr-1)
      this.setState({
        question: questions[nr].question,
        answers: questions[nr].answers,
        ranges: questions[nr].ranges,
        choices: choices,
        nr: this.state.nr - 1,
      });
    }
  }

  componentWillMount() {
    let { nr } = this.state;
    this.pushQuestions(nr, 0);
  }

  nextQuestion() {
    let { nr, total} = this.state;

    if(nr === total){
        this.setState({
            displayPopup: 'flex'
        });
    } else {
      this.pushQuestions(nr, 1);
      let choices = this.getAnswer(nr+1)
      this.setState({
        showNext: choices != undefined? true : false,
        showPrev: nr > 0,
        choices: choices != undefined? choices : Array(questions[nr].answers.length).fill(false),
      });
    }
  }

  prevQuestion() {
    console.log("hello")
    let { nr } = this.state;
    console.log(nr)
    let choices = this.getAnswer(nr-1)
    console.log(choices)
    this.pushQuestions(nr, -1);
    this.setState({
      showNext: true,
      showPrev: nr-1 > 0,
      choices: choices != undefined? choices : Array(questions[nr].answers.length).fill(false),
    });
    
  }
  
  handleShowButton() {
    this.setState({
        showNext: true,
        showPrev: this.state.nr > 1
    })
  }

  handleStartSurvey() {
      this.setState({
          nr: 1
      });
  }

  handleCheckBox = (pos) => {
    const l = this.state.choices.length;
    let newChoices = Array(l).fill(false);
    newChoices[pos] = !this.state.choices[pos];
    this.setState({
      choices: newChoices,
    });
  }


  render() {

    let { nr, total, question, answers, ranges, choices, showNext, showPrev} = this.state;

    return(
      <div className="mx-5 mx-sm-5">
        <h1 className="mt-4">Survey</h1>
        <QuestionCard question={question} answers={answers} ranges={ranges} handleCheckBox={this.handleCheckBox} choices={choices} check= {this.handleCheckBox} showButton={this.handleShowButton} ></QuestionCard>
        <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group" role="group" aria-label="First group">
            {nr > 1 ? <Button className="fancy-btn prev-button" onClick={this.prevQuestion} > Previous </Button> : null}
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              {showNext ? <Button className="fancy-btn next-button" onClick={this.nextQuestion} >{nr === total ? 'Submit' : 'Next'}</Button> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Survey;