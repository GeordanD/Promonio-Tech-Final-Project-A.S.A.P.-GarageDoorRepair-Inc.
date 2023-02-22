import React from "react";
import HomeCarousel from "../components/Homecarousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

export default function HomePage() {
  return (
    <div id="homePage">
      <HomeCarousel />
      <section>
        <Card body className="text-center homeHeader">
          <p className="mt-2 mx-auto w-75">
            COVID-19 UPDATE: We are an “essential business” and are maintaining
            regular business hours. We are following CDC guidelines for safety
            and protocol. We offer contactless appointments. Showroom is open
            for appointment only. Parts department is open during regular hours.
          </p>
          <p className="mt-2 mx-auto w-75">
            For appointments or other questions please call 847-695-8888.
          </p>
        </Card>
      </section>
      <section>
        <Card>
          <h3 className="mt-2 mx-auto w-75">
            Flush, raised panel, carriage house, fiberglass and wood garage
            doors with many selections of window designs.
          </h3>
          <p className="mt-2 mx-auto w-75">
            We also carry the complete line of{" "}
            <a href="/GarageDoorOpeners">Liftmaster garage door openers</a>.
          </p>
          <p className="mt-2 mx-auto w-75">
            We currently have over 100 garage doors in stock in our Huntley, IL
            warehouse and can also custom-build any garage door or replacement
            section to your exact specifications. Our expert staff is ready to
            help you choose your new garage doors. Stop in to see our huge
            selection of doors in our showroom in Huntley, IL, conveniently
            located just north I-90.
          </p>
        </Card>
      </section>
      <section>
        <Card className="text-white homePageBackground">
          <Card.Title className="mt-2  w-75">
            Garage Door Repair and Preventative Maintenance
          </Card.Title>
          <Card.Text className="mt-2  w-75 ">
            In most cases we can provide same day garage repair service to
            Huntley, Algonquin, Crystal Lake, Elgin, Barrington, Rockford,
            McHenry, Woodstock, Cary and Schaumburg.
          </Card.Text>
          <Button
            href="/contact"
            className="mt-2 mx-auto w-25 homeButton"
            variant="success"
          >
            REQUEST SERVICE
          </Button>
        </Card>
      </section>
      <section> </section>
      <section> </section>
    </div>
  );
}
