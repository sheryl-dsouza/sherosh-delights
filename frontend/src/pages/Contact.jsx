import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Text from '../home.png'
import Cake from '../cake.png'
import Menu from '../menu-button.png'
import Mom from '../momm.png'
import Font from '../about-font.png'
import './Contact.css'
import contact from '../contact.png'

function Contact(){
    return(
        <div className="background">
        <div className="containssss">
            <div className="oth">
        <div className="thisones">
            <Row>
                <Col>
                <img src={contact} style={{width:'100%'}}/>
                </Col>
            </Row>
        </div>
        </div>
      </div>
    </div>
    )
}

export default Contact;