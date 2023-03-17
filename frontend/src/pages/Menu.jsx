import Container from 'react-bootstrap/esm/Container';
import './Menu.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Menu(){
    return(
        <div className="background">
            <link href='https://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet'/>
            <link href='https://fonts.googleapis.com/css?family=Sail' rel='stylesheet'/>
        <div className="containss">
        <Row>
        <Col style={{background:'#FFECF2', minHeight:'1000px'}}>
        <div className='contain'>
            <div className='simple'>
            <h4>Cake Flavors</h4>
            <div className='assort'>
            <Row >
                <Col>Vanilla </Col>
                <Col>Chocolate</Col>
                <Col>Strawberry</Col>
            </Row>
            <Row >
                <Col>Red Velvet</Col>
                <Col>Pineapple</Col>
                <Col>Caramel</Col>
            </Row>
            <Row >
                <Col>Butterscotch</Col>
                <Col>Hazelnut</Col>
                <Col>Oreo</Col>
            </Row>
            <Row >
                <Col>Dalgona Coffee</Col>
                <Col>Rose</Col>
                <Col>Mango</Col>
            </Row>
            <Row >
                <Col>Orange</Col>
                <Col></Col>
                <Col></Col>
            </Row>
            </div>
            <h4>Cake Fillings</h4>
            <div className='assort'>
            <Row >
                <Col>Rasberry Compote</Col>
                <Col>Strawberry Compote</Col>
                <Col>Blueberry Compote</Col>
            </Row>
            <Row >
                <Col>Chocolate Mousse</Col>
                <Col>Strawberry Mousse</Col>
                <Col>Cream Cheese</Col>
            </Row>
            <Row >
                <Col>Whipped Cream</Col>
                <Col>Butterscotch</Col>
                <Col>Mango</Col>
            </Row>
            <Row >
                <Col>Orange</Col>
                <Col>Chocolate Ganache</Col>
                <Col>Vanilla Buttercream</Col>
            </Row>
            <Row >
                <Col>Oreo</Col>
                <Col></Col>
                <Col></Col>
            </Row>
            </div>
            <h4>Cake Icings</h4>
            <div className='assort'>
            <Row >
                <Col>Vanilla Buttercream</Col>
                <Col>Whipped Cream</Col>
                <Col>Fondant</Col>
            </Row>
            <Row >
                <Col>Chocolate ganache</Col>
                <Col>Cream Cheese</Col>
                <Col></Col>
            </Row>
            </div>
            <h4>Speciality/Fusion Cakes</h4>
            <div className='assort'>
            <Row >
                <Col>Black Forest</Col>
                <Col>Mirror Finish</Col>
                <Col>Rasmalai</Col>
            </Row>
            <Row >
                <Col>Pan</Col>
                <Col>Falooda</Col>
                <Col>Gulab Jamun</Col>
            </Row>
            <Row >
                <Col>Strawberry/Mango Cheesecake</Col>
                <Col>Tiramisu</Col>
                <Col>Tres Leches</Col>
            </Row>
            </div>
            <h4>Desserts</h4>
            <div className='assort'>
            <Row >
                <Col>Cupcakes</Col>
                <Col>Dessert-in-a-Cup</Col>
                <Col>Cake Pops</Col>
            </Row>
            </div>
            </div>
        </div>
        </Col>
        </Row>
        
        </div>
        </div>
    )
}

export default Menu;