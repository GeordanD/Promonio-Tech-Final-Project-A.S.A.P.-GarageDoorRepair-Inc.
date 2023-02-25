import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function CompanyProfile() {

  return (
    <div>
      <section>
        <header>
          <div
            className="p-5 mb-2 text-center bg-image"
            style={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS65CqpDfi5sgvUnDz2NQtWn-iBGaQo7O5LEw&usqp=CAU)",
              height: "200px",
            }}
          >
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            >
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white">
                  <h1 className="mb-3">Company Profile</h1>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
      <section>
        <div className="d-flex justify-content-center align-items-center h-100 mb-5 mt-5">
          <div>
            <h2 style={{width: "1600px"}}>
              A.S.A.P. Garage Door Repair, Inc. has been supplying Chicagoland
              and the Northwest Suburbs with quality garage doors and superior
              service since 1993.
            </h2>
          </div>
        </div>
      </section>
      <section className="mb-5">
        <div>
          <div className="d-flex align-items-center container">
            <img
              src="https://garagedoorsasap.com/wp-content/uploads/2020/05/poling-family.jpg"
              alt="Polling Family"
              className="me-5"
            />
            <div>
              <p>
                With 4 generations of experience in the garage door industry,
                The Poling Family has served the Chicagoland area since 1964.
              </p>
              <p>
                Since 1993, Aaron Poling has continued the family tradition of
                providing Quality and Reliable Service with A.S.A.P. Garage Door
                Repair, Inc.
              </p>
              <p>
                We currently have over 100 garage doors in stock in our Huntley,
                IL showroom and can order any type of door from the most basic
                “pan” door to contemporary and modern, to elaborate custom wood
                carriage house doors.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5">
        <MDBFooter
          bgColor="light"
          className="text-center text-lg-start text-muted"
        >
          <section className="">
            <MDBContainer className="text-center text-md-start mt-5">
              <MDBRow className="mt-3">
                <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4 green">
                    <MDBIcon icon="medal" className="me-3" />
                    Quality Products
                  </h6>
                  <p>
                    We are a Factory Authorized Dealer for C.H.I. Overhead
                    Garage Doors and have become a Five Star Dealer. We are also
                    a Factory Authorized Dealer for Raynor, Clopay/Ideal, and
                    Hormann.
                  </p>
                </MDBCol>

                <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4 green">
                    <MDBIcon icon="star" className="me-3" />
                    Industry expertise
                  </h6>
                  <p>
                    4 Generations and over 40 years of Garage Door Installation
                    and Repair Expertise. We have the experience and materials
                    needed to repair your garage door or opener, regardless of
                    size, make or model.
                  </p>
                </MDBCol>

                <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4 green">
                    <MDBIcon icon="clipboard" className="me-2" />
                    Team of professionals
                  </h6>
                  <p>
                    We know how important it is, to get your garage doors
                    installed or repaired, quickly and efficiently. When working
                    at your business or home, our team is always conscientious,
                    helpful and respectful.
                  </p>
                </MDBCol>

                <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4 green">
                    {" "}
                    <MDBIcon icon="shield" className="me-2" />
                    Our guarantee
                  </h6>
                  <p>
                    Full Factory Warranties on all of the components and doors.
                    Our doors are covered by manufacturer warranties unlike
                    distribution center doors where components are bought from
                    several different manufacturers.
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
        </MDBFooter>
      </section>
      <section className="mb-5">
        <div>
          <div className="d-flex align-items-center container">
            <div className="me-5">
              <h2>Experience and Expertise</h2>
              <p className="d-flex align-items-center container">
                All of our service technicians are trained and experienced in
                the installation, maintenance, and repair of both residential
                and commercial garage doors and garage door openers. There is no
                garage door problem we can’t resolve. We can also troubleshoot
                simple repairs over the phone and walk you through minor
                adjustments and repairs.
              </p>
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
      <section className="mb-5">
        <div>
          <div className="d-flex align-items-center container">
            <img
              src="https://garagedoorsasap.com/wp-content/uploads/2016/02/chi-5star_clr-300x118.jpg"
              alt="CHI Logo"
              className="me-5"
            />
            <div>
              <h2>Keeping it Local</h2>
              <p>
                Our main manufacturer is{" "}
                <a href="https://www.chiohd.com/">C.H.I. Overhead Doors</a>{" "}
                located in Illinois. We are supporting our local state economy
                by keeping jobs and revenue in Illinois, while providing our
                customers lower shipping costs and faster delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
