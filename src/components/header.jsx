import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

export default function Header() {
    return (
        
            <div className="homeHeader">
            
            <Container>
                <Row >
                    <Col><div><Button className="m-2 green-button" href="/Contact">REQUEST QUOTE</Button></div></Col>
                    <Col className="m-2"><h4 className="green">815-479-8888</h4><h4 className="green">847-695-8888</h4></Col>
                </Row>
            </Container>
                
      </div>
    
    )
}