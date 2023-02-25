import React from "react";
import RequestForm from "../components/form";

import TestimonialsComponent from "../components/testimonialsComponent";


export default function Testimonials() {
  return (
    <div>
      <div>
        <header>
          <div
            className="p-5 mb-5 text-center bg-image"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/brickandbatten/images/f_auto,q_auto/v1640999517/wordpress_assets/23544-Garage-FR/23544-Garage-FR.jpg?_i=AA)",
              height: "200px",
            }}
          >
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            >
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white">
                  <h1 className="mb-3">Testimonials</h1>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <TestimonialsComponent />
      <RequestForm />
    </div>
  );
}
