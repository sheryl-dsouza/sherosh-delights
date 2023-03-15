import React from "react";
import Container from "react-bootstrap/Container";



function Home() {
    return (
        <div className="main" >
            <Container className="bottom"
                style={{ 
                    backgroundColor: "#abdfed",
                    textAlign: "center",
                    paddingTop: "60px",
                    maxWidth: "100%",
                    height: "25vh" 
                }}>
                <h1>Connecting you to the world around you!</h1>
            </Container>
            <Container>
                <h1 className="d-flex justify-content-center p-4">Where to next?</h1>
                <Container style={{display: 'flex'}}>
                    hi
                </Container>
            </Container>
        </div>
    );
};

export default Home;
