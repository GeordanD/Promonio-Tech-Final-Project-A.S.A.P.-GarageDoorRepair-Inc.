import React, { useEffect, useState } from "react";
// import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";


  const statesOptions = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Island",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];





export default function EditRequest(requestId) {
  const [editFirstName, setEditFirstName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editCompanyName, setEditCompanyName] = useState("");
  const [editStreetAddress, setEditStreetAddress] = useState(0);
  const [editCity, setEditCity] = useState("");
  const [editZipCode, setEditZipCode] = useState("");
  const [editPhoneNumber, setEditPhoneNumber] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editMessage, setEditMessage] = useState("");
  const [editStreetName, setEditStreetName] = useState("");
    const [selectedStates, setSelectedStates] = useState(statesOptions[0]);
    
    useEffect(() => {
    
    }, []);

    const handleSubmit = (() => {

    })


    return (
        <div>
            <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={(e) => setEditFirstName(e.target.value)}
                type="text"
                                placeholder="John"
                                value={editFirstName}
                required
              />
            

            
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={(e) => setEditLastName(e.target.value)}
                                type="text"
                                value={editLastName}
                placeholder="Doe"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => setEditEmail(e.target.value)}
                type="email"
                                placeholder="john.doe@gmail.com"
                                value={editEmail}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                onChange={(e) => setEditPhoneNumber(e.target.value)}
                type="text"
                                placeholder="847-695-8888"
                                value={editPhoneNumber}
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                onChange={(e) => setEditDate(e.target.value)}
                                type="date"
                                value={editDate}
                placeholder="Date"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCompanyName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                onChange={(e) => setEditCompanyName(e.target.value)}
                                type="text"
                                value={editCompanyName}
                placeholder="A.S.A.P"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
              <Form.Label>Street Number</Form.Label>
              <Form.Control
                                onChange={(e) => setEditStreetAddress(e.target.value)}
                                value={editStreetAddress}
                placeholder="1234"
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
              <Form.Label>Street Name</Form.Label>
              <Form.Control
                                onChange={(e) => setEditStreetName(e.target.value)}
                                value={editStreetName}
                placeholder="Jenny Dr."
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group onChange={(e) => setEditCity(e.target.value)} as={Col} controlId="formGridCity" value={editCity}>
              <Form.Label>City</Form.Label>
          
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose..." value={selectedStates} onChange={(e) => setSelectedStates(e.target.value)}>
                {statesOptions.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control onChange={(e) => setEditZipCode(e.target.value)} value={editZipCode} />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group>
              <FloatingLabel label="Leave a short message on why you are filling this form out">
                                <Form.Control as="textarea" onChange={(e) => setEditMessage(e.target.value)} style={{ height: "100px" }} value={ editMessage} />
              </FloatingLabel>
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </div>

    )
}