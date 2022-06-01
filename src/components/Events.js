import React from "react";
import "../component-css/Events.css";
import { EventsInfo } from "./EventsInfo";

function Events() {
  return (
    <div className="events-page">
      <div className="events-row">
        <span className="events-heading">Events</span>
        <div className="row-1">
          {EventsInfo.map((eve, index) => {
            return (
              <img
                className="events-row-imgs"
                src={eve.image}
                alt={eve.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Events;
