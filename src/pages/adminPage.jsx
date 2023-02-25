import useFetch from "../rest/requestApi";
import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/esm/Table";
import EditRequest from "../components/editRequest";
import { useCallback, useState } from "react";



export default function AdminPage() {
  const [request, setRequest] = useState([]);

    const getRequests = useCallback(async () => {
      try {
          const resp = await fetch(REQUEST_ENDPOINT);
          setRequest(request)
        await resp.json();
        
      } catch (e) {
        console.log("Fetch request had an issue");
      }
    },[request]);

  const REQUEST_ENDPOINT =
    "https://63bb0bcecf99234bfa50f42b.mockapi.io/contactRequest";
  const { data } = useFetch(REQUEST_ENDPOINT);

  const DeleteRequest = (id) => {
    if (window.confirm("Sure you want to delete?")) {
      fetch(
        "https://63bb0bcecf99234bfa50f42b.mockapi.io/contactRequest/" + id,
        {
          method: "DELETE",
        }
      )
        .then(() => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <div className="mb-5">
      {data && (
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Name</th>
              <th>Company Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {data.map((request) => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>Date:{request.createdAt}</td>
                <td>
                  {request.firstName} {request.lastName}
                </td>
                <td>{request.companyName}</td>
                <td>
                  {request.streetAddress} {request.streetName}, {request.city},{" "}
                  {request.state} {request.zipCode}
                </td>
                <td>{request.phoneNumber}</td>
                <td>{request.email}</td>
                <td>{request.message}</td>
                <td className="d-flex">
                        <EditRequest
                            getRequests={getRequests}
                    id={request.id}
                    firstName={request.firstName}
                    lastName={request.lastName}
                    createdAt={request.createdAt}
                    companyName={request.companyName}
                    streetAddress={request.streetAddress}
                    streetName={request.streetName}
                    city={request.city}
                    state={request.state}
                    zipCode={request.zipCode}
                    phoneNumber={request.phoneNumber}
                    email={request.email}
                    message={request.message}
                  />
                  <Button
                    variant="danger"
                    onClick={() => {
                      DeleteRequest(request.id);
                    }}
                  >
                    Delete Request
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};     
            
