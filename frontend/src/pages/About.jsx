import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Text from '../home.png'
import Cake from '../cake.png'
import './Home.css'
import Menu from '../menu-button.png'
import Mom from '../momm.png'
import './About.css'
import Font from '../about-font.png'
import {isMobile} from 'react-device-detect';


function Desktop() {
<div className="containsss">
        <div className="thisone">
            <Row>
                <Col>
                </Col>
                <Col>
                    <div className="title">
                        <p>Meet Sandra Dsouza, an entrepreneur who strives to bring joy to people's lives with her delicious cakes for over a decade. With a passion for baking and an eye for detail, she creates cakes that not only taste amazing but also look absolutely stunning.

Sandra is dedicated to using only the highest quality ingredients in her creations, and she takes great care to ensure that each cake is made with love and attention to detail. She believes that every occasion deserves a special cake, whether it's a birthday, wedding, or just a celebration of life's little moments.

Since starting her business in 2022, she has earned a reputation for excellence and has become a go-to for those seeking beautifully crafted and delicious cakes. Whether you're looking for a classic vanilla cake or something more unique and creative, Sandra has the skills and expertise to bring your vision to life.</p>
                    </div>
                </Col>
            </Row>
        </div>
      </div>
}

function About(){
    if(isMobile) {
        return (<div className="containsss">
        <div className="thisone">
            <Row> 
                <Col>
                    <div className="title-2">
                        <p>Meet Sandra Dsouza, an entrepreneur who strives to bring joy to people's lives with her delicious cakes for over a decade. With a passion for baking and an eye for detail, she creates cakes that not only taste amazing but also look absolutely stunning.
Sandra is dedicated to using only the highest quality ingredients in her creations, and she takes great care to ensure that each cake is made with love and attention to detail. She believes that every occasion deserves a special cake, whether it's a birthday, wedding, or just a celebration of life's little moments.
Since starting her business in 2022, she has earned a reputation for excellence and has become a go-to for those seeking beautifully crafted and delicious cakes. Whether you're looking for a classic vanilla cake or something more unique and creative, Sandra has the skills and expertise to bring your vision to life.</p>
                    </div>
                    </Col>  
            </Row>
        </div>
      </div>);
    }
    return (<div className="containsss">
    <div className="thisone">
        <Row>
            <Col>
            </Col>
            <Col>
                <div className="title">
                    <p>Meet Sandra Dsouza, an entrepreneur who strives to bring joy to people's lives with her delicious cakes for over a decade. With a passion for baking and an eye for detail, she creates cakes that not only taste amazing but also look absolutely stunning.

Sandra is dedicated to using only the highest quality ingredients in her creations, and she takes great care to ensure that each cake is made with love and attention to detail. She believes that every occasion deserves a special cake, whether it's a birthday, wedding, or just a celebration of life's little moments.

Since starting her business in 2022, she has earned a reputation for excellence and has become a go-to for those seeking beautifully crafted and delicious cakes. Whether you're looking for a classic vanilla cake or something more unique and creative, Sandra has the skills and expertise to bring your vision to life.</p>
                </div>
            </Col>
        </Row>
    </div>
  </div>)
}

export default About;