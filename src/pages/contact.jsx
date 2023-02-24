import React from "react";
import RequestForm from "../components/form";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";


export default function Contact() {
  return (
    <>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h4 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="location" className="me-5" />
                  VISIT US
                </h4>
                <p>
                  <h6>A.S.A.P Garage Door Repair, Inc.</h6>
                </p>
                <p>11351 Allison Ct. Huntley, IL 60142</p>
                <p>
                  <a
                    href="https://www.google.com/maps/dir//ASAP+Garage+Door+Repair,+11351+Allison+Ct,+Huntley,+IL+60142/@42.153753,-88.41831,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x880f14177c5e8b1f:0xfe5afda564f2c7e0!2m2!1d-88.4183104!2d42.1537534?hl=en"
                    className="text-reset"
                  >
                    Map and Directions
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h4 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="phone" className="me-5" />
                  CALL US
                </h4>
                <p>
                  <a href="#!" className="text-reset">
                    Main Line| 847-695-8888
                  </a>
                </p>
                <p>Crystal Lake| 815-479-8888</p>
                <p>Dundee &nbsp;&nbsp;&nbsp;&nbsp;| 847-428-1285</p>
                <p>Fax &nbsp;&nbsp;&nbsp;&nbsp; 847-696-0012</p>
                <p>Eagle River, WI| 715-545-3172</p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h4 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="clock" className="me-5" />
                  HOURS
                </h4>
                <h6>Showroom Hours:</h6>
                <p>Monday – Friday: 7:00 am – 5:00 pm</p>
                <p>Saturday: 7:00 am – 12:00 pm</p>
                <h6>Service Hours:</h6>
                <p>Monday – Friday: 7:00 am – 5:00 pm</p>
                <p>
                  Saturday & Sunday Emergency service only (or by appointment)
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </MDBFooter>
      <RequestForm />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23662.70413663581!2d-88.41831!3d42.153753!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f14177c5e8b1f%3A0xfe5afda564f2c7e0!2sASAP%20Garage%20Door%20Repair!5e0!3m2!1sen!2sus!4v1677217855587!5m2!1sen!2sus"
        width="600"
        height="450"
        className="mb-4"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="ASAP MAP"
      />
    </>
  );
}
