import React from "react";
import TeamMemebers from "../components/teamCard";
import teamMembers from "../components/teamData";

export default function MeetOurTeam() {
  const teamList = teamMembers.map(member => {
    return (
      <TeamMemebers
        key={member.name}
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
              "url(https://www.nwdusa.com/wp-content/uploads/2021/11/Modern-Classic-Slider-MC44-Dark-Bronze-Anodized-Satin-Etch-Glass-2000x1062.jpg)",
            height: "175px",
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
