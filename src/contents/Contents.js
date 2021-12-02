import { Component } from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "../components/navbar/Navbar";
import Home from "./home/Home";

import About from "./about/About";
import Survey from "./survey/Survey";
import Contact from "./contact/Contact";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebList from "./data_information/WebList";
import HowWeMadeList from "./data_information/HowWeMadeList";
import Privacy from "./data_information/Privacy";


class Content extends Component {
  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />
        <Router>
          <Routes>
              <Route path="/" exact element={<Home />}/>
              <Route path="/about" exact element={<About />}/>
              <Route path="/website-list" exact element={<WebList />}/>
              <Route path="/how-we-made-the-list" exact element={<HowWeMadeList />}/>
              <Route path="/privacy" exact element={<Privacy />}/>
              <Route path="/survey" exact element={<Survey />}/>
              <Route path="/contact" exact element={<Contact />}/>
          </Routes>
        </Router>
      </Container>
    );
  }
}

export default Content;