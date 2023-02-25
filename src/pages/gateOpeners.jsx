import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export default function GateOpeners() {
  return (
    <div>
      <section className="mb-5">
        <header>
          <div
            className="p-5 mb-2 text-center bg-image"
            style={{
              backgroundImage:
                "url(https://a1gateguys.com/wp-content/uploads/2019/04/swing-gate-LA500.jpg)",
              height: "200px",
            }}
          >
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            >
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white">
                  <h1 className="mb-3">Gate Openers</h1>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
      <section className="mb-5">
        <div className="container">
          <div>
            <h5>
              <strong>Security You Can Count On</strong>
            </h5>
          </div>
          <div>
            <p>
              Swing or slide, LiftMaster gate openers will provide long-lasting
              operation you can count on, day in and day out. Explore a wide
              variety of our automated gate openers and systems with smooth
              start and stop operations, as well as easy integration with
              LiftMaster access control technology. Find the right gate opener
              to fit your needs.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-5">
        <div className="container">
          <div>
            <h5>Gate Operators and Openers Installed and Backed by A.S.A.P.</h5>
          </div>
          <div>
            <MDBRow className="row-cols-1 row-cols-md-3 g-4">
              <MDBCol>
                <MDBCard>
                  <MDBCardImage
                    src="https://garagedoorsasap.com/wp-content/uploads/2018/12/LiftMaster-Gate-Operator.jpg"
                    alt="..."
                    position="top"
                    className="zoom-small"
                  />
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard>
                  <MDBCardImage
                    src="https://garagedoorsasap.com/wp-content/uploads/2018/05/20180320_144623-1.jpg"
                    alt="..."
                    position="top"
                    className="zoom-small"
                  />
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard>
                  <MDBCardImage
                    src="https://garagedoorsasap.com/wp-content/uploads/2018/05/20180320_144641.jpg"
                    alt="..."
                    position="top"
                    className="zoom-small"
                  />
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard>
                  <MDBCardImage
                    src="https://garagedoorsasap.com/wp-content/uploads/2018/05/20171120_153438-1.jpg"
                    alt="..."
                    position="top"
                    className="zoom-small"
                  />
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard>
                  <MDBCardImage
                    src="https://garagedoorsasap.com/wp-content/uploads/2018/05/20171120_153453-1.jpg"
                    alt="..."
                    position="top"
                    className="zoom-small"
                  />
                </MDBCard>
              </MDBCol>

              <MDBCol>
                <MDBCard>
                  <MDBCardImage
                    src="https://garagedoorsasap.com/wp-content/uploads/2018/05/20180320_143546-1.jpg"
                    alt="..."
                    position="top"
                    className="zoom-small"
                  />
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </div>
        </div>
      </section>
      <section className="mb-5"></section>
    </div>
  );
}
