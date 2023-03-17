import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import './GlobalNavbar.css'
import { Link } from "react-scroll";

// used https://react-bootstrap.github.io/components/navbar/

const GlobalNavbar = () => { 
  const navigate = useNavigate();

  return (
    <nav class="navbar navbar-expand-sm fixed-top navbar-light"> 
    <link href='https://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet'/>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => navigate('/') }>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/menu')}>Menu</Nav.Link>
            <Nav.Link onClick={() => navigate('/about')}>About</Nav.Link>
            <Nav.Link onClick={() => navigate('/contact')}>Contact</Nav.Link>
            <Nav.Link onClick={() => navigate('/news')}>Gallery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </nav>
  );
}

export default GlobalNavbar;
