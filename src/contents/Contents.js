import { Component, lazy, Suspense } from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "../components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import ("./home/Home"));
const About = lazy(() => import ("./about/About"));
const Survey = lazy(() => import ("./survey/Survey"));
const Contact = lazy(() => import ("./contact/Contact"));
const WebList = lazy(() => import ("./data_information/WebList"));
const HowWeMadeList = lazy(() => import ("./data_information/HowWeMadeList"));
const Privacy = lazy(() => import ("./data_information/Privacy"));
const Visualization = lazy(() => import ("./visualization/Visualization"));

class Content extends Component {
  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/about" exact element={<About />}/>
                <Route path="/website-list" exact element={<WebList />}/>
                <Route path="/how-we-made-the-list" exact element={<HowWeMadeList />}/>
                <Route path="/privacy" exact element={<Privacy />}/>
                <Route path="/survey" exact element={<Survey />}/>
                <Route path="/visualize" exact element={<Visualization />}/>
                <Route path="/contact" exact element={<Contact />}/>
            </Routes>
          </Suspense>
        </Router>
      </Container>
    );
  }
}

export default Content;