import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faTimes,
  faPoll
} from "@fortawesome/free-solid-svg-icons";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";

function SideBar(props) {

  const {
    isOpen,
    toggle
  } = props;

  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
      <div className="sidebar-header">
        <Button
          variant="link"
          onClick={toggle}
          style={{ color: "#fff" }}
          className="mt-4"
        >
          <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
        </Button>
        <h3>Computer Ethics</h3>
      </div>

      <Nav className="flex-column pt-2">
        <p className="ml-3">Menu</p>

        <Nav.Item id="home">
          <Nav.Link href="/">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Home
          </Nav.Link>
        </Nav.Item>

        <Nav.Item id="about">
          <Nav.Link  href="/about" >
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            About
          </Nav.Link>
        </Nav.Item>

        <Nav.Item id="survey">
          <Nav.Link  href="/survey">
            <FontAwesomeIcon icon={faPoll} className="mr-2" />
            Survey
          </Nav.Link>
        </Nav.Item>

        <Nav.Item id="contact">
          <Nav.Link  href="/contact">
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default SideBar;