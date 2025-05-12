import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./NavBar.css"
function NavBar() {
  return (
    <div>
      {['lg'].map((expand) => (
        <Navbar bg="rgba(0, 0, 0, 0.9)" key={expand} expand={expand} className="nav-tab"  >
          <Container fluid >
            <Navbar.Brand as={Link} to="/" className="customnav-title">Ganesh Bommisetty</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" className="custom-burgericon">
              <span className="navbar-toggler-icon">
                <div></div> {/* Middle line */}
               </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarScroll" >
              <Nav
                className="ms-auto nav-list"
                navbarScroll
              >
                <Nav.Link as={Link} to="/"><span>Home</span></Nav.Link>
                <Nav.Link as={Link} to="/about"><span>About</span></Nav.Link>
                <Nav.Link as={Link} to="/skills"><span>Skills</span></Nav.Link>
                <Nav.Link as={Link} to="/education"><span>Education</span></Nav.Link>
                <Nav.Link as={Link} to="/resume"><span>Resume</span></Nav.Link>
                <Nav.Link as={Link} to="/contact"><span>Contact</span></Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default NavBar;
