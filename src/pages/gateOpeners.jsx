import React from "react";

export default function GateOpeners() {
  return (
    <div>
      <header>
        <div
          className="p-5 mb-2 text-center bg-image"
          style={{
            backgroundImage:
              "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4d33a0vUlKjW-SF0anhL2v-d4nbKnlajBnrLcgGgKX37kDjsjC_O65pEzHkgeNiQn2k&usqp=CAU)",
            height: "200px",
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">GateOpeners</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
