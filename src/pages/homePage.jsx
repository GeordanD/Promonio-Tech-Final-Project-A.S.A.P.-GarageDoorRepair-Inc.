import React from "react";
import HomeCarousel from "../components/Homecarousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import TestimonialsComponent from "../components/testimonialsComponent";

export default function HomePage() {
  return (
    <div id="homePage">
      <HomeCarousel />
      <section>
        <Card body className="text-center homeHeader">
          <p className="mt-5 mx-auto w-75">
            COVID-19 UPDATE: We are an “essential business” and are maintaining
            regular business hours. We are following CDC guidelines for safety
            and protocol. We offer contactless appointments. Showroom is open
            for appointment only. Parts department is open during regular hours.
          </p>
          <p className="mt-4 mx-auto w-75">
            For appointments or other questions please call 847-695-8888.
          </p>
        </Card>
      </section>
      <section className="m-5">
        <Card>
          <h3 className="mt-5 mx-auto w-75">
            Flush, raised panel, carriage house, fiberglass and wood garage
            doors with many selections of window designs.
          </h3>
          <p className="mt-3 mx-auto w-75">
            We also carry the complete line of{" "}
            <a href="/GarageDoorOpeners">Liftmaster garage door openers</a>.
          </p>
          <p className="mt-4 mx-auto w-75">
            We currently have over 100 garage doors in stock in our Huntley, IL
            warehouse and can also custom-build any garage door or replacement
            section to your exact specifications. Our expert staff is ready to
            help you choose your new garage doors. Stop in to see our huge
            selection of doors in our showroom in Huntley, IL, conveniently
            located just north I-90.
          </p>
        </Card>
      </section>
      <section className="m-5" id="homePage">
        <Card className="text-white  homePageSection-3">
          <div className="d-flex align-items-center container">
            <div>
              <Card.Title className="mt-2" style={{color: "white"}}>
                Garage Door Repair and Preventative Maintenance
              </Card.Title>
              <Card.Text className="mt-2 homePageSection-3">
                In most cases we can provide same day garage repair service to
                Huntley, Algonquin, Crystal Lake,
                <br /> Elgin, Barrington, Rockford, McHenry, Woodstock, Cary and
                Schaumburg.
              </Card.Text>
              <br></br>
              <br></br>
            </div>

            <Button
              href="/contact"
              className=" mx-auto w-25 homeButton"
              variant="success"
            >
              REQUEST SERVICE
            </Button>
          </div>
        </Card>
      </section>
      <section className="m-5">
        <Card className="text-center">
          <div className="d-flex align-items-center container">
            <img
              className="mt-5 text-center  companyPhoto me-5"
              src="https://garagedoorsasap.com/wp-content/uploads/2019/06/ASAP-Group-1a-1024x574.jpg"
              alt="company group"
            />
            <div>
              <Card.Title className="ms-5">
                Family owned and operated by 4th generation door
                <br /> specialists that have been in the industry for over 40
                years.
              </Card.Title>
              <Card.Text>
                All of our service technicians are trained and experienced in
                the <br />
                installation, maintenance, and repair of both residential and{" "}
                <br />
                commercial garage doors and garage door openers.
              </Card.Text>

              <Button href="/CompanyProfile" variant="success">
                LEARN MORE
              </Button>
            </div>
          </div>
        </Card>
      </section>
      <section className="m-5">
        <div className="d-flex align-items-center container">
          <TestimonialsComponent />
          <div>
            <img
              src="https://garagedoorsasap.com/wp-content/uploads/2015/07/CHI-7-23-2015-15-47-1024x681.jpg"
              alt="house"
              className="companyPhoto"
              id="testimonialComponent"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
