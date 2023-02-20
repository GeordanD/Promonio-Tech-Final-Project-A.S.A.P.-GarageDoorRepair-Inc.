import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

export default function AdminPage() {
  const [getRequestsList, setGetRequestsList] = useState([]);
  const requestEndpoint =
    "https://63bb0bcecf99234bfa50f42b.mockapi.io/contactRequest";

  const get = async () => {
    try {
      const resp = await fetch(requestEndpoint);
      const data = await resp.json();
      return data;
    } catch (e) {
      console.log("Fetch request had an issue");
    }
  };

  const deleteRequest = async (contactRequests) => {
    console.log(contactRequests);
    try {
      const resp = await fetch(`${requestEndpoint}/${contactRequests}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await resp.json();
    } catch (e) {
      console.log("Deleting Request had an issue!");
    }
  };

  useEffect(() => {
    getRequests();
  }, []);

  async function getRequests() {
    get().then((data) => {
      setGetRequestsList(data);
      // console.log(data);
    });
  }

  const handleDeleteClick = (requestId) => {
    console.log(requestId);
    setTimeout(() => (
      deleteRequest(requestId)
    ), 1000);
   
    getRequests();
  };

  function AllRequest() {
    const requestList = () =>
      getRequestsList.map((request, index) => (
        <tr key={index}>
          <td key={request.id} >{request.id}</td>
          <td>Date: {`${request.createdAt}`}</td>
          <td>{`${request.firstName} ${request.lastName}`}</td>
          <td>{`${request.companyName}`}</td>
          <td>{`${request.streetAddress} ${request.streetName}, ${request.city}, ${request.state} ${request.zipCode}`}</td>
          <td>{`${request.phoneNumber}`}</td>
          <td>{`${request.email}`}</td>
          <td>{`${request.message}`}</td>
          <td>
            <Button variant="primary">Edit</Button>
            <Button
              variant="danger"
              onClick={() => handleDeleteClick(request.id)}
            >
              Delete
            </Button>
          </td>
        </tr>
      ));

    return requestList();
  }

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Company Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <AllRequest
      
          />
        </tbody>
      </Table>
    </>
  );
}
