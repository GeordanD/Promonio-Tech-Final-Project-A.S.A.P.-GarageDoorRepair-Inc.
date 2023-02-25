import React from "react";
import RequestForm from "../components/form";


export default function Service() {
  return (
    <div>
      <section>
        <header>
          <div
            className="p-5 mb-2 text-center bg-image"
            style={{
              backgroundImage:
                "url(https://www.precisiondoorprovidence.com/wp-content/uploads/2021/04/garage-door-repair.jpg)",
              height: "200px",
            }}
          >
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            >
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white">
                  <h1 className="mb-3">Garage Door Service and Repair</h1>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
      <section className="mb-5">
        <div className="container">
          <div>
            <h4>
              Our service technicians have the experience and materials needed
              to repair your residential or commercial garage door and opener,
              regardless of size, make or model.
            </h4>
          </div>
        </div>
      </section>
      <section className="mb-5">
        <div>
          <div className="d-flex align-items-center container">
            <div className="ms-5">
              <a href="https://www.liftmaster.com/">
                <img
                  src="https://garagedoorsasap.com/wp-content/uploads/2015/04/service.jpg"
                  alt="Broken Garage Door"
                  id="testimonialComponent"
                />
              </a>
            </div>
            <div>
              <h4>“One Trip” Service Calls</h4>
              <p className="ms-5">
                Our service trucks are fully stocked with all common openers and
                replacement parts to save you time and money, so your service
                call is “one trip”.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5">
        <div>
          <div className="d-flex align-items-center container">
            <div className="d-flex align-items left">
              <ul>
                <h4>Garage Door Repair and Service</h4>
                <li>Commercial Door Installation and Service</li>
                <li>Residential Door Installation and Service</li>
                <li>Spring Replacement</li>
                <li>Garage Door Preventative Maintenance Programs</li>
                <li>Weather Stripping / Bottom Seals</li>
                <li>Hinges</li>
                <li>Rollers</li>
                <li>Garage Door Opener Replacement</li>
                <li>Garage Door Opener Repairs</li>
                <li>Garage Screen Doors</li>
                <li>Rolling Steel & Curtain Doors</li>
                <li>and so much more</li>
              </ul>
            </div>{" "}
            <div className="ms-5">
              <a href="https://www.liftmaster.com/">
                <img
                  src="https://garagedoorsasap.com/wp-content/uploads/2020/05/garage-door-repair.jpg"
                  alt="Garage Door Opener"
                  style={{ height: "500px" }}
                  id="testimonialComponent"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5">
        <RequestForm />
      </section>
    </div>
  );
}
