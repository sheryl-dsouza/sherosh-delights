import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import './GlobalNavbar.css'

// used https://react-bootstrap.github.io/components/navbar/

const GlobalNavbar = () => { 
  const navigate = useNavigate();

  return (
    <Navbar class='navbar-expand'> 
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/about')}>About</Nav.Link>
            <Nav.Link onClick={() => navigate('/news')}>News</Nav.Link>
            <Nav.Link onClick={() => navigate('/senators')}>Senators</Nav.Link>
            <Nav.Link onClick={() => navigate('/committees')}>Committees</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default GlobalNavbar;
