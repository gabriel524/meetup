import React, { Component } from "react";

class NumberOfEvents extends Component {
  render() {
    return (
      <div>
        <label htmlFor="number-of-events">Number of Events: </label>
        <input className="event_number" />
      </div>
    );
  }
}
export default NumberOfEvents;
