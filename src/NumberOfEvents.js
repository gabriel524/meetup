import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    allEvents: [],
    numberOfEvents: 32,
    locationSelected: "all",
    infoText: "",
  };

  handleInputChanged = (event) => {
    console.log(event.target.value);
    let inputValue = event.target.value;
    if (isNaN(inputValue)) {
      return "";
    } else {
      parseInt(inputValue);
    }
    const allEvents = this.state.allEvents;
    const { locationSelected } = this.state;
    const locationEvents =
      locationSelected === "all"
        ? allEvents
        : allEvents.filter((event) => event.location === locationSelected);
    if (inputValue > 32 || inputValue <= 0) {
      this.setState({
        numberOfEvents: inputValue,
        events: locationEvents.slice(0, inputValue),
        infoText: "Please choose a number between 1 and 32",
      });
    } else {
      this.setState({
        numberOfEvents: inputValue,
        events: locationEvents.slice(0, inputValue),
        infoText: " ",
      });
    }
  };
  render() {
    return (
      <div className="event_number">
        <div className="number-of-events">Show Number of Events </div>
        <input
          type="number"
          id="events-num-input"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
        <div>
          <ErrorAlert text={this.state.infoText} />
        </div>
      </div>
    );
  }
}

export default NumberOfEvents;
