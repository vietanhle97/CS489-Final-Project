import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, Nav } from "react-bootstrap";

function NavBar(props) {

    const {
        toggle
    } = props

    return (
        <Navbar
          bg="light"
          className="navbar shadow-sm p-3 mb-5 bg-white rounded"
          expand
        >
          <div class="container-fluid">
            <Button variant="outline-info" onClick={toggle}>
              <FontAwesomeIcon icon={faAlignLeft} />
            </Button>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto" navbar>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/survey">Survey</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      );
}

export default NavBar;