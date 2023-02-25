import React from "react";
import Button from "react-bootstrap/esm/Button";
import RequestForm from "../components/form";

export default function ResidentialGarageDoors() {
  return (
    <div>
      <section className="mb-5">
        <header>
          <div
            className="p-5 mb-2 text-center bg-image"
            style={{
              backgroundImage:
                "url(https://www.nwdusa.com/wp-content/uploads/2021/11/Modern-Classic-Slider-MC44-Dark-Bronze-Anodized-Satin-Etch-Glass-2000x1062.jpg)",
              height: "200px",
            }}
          >
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            >
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white">
                  <h1 className="mb-3">Residential GarageDoors</h1>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
      <section className="mb-5">
        <div className="container">
          <h2>
            Residential Garage Door Installation in Crystal Lake, Huntley,
            Algonquin, Cary, Elgin, McHenry, Woodstock, Harvard, St. Charles,
            Schaumburg, Barrington, Arlington Heights, Belvidere and Rockford
            Illinois.
          </h2>
        </div>
      </section>
      <section className="mb-5">
        <div>
          <div className="d-flex align-items-center container">
            <div className="me-5 ms-5 container zoom">
              <a href="https://www.chiohd.com/">
                <img
                  src="https://garagedoorsasap.com/wp-content/uploads/2022/03/chi-logo-300.png"
                  alt=""
                  className=""
                />
                <br />
                <img
                  src="https://garagedoorsasap.com/wp-content/uploads/2022/03/chi-elite-dealer-300.png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <p>
                We are a Factory Authorized Dealer for C.H.I. Overhead Garage
                Doors and have become a Five Star Dealer. We have received
                awards from C.H.I. Overhead Door every year since 2000. We are
                also a Factory Authorized Dealer for Raynor, Clopay/Ideal, and
                Hormann.
              </p>
              <p>
                Being a Factory Authorized Dealer, we offer Full Factory
                Warranties. All of the components of our doors are factory
                complete and covered by manufacturer warranties unlike
                distribution center doors where components are bought from
                several different manufacturers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5 grey">
        <div className="container">
          <h3>Residential Garage Doors by A.S.A.P.</h3>
          <div className="container">
            <img
              src="https://garagedoorsasap.com/wp-content/uploads/2019/05/Haas-American-Traditions-Sahara-Tan3.jpg"
              alt=""
              style={{ width: "600px" }}
            />
            <img
              src="https://garagedoorsasap.com/wp-content/uploads/2019/05/Haas-American-Traditions-Sahara-Tan.jpg"
              alt=""
              style={{ width: "600px" }}
            />
            <img
              src="https://garagedoorsasap.com/wp-content/uploads/2019/05/CHI-5983-in-cedar-4.jpg"
              alt=""
              style={{ width: "600px" }}
            />
            <img
              src="https://garagedoorsasap.com/wp-content/uploads/2018/05/Haas-660-16x7-short-panel.jpg"
              alt=""
              style={{ width: "600px" }}
            />
            <img
              src="https://garagedoorsasap.com/wp-content/uploads/2016/03/a.jpg"
              alt=""
              style={{ width: "600px" }}
            />
            <img
              src="https://garagedoorsasap.com/wp-content/uploads/2015/07/CHI-7-23-2015-15-47.jpg"
              alt=""
              style={{ width: "600px" }}
            />
            <img
              src="https://garagedoorsasap.com/wp-content/uploads/2015/07/CHI-7-23-2015-15-53-2-2.jpg"
              alt=""
              style={{ width: "600px" }}
            />
          </div>
        </div>
      </section>
      <section className="mb-5">
        <div>
          <div className="d-flex align-items-center container">
            <div className="me-5">
              <h2>Visit Our Showroom</h2>
              <p className="d-flex align-items-center container">
                We have many different styles to choose from. We have recently
                renovated our showroom and carry over 100 different types of
                samples. Please feel free to set up an appointment, or stop in
                and see our showroom!
              </p>
              <Button href="/Contact" variant="success">
                Request An Appointment
              </Button>
            </div>
            <div>
              <img
                src="https://garagedoorsasap.com/wp-content/uploads/2019/02/ASAP-building-e1588879350956.jpg"
                alt="Building"
                className="ms-5"
                style={{ width: "700px" }}
              />
            </div>
          </div>
        </div>
      </section>
      <RequestForm />
    </div>
  );
}
