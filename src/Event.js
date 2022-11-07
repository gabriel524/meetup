
import React, { Component } from "react";

class Event extends Component {
  state = { show: false };

  toggleDetails = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { event } = this.props;

    return (
      < div className="events">
        <div className="details-btn"></div>
        <div className="event-card">
          <h3 className="event-title">{event.summary}</h3>
          <p className="event-info">
            {event.location} {event.start.dateTime} {event.start.timeZone}
          </p>
          {this.state.show && (
            <div className="event-description">
              <p className="description-title">Event Description:</p>
              <p>{event.description}</p>
            </div>
          )}
          {!this.state.show ? (
            <button
              className="show_details-button btn"
              onClick={this.toggleDetails}
            >
              Show Details
            </button>
          ) : (
            <button
              className="hide_details-button btn"
              onClick={this.toggleDetails}
            >
              Hide Details
            </button>
          )}
        </div>
        </div>
        
    );
  }
}

 export default Event;