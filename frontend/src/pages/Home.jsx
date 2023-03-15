import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    return (
        <div>
        <Row>
          <Col style={{background:'#FF89AD', minHeight:'1000px'}}>1 of 1</Col>
          <Col style={{background:'#FFB4C6'}}>1 of 2 <br></br></Col>
        </Row>
      </div>
    );
};

export default Home;
