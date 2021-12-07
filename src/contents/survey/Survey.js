import { Component, lazy } from "react";
import { Button } from "react-bootstrap";
import QuestionCard from "../../components/questions/QuestionCard";
import questions from "../../data/questions";

import { db } from "../../firebase_utils/firebase";
import firebase from 'firebase/compat/app';
import { useNavigate } from "react-router-dom";

class Survey extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        nr: 0,
        total: questions.length,
        showNext: false,
        showPrev: false,
        score: 0,
    }
    this.nextQuestion = this.nextQuestion.bind(this);
    this.prevQuestion = this.prevQuestion.bind(this);
    this.handleShowButton = this.handleShowButton.bind(this);
    this.handleStartSurvey = this.handleStartSurvey.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleStartSurvey();
  }

  saveAnswer(nr) {
    localStorage.setItem(nr+1, this.state.choices.map(Number).join(','));
  }

  getAnswer(nr) {
    const choices =  localStorage.getItem((nr+1).toString());

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
          nr: nr + 1,
          showPrev: true
      });
    } else if (code === 0) {
        let choices = this.getAnswer(nr+1)
        this.setState({
          choices: choices != undefined? choices : Array(questions[nr].answers.length).fill(false),
          nr: nr,
          showNext: choices != undefined? true : false,
        });
    } else {
      let choices = this.getAnswer(nr-1)
      this.setState({
        choices: choices,
        nr: nr - 1,
        showPrev: nr - 1 > 0
      });
    }
  }

  componentWillMount() {
    let { nr } = this.state;
    this.pushQuestions(nr, 0);
  }

  nextQuestion() {
    // this.submitAnswer();   
    let { nr, total} = this.state;

    if(nr === total){
    } else {
      this.pushQuestions(nr, 1);
      let choices = this.getAnswer(nr+1)
      this.setState({
        showNext: choices != undefined? true : false,
        showPrev: true,
        choices: choices != undefined? choices : Array(questions[nr].answers.length).fill(false),
      });
    }
  }

  prevQuestion() {
    let { nr } = this.state;
    let choices = this.getAnswer(nr-1)
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
    for (var i=1; i<=this.state.total; i++) {
      localStorage.removeItem(i);
    }
  }

  handleCheckBox = (pos) => {
    const l = this.state.choices.length;
    let newChoices = Array(l).fill(false);
    newChoices[pos] = !this.state.choices[pos];
    this.setState({
      choices: newChoices,
      showPrev: this.state.nr > 0,
    });
  }

  submitAnswer = async () => {
    const answerData = db.collection('WebSurvey');
    for (var i=1; i<=this.state.total; i++) {
      let ans = this.getAnswer(i);
      if (ans == null) {
        ans = this.state.choices;
      }
      const idx = ans.findIndex(function (el) {
        return el != null && el === true;
      }) + 1;
      this.handleUpdate(answerData, i.toString(), idx);
      localStorage.removeItem(i);
    }
  
    this.props.navigation('/visualize-website');
  }

  handleUpdate(answerData, doc, key) {
    switch(key) {
      case 1:
        answerData.doc(doc).update({
          1: firebase.firestore.FieldValue.increment(1)
        })
        break;
      case 2:
        answerData.doc(doc).update({
          2: firebase.firestore.FieldValue.increment(1)
        })
        break;
      case 3:
        answerData.doc(doc).update({
          3: firebase.firestore.FieldValue.increment(1)
        })
        break;
      case 4:
        answerData.doc(doc).update({
          4: firebase.firestore.FieldValue.increment(1)
        })
        break;
      case 5:
        answerData.doc(doc).update({
          5: firebase.firestore.FieldValue.increment(1)
        })
        break;
      case 6:
        answerData.doc(doc).update({
          6: firebase.firestore.FieldValue.increment(1)
        })
        break;
      default:
        answerData.doc(doc).update({
          7: firebase.firestore.FieldValue.increment(1)
        })
        break;
    }
  }


  render() {

    let { nr, total, choices, showNext, showPrev} = this.state;

    return(
      <div className="mx-5 mx-sm-5">
        <h1 className="page-title mt-4">Survey</h1>
        <QuestionCard id={questions[nr].id} question={questions[nr].question} answers={questions[nr].answers} ranges={questions[nr].ranges} handleCheckBox={this.handleCheckBox} choices={choices} check= {this.handleCheckBox} showButton={this.handleShowButton} ></QuestionCard>
        <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group" role="group" aria-label="First group">
            {showPrev? <Button className="fancy-btn prev-button" onClick={this.prevQuestion} > Previous </Button> : null}
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              {showNext ? <Button className="fancy-btn next-button" onClick={nr === total-1 ? this.submitAnswer : this.nextQuestion} >{nr === total-1 ? 'Submit' : 'Next'}</Button> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default function(props) {
  const navigation = useNavigate();

  return <Survey {...props} navigation={navigation} />;
}