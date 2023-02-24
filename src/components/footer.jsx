import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


export default function Footer() {
    return (
      <MDBFooter
        bgColor="dark"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom bg-dark">
          <div className="me-5 d-none d-lg-block">
            <span>Connected with us on social networks:</span>
          </div>

          <div>
            <a
              href="https://www.facebook.com/GarageDoorsASAP"
              className="me-4 text-reset"
            >
              <MDBIcon color="secondary" fab icon="facebook-f" />
            </a>
            <a href="https://twitter.com/ASAPDoors" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="twitter" />
            </a>
            <a
              href="https://www.google.com/maps/place/ASAP+Garage+Door+Repair/@42.1537534,-88.4183104,15z/data=!4m6!3m5!1s0x880f14177c5e8b1f:0xfe5afda564f2c7e0!8m2!3d42.1537534!4d-88.4183104!16s%2Fg%2F1tjcq0r0"
              className="me-4 text-reset"
            >
              <MDBIcon color="secondary" fab icon="google" />
            </a>
            <a
              href="https://www.houzz.com/professionals/garage-door-repair/a-s-a-p-garage-door-repair-inc-pfvwus-pf~1259959818"
              className="me-4 text-reset"
            >
              <MDBIcon color="secondary" fab icon="houzz" />
            </a>
            <a
              href="https://www.linkedin.com/in/geordand/"
              className="me-4 text-reset"
            >
              <MDBIcon color="secondary" fab icon="linkedin" />
            </a>
            <a href="https://github.com/GeordanD" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="github" />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon color="secondary" icon="gem" className="me-3" />
                  A.S.A.P. Garage Door Repair, Inc.
                </h6>
                <h6>Our Service Area</h6>
                <p>
                  We service all of McHenry County, Kane County, Lake County,
                  Cook County and the Rockford area in Northern Illinois
                  Rockford Illinois and Eagle River, WI.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <a href="https://www.bbb.org/us/il/huntley/profile/garage-doors/asap-garage-door-repair-inc-0654-88173645">
                  <img
                    src="https://garagedoorsasap.com/wp-content/uploads/2019/11/bbb-badge-2019-200.png"
                    alt=""
                  />
                </a>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <a href="https://doors.org/">
                  <img
                    src="https://garagedoorsasap.com/wp-content/uploads/2015/04/ida.gif"
                    alt=""
                    className="mb-2"
                  />
                </a>
                <a href="https://huntleychamber.org/">
                  <img
                    src="https://garagedoorsasap.com/wp-content/uploads/2015/05/huntley_chamber.png"
                    alt=""
                  />
                </a>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                <p>
                  <MDBIcon color="secondary" icon="home" className="me-2" />
                  11351 Allison Ct. Huntley, IL 60142, US
                </p>
                <p>
                  <MDBIcon color="secondary" icon="phone" className="me-3" /> +
                  847-695-8888
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </MDBFooter>
    );
}
