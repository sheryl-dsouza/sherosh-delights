import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Text from '../home.png'
import './Home.css'

function Home() {
    return (
        <div>
        <Row>
          <Col style={{background:'#FF89AD', minHeight:'1000px'}}><img class="full-width" src={Text}></img></Col>
          <Col style={{background:'#FFB4C6'}}><br></br></Col>
        </Row>
      </div>
    );
};

export default Home;
