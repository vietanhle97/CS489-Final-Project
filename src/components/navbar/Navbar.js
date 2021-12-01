import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, Nav, Dropdown, NavDropdown } from "react-bootstrap";

function NavBar(props) {

    const {
        toggle
    } = props

    return (
        <Navbar
          bg="light"
          className="navbar shadow-sm p-3 mb-5 bg-white rounded"
        >
          <div className="container-fluid">
            <Button variant="outline-info" onClick={toggle}>
              <FontAwesomeIcon icon={faAlignLeft} />
            </Button>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto" navbar>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <NavDropdown title="Data Information" id="nav-dropdown">
                  <NavDropdown.Item href="/website-list" id="nav-item">Website List</NavDropdown.Item>
                  <NavDropdown.Item href="/privacy" id="nav-item">Privacy</NavDropdown.Item>
                  <NavDropdown.Item href="/how-we-made-the-list" id="nav-item">How we made the list</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/survey">Survey</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      );
}

export default NavBar;