import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";


// used https://react-bootstrap.github.io/components/navbar/

const GlobalNavbar = () => { 
  const navigate = useNavigate();

  return (
    <nav class="navbar navbar-expand-sm fixed-top navbar-light"> 
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link style={{color:'white'}} onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link style={{color:'white'}} onClick={() => navigate('/about')}>About</Nav.Link>
            <Nav.Link style={{color:'white'}}onClick={() => navigate('/news')}>News</Nav.Link>
            <Nav.Link style={{color:'white'}} onClick={() => navigate('/senators')}>Senators</Nav.Link>
            <Nav.Link style={{color:'white'}} onClick={() => navigate('/committees')}>Committees</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </nav>
  );
}

export default GlobalNavbar;
