import  { Component } from "react";
import question from "../../question.png";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

class FlippingCard extends Component {
  constructor(props) {
    super(props);
    this.state = { flipped: false };
    this.flip = this.flip.bind(this);
  }

  flip = () => {
    this.setState({ flipped: !this.state.flipped });
  }
  render() {
    return (
      <div className="page-container">
        <div onClick={this.flip} className={"card-container" + (this.state.flipped ? " flipped" : "")}>
          <Front content={this.props.content}/>
          <Back isSensitive={this.props.isSensitive}/>
        </div>
      </div>
    )
  }
}

class Front extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="front">
        <ImageArea />
        <MainArea content={this.props.content}/>
      </div>
    )
  }
}

class Back extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.isSensitive) {
      return (
        <div className="back">
          <div className="back-text">
            - Personal info: age, gender, email address, phone number, financial info
          </div>
          <div className="back-text">
            - User activity: age, gender, email address, phone number, financial info
          </div>
          <div className="back-text">
            - Location info: delivery address, GPS
          </div>
          <div className="back-text">
            - Private life: audio, conversation recording 
          </div>
        </div>
      );
    }
    return (
      <div className="back">
        <div className="back-text">
          - Technical info: IP address, crash reports, date/time visits, device type, device activity 
        </div>
      </div>
    );
  }
}

class ImageArea extends Component {
  render() {
    return (
      <div className="container-fluid image-container d-flex justify-content-center">
        <img className="card-image" src={question}></img>
      </div>
    )
  }
}

class MainArea extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main-area">
        <div className="blog-post">
          <div className="read-more">
            {this.props.content}
          </div>
          <div className="blog-content">Click to find out</div>
        </div>

      </div>
    )
  }
}


export default FlippingCard;