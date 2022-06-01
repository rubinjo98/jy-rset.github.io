import React from "react";
import "../component-css/Team.css";
import { TeamInfo } from "./TeamInfo";

function Team() {
  return (
    <div className="team-page">
      {TeamInfo.map((team, index) => {
        return (
          <div className="team-container" key={team.id}>
            <div className="team-left">
              <p className="team-title">{team.title}</p>
              <p className="team-description">{team.description}</p>
              <button className="members-btn">Explore</button>
            </div>
            <div className="team-right">
              <img className="team-img" src={team.image} alt="team-image" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Team;
