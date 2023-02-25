import React from 'react'
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";

export default function MyInfoFooter() {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "#21081a" }}
    >
      <MDBContainer className="p-2"></MDBContainer>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 | A.S.A.P Garage Door Repair, Inc. | All Rights Reserved |
        <a className="text-white hover-zoom" href="https://github.com/GeordanD">
         Website By Geordan Daugherty
        </a>
      </div>
    </MDBFooter>
  );
}
