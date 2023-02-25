import React from "react";
import TeamMemebers from "../components/teamCard";
import teamMembers from "../components/teamData";

export default function MeetOurTeam() {
  const teamList = teamMembers.map(member => {
    return (
      <TeamMemebers
        key={member.id}
        member={member}
      />
  )
})

  return (
    <div>
      <header>
        <div
          className="p-5 mb-2 text-center bg-image"
          style={{
            backgroundImage:
              "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS65CqpDfi5sgvUnDz2NQtWn-iBGaQo7O5LEw&usqp=CAU)",
            height: "200px",
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">MeetOurTeam</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="card-container container">{teamList}</section>
    </div>
  );
}
