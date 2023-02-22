// TODOAdd Eagle River Link into nav bar
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import HomePage from "../pages/homePage";
import CommercialOverheadDoors from "../pages/commercialOverheadDoors";
import CompanyProfile from "../pages/companyProfile";
import Contact from "../pages/contact";
import GarageDoorOpeners from "../pages/garageDoorOpeners";
import GarageScreenDoors from "../pages/garageScreenDoors";
import GateOpeners from "../pages/gateOpeners";
import MeetOurTeam from "../pages/meetOurTeam";
import ResidentialGarageDoors from "../pages/residentialGarageDoors";
import Service from "../pages/service";
import Testimonials from "../pages/testimonials";
import AdminPage from "../pages/adminPage";




export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/HomePage">A.S.A.P</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/HomePage">Home</Nav.Link>
            <NavDropdown title="About">
              <NavDropdown.Item href="/CompanyProfile">
                Company Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="/MeetOurTeam">
                Meet Our Team
              </NavDropdown.Item>
              <NavDropdown.Item href="/Testimonials">
                Testimonials
              </NavDropdown.Item>
              <NavDropdown.Item href="https://garagedoorsasapwi.com/">
                A.S.A.P Eagle River WI Location
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Link to={"/AdminPage"}>Admin Page</Link>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Commercial" element={<CommercialOverheadDoors />} />
        <Route path="/CompanyProfile" element={<CompanyProfile />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/GarageDoorOpeners" element={<GarageDoorOpeners />} />
        <Route path="/GarageScreenDoors" element={<GarageScreenDoors />} />
        <Route path="/GateOpeners" element={<GateOpeners />} />
        <Route path="/MeetOurTeam" element={<MeetOurTeam />} />
        <Route
          path="/ResidentialGarageDoors"
          element={<ResidentialGarageDoors />}
        />
        <Route path="/Service" element={<Service />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/AdminPage" element={<AdminPage />} />
      </Routes>
    </>
  );
}
