import React, {useState} from "react";
import Form from "react-bootstrap/Form"
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

export default function RequestForm() {
  const [postFirstName, setPostFirstName] = useState("");
  const [postLastName, setPostLastName] = useState("");
  const [postDate, setPostDate] = useState("");
  const [postCompanyName, setPostCompanyName] = useState("");
  const [postStreetAddress, setPostStreetAddress] = useState(0);
  const [postCity, setPostCity] = useState("");
  const [postZipCode, setPostZipCode] = useState("");
  const [postPhoneNumber, setPostPhoneNumber] = useState("");
  const [postEmail, setPostEmail] = useState("");
  const [postMessage, setPostMessage] = useState("");
  const [postStreetName, setPostStreetName] = useState("");
  const [selectedStates, setSelectedStates] = useState(statesOptions[0])
  const requestEndpoint =
    "https://63bb0bcecf99234bfa50f42b.mockapi.io/contactRequest";

  
  
  


    //TODO:Make form and admin page talk and get post to work here and connect it to admin page form needs to be reuseable!

    const handleSubmit = async () => {
      try {
        const resp = await fetch(`${requestEndpoint}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            createdAt: postDate,
            firstName: postFirstName,
            lastName: postLastName,
            companyName: postCompanyName,
            streetAddress: postStreetAddress,
            streetName: postStreetName,
            city: postCity,
            state: selectedStates,
            zipCode: postZipCode,
            phoneNumber: postPhoneNumber,
            email: postEmail,
            message: postMessage
          }),
        });
        return await resp.json();
      } catch (e) {
        console.log("POST HAD AN ERROR");
      }
    }




    return (
      <div className="container mb-5">
        <h2>Need A Garage Door Repair of Installation Estimate?</h2>
        <h3><b>Please complete the following form. Our expert staff will contact you as soon as possible.</b></h3>
        <br></br>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={(e) => setPostFirstName(e.target.value)}
                type="text"
                placeholder="John"
                required
              />
            

            
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={(e) => setPostLastName(e.target.value)}
                type="text"
                placeholder="Doe"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => setPostEmail(e.target.value)}
                type="email"
                placeholder="john.doe@gmail.com"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                onChange={(e) => setPostPhoneNumber(e.target.value)}
                type="text"
                placeholder="847-695-8888"
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                onChange={(e) => setPostDate(e.target.value)}
                type="date"
                placeholder="Date"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCompanyName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                onChange={(e) => setPostCompanyName(e.target.value)}
                type="text"
                placeholder="A.S.A.P"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
              <Form.Label>Street Number</Form.Label>
              <Form.Control
                onChange={(e) => setPostStreetAddress(e.target.value)}
                placeholder="1234"
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
              <Form.Label>Street Name</Form.Label>
              <Form.Control
                onChange={(e) => setPostStreetName(e.target.value)}
                placeholder="Jenny Dr."
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group onChange={(e) => setPostCity(e.target.value)} as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
          
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose..." onChange={(e) => setSelectedStates(e.target.value)} required>
                <option value={null}>Choose...</option>
                {statesOptions.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control onChange={(e) => setPostZipCode(e.target.value)} />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group>
              <FloatingLabel label="Leave a short message on why you are contacting A.S.A.P. Today">
                <Form.Control as="textarea" onChange={(e) => setPostMessage(e.target.value)} style={{ height: "100px" }} />
              </FloatingLabel>
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </div>
    );
  }

