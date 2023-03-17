import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Text from '../Component 1-2.png'
import Cake from '../cake.png'
import './Home.css'
import Menu from '../menu-button.png'

function Home() {
    return (
        <div className="background">
          <div className="contains">
        <Row>
          <Col style={{background:'#FF89AD', minHeight:'700px', opacity:'.95', borderRadius:'20px 0 0 20px', boxShadow: '0px 0px 20px 0px rgba(128, 29, 82, 0.5)'}}>
            <img class="full-width" src={Text}></img>
            <p class= "para">some cute text over here telling everyone a little bit about you and your life. A small about page never hurt anyone and it is always great to have an audience to know your true backstory. Sometimes life gives you lemons and other times it does not but you must make the most out of it either way or its all hogwash.</p>
            <a href="www.test.com" class="menu"> 
            <img src={Menu} class="other"/> 
            </a>        
        </Col>
          <Col style={{background:'#FFECF2', opacity:'1', borderRadius:'0 20px 20px 0'}}>
                <img src={Cake} class="cake"></img>
          </Col>
        </Row>
        </div>
      </div>
    );
};

export default Home;
