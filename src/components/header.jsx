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
                    <Col><Button className="m-2 bg-light text-primary" href="/Contact">REQUEST QUOTE</Button></Col>
                    <Col className="m-2"><h4>847-695-8888</h4></Col>
                    <Col className="m-2"><h4>815-479-8888</h4></Col>
                </Row>
            </Container>
                
      </div>
    
    )
}