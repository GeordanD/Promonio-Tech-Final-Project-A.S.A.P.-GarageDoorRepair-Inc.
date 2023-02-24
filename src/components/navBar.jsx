// TODOAdd Eagle River Link into nav bar
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Route, Routes } from "react-router-dom";
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
    <div id="navBar">
      <Navbar bg="light" variant="light" className="sticky-sm-top" expand="lg">
        <Container>
          <Navbar.Brand>
            <Nav.Link href="/">
              <img
                src="https://garagedoorsasap.com/wp-content/uploads/2017/04/cropped-ASAP-icon-270x270.png"
                width="80"
                height="80"
                alt="Logo"
              />
            </Nav.Link>
          </Navbar.Brand>
          <Nav className="me-auto">
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
            <NavDropdown title="Garage Doors">
              <NavDropdown.Item href="/ResidentialGarageDoors">
                Residential Garage Doors
              </NavDropdown.Item>
              <NavDropdown.Item href="/Commercial">
                Commercial Overhead Doors
              </NavDropdown.Item>
              <NavDropdown.Item href="/GarageScreenDoors">
                Garage Screen Doors
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Openers & Gates">
              <NavDropdown.Item href="/GarageDoorOpeners">
                Garage Door Openers
              </NavDropdown.Item>
              <NavDropdown.Item href="/GateOpeners">
                Gate Operators
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Service">Service</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/AdminPage">Admin Page(CRUD)</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes >
        <Route path="/" element={<HomePage />} />
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
    </div>
  );
}
