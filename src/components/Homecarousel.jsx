import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/esm/Button";
 
export default function HomeCarousel() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://garagedoorsasap.com/wp-content/uploads/2020/07/commercial-overhead-door-installation-e1596216449938.jpg"
              alt="Commercial Overhead Door"
            />
            <Carousel.Caption className="shadow-5-strong bg-dark p-2 bg-opacity-75">
              <div className="d-flex align-items-center container">
                <div className="me-5">
                <h2>
                  Commercial Overhead Door <br /> Installation and Service
                  </h2>
                </div>
                <div className="ms-2">
                  <Button variant="success" id="commercialButton" href="/Contact">
                SCHEDULE YOUR CONSULTATION
              </Button>
                </div>
              </div>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="//garagedoorsasap.com/wp-content/uploads/2020/07/residential-door-installation-e1596216419911.jpg"
              alt="Residential Garage Door"
            />

            <Carousel.Caption className="shadow-5-strong bg-dark p-2 bg-opacity-75">
              <div className="d-flex align-items-center container">
                <div className="container">
                  <h1>Residential Garage Door</h1>
                  <h1>Installation and Service</h1>
                </div>
                <div className="container">
                  <Button
                    variant="success"
                    id="residentialButton"
                    href="/Contact"
                  >
                    TALK TO AN EXPERT
                  </Button>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
}