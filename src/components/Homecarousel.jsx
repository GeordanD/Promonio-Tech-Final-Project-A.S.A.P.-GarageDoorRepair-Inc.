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
            {/* //TODO Make Shaded Portion on Captions for carousel */}
            <Carousel.Caption className="carousel-caption">
              <h2>Commercial Overhead Door Installation and Service</h2>
              <Button variant="success" id="commercialButton" href="/Contact">
                SCHEDULE YOUR CONSULTATION
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="//garagedoorsasap.com/wp-content/uploads/2020/07/residential-door-installation-e1596216419911.jpg"
              alt="Residential Garage Door"
            />

            <Carousel.Caption className="carousel-caption">
              <h2>Residential Garage Door</h2>
              <Button variant="success" id="residentialButton" href="/Contact">
                TALK TO AN EXPERT
              </Button>
              <h2>Installation and Service</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
}