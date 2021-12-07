import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faTimes,
  faPoll,
  faCopy,
  faLock,
  faChartBar
} from "@fortawesome/free-solid-svg-icons";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";
import SubMenu from "./SubMenu";

function SideBar(props) {

  const {
    isOpen,
    toggle
  } = props;

  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
      <div className="sidebar-header">
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

        {/* <Nav.Item id="about">
          <Nav.Link  href="/about" >
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            About
          </Nav.Link>
        </Nav.Item> */}

        <SubMenu
          title="Data Information"
          icon={faLock}
          items={[{name:"Website List", path:"website-list"}, {name: "Privacy", path: "privacy"}, {name: "How we made the list", path: "how-we-made-the-list"}]}
        />

        <Nav.Item id="survey">
          <Nav.Link  href="/survey">
            <FontAwesomeIcon icon={faPoll} className="mr-2" />
            Survey
          </Nav.Link>
        </Nav.Item>

        <SubMenu
          title="Visualization"
          icon={faChartBar}
          items={[{name:"Survey", path:"visualize-survey"}, {name: "Website", path: "visualize-website"}]}
        />
        {/* <Nav.Item id="contact">
          <Nav.Link  href="/contact">
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Contact
          </Nav.Link>
        </Nav.Item> */}

        
      </Nav>
    </div>
  );
}

export default SideBar;