import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

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

export default function EditRequest({
  id,
  createdAt,
  firstName,
  lastName,
  companyName,
  streetAddress,
  city,
  state,
  zipCode,
  phoneNumber,
  email,
  message,
  streetName,
  getRequests,
}) {
  const [showRequest, setShowRequest] = useState(false);
  const [requestFirstName, setRequestFirstName] = useState("");
  const [requestLastName, setRequestLastName] = useState("");
  const [requestDate, setRequestDate] = useState("");
  const [requestCompanyName, setRequestCompanyName] = useState("");
  const [requestStreetAddress, setRequestStreetAddress] = useState("");
  const [requestCity, setRequestCity] = useState("");
  const [requestZipCode, setRequestZipCode] = useState("");
  const [requestPhoneNumber, setRequestPhoneNumber] = useState("");
  const [requestEmail, setRequestEmail] = useState("");
  const [requestMessage, setRequestMessage] = useState("");
  const [requestStreetName, setRequestStreetName] = useState("");
  const [selectedStates, setSelectedStates] = useState(statesOptions[0]);

  const handleCloseRequest = () => {
    setShowRequest(false);
  };

  const handleShowRequest = () => setShowRequest(true);

  const handleEditRequest = async (e, id) => {
    e.preventDefault();
    console.log(`${id}`);
    const url = "https://63bb0bcecf99234bfa50f42b.mockapi.io/contactRequest";
    const requestInfo = {
      createdAt: requestDate,
      firstName: requestFirstName,
      lastName: requestLastName,
      companyName: requestCompanyName,
      streetAddress: requestStreetAddress,
      city: requestCity,
      state: selectedStates,
      zipCode: requestZipCode,
      phoneNumber: requestPhoneNumber,
      email: requestEmail,
      message: requestMessage,
      streetName: requestStreetName,
    };
    try {
      fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(requestInfo),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => getRequests());
      setRequestFirstName(requestFirstName);
      setRequestLastName(requestLastName);
      setRequestDate(requestDate);
      setRequestCompanyName(requestCompanyName);
      setRequestStreetAddress(requestStreetAddress);
      setRequestCity(requestCity);
      setSelectedStates(selectedStates);
      setRequestZipCode(requestZipCode);
      setRequestPhoneNumber(requestPhoneNumber);
      setRequestEmail(requestEmail);
      setRequestMessage(requestMessage);
      setRequestStreetName(requestStreetName);
    } catch (err) {
      console.log(err);
    }
    setRequestFirstName("");
    setRequestLastName("");
    setRequestCompanyName("");
    setRequestStreetAddress("");
    setRequestCity("");
    setSelectedStates("");
    setRequestZipCode("");
    setRequestPhoneNumber("");
    setRequestEmail("");
    setRequestMessage("");
    setRequestStreetName("");
    handleCloseRequest();

    window.location.reload(false);
  };

  return (
    <>
      <Button onClick={handleShowRequest}>Edit Request</Button>
      <Modal show={showRequest} onHide={handleCloseRequest}>
        <ModalHeader>Edit Request {requestFirstName}</ModalHeader>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="inputID">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={(e) => setRequestFirstName(e.target.value)}
                type="text"
                placeholder={firstName}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="inputID">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={(e) => setRequestLastName(e.target.value)}
                type="text"
                placeholder={lastName}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="inputID">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => setRequestEmail(e.target.value)}
                type="email"
                placeholder={email}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="inputID">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                onChange={(e) => setRequestPhoneNumber(e.target.value)}
                type="text"
                placeholder={phoneNumber}
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="inputID">
              <Form.Label>Date</Form.Label>
              <Form.Control
                onChange={(e) => setRequestDate(e.target.value)}
                type="date"
                placeholder={createdAt}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="inputID">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                onChange={(e) => setRequestCompanyName(e.target.value)}
                type="text"
                placeholder={companyName}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="inputID">
              <Form.Label>Street Number</Form.Label>
              <Form.Control
                onChange={(e) => setRequestStreetAddress(e.target.value)}
                placeholder={streetAddress}
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="inputID">
              <Form.Label>Street Name</Form.Label>
              <Form.Control
                onChange={(e) => setRequestStreetName(e.target.value)}
                placeholder={streetName}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              onChange={(e) => setRequestCity(e.target.value)}
              as={Col}
              controlId="inputID"
            >
              <Form.Label>City</Form.Label>

              <Form.Control placeholder={city} />
            </Form.Group>

            <Form.Group as={Col} controlId="inputID">
              <Form.Label>State</Form.Label>
              <Form.Select
                defaultValue={selectedStates}
                onChange={(e) => setSelectedStates(e.target.value)}
              >
                {statesOptions.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="inputID">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                onChange={(e) => setRequestZipCode(e.target.value)}
                placeholder={zipCode}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group controlId="inputID">
              <FloatingLabel label="Leave a short message on why you are filling this form out">
                <Form.Control
                  as="textarea"
                  onChange={(e) => setRequestMessage(e.target.value)}
                  style={{ height: "100px" }}
                  placeholder={message}
                />
              </FloatingLabel>
            </Form.Group>
          </Row>

          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              handleEditRequest(e, id);
            }}
          >
            Submit
          </Button>
          <Button variant="secondary" onClick={handleCloseRequest}>Cancel</Button>
        </Form>
      </Modal>
    </>
  );
}
