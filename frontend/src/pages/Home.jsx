import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Text from '../Component 1-2.png'
import Cake from '../cake.png'
import './Home.css'
import Menu from '../menu-button.png'
import {Link} from 'react-scroll'
import {isMobile} from 'react-device-detect';

function Home() {
  if (isMobile) {
    return (<div className="background">
    <div className="contains">
  <Row>
    <Col style={{background:'#FF89AD', opacity:'.95', borderRadius:'20px', boxShadow: '0px 0px 20px 0px rgba(128, 29, 82, 0.5)' }}>
    <img src={Cake} style={{width:'40%', borderRadius:'20px', marginTop:'5%',marginLeft:'auto', marginRight:'auto', display:'block'}}></img>
      <p className="para" style={{marginLeft:'auto', marginRight:'auto', display:'block', textAlign:'center'}}>Welcome to Sherosh Delights!</p>
      <Link activeClass="active" smooth spy to="menu">
        <img src={Menu} class="other" style={{marginLeft:'auto', marginRight:'auto', display:'block', blockSize:'10%'}}/> 
      </Link>        
  </Col>
  </Row>
  </div>
</div>)
  }
    return (
        <div className="background">
          <div className="contains">
        <Row>
          <Col style={{background:'#FF89AD', minHeight:'700px', opacity:'.95', borderRadius:'20px 0 0 20px', boxShadow: '0px 0px 20px 0px rgba(128, 29, 82, 0.5)' }}>
            <img class="full-width" src={Text}></img>
            <p className="para">Welcome to Sherosh Delights!</p>
            <p className="para">At Sherosh Delights, I specialize in creating delicious and beautifully decorated cakes for all occasions. From birthdays to baby showers to anniversaries, I've got you covered. My cakes are baked fresh using only the finest ingredients, and I take pride in creating custom designs to match your vision.</p>
            <p className="para">Check out our menu page for a selection of our flavors, fillings, and icings to choose from. I offer speciality cakes, as well as other desserts. Lastly, if you have something in mind that is not listed, let me know! You dream it, I make it. </p>
            <Link activeClass="active" smooth spy to="menu" className="menu">
              <img src={Menu} class="other"/> 
            </Link>        
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
