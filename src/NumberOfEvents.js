import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: "",
  };

  handleInputChanged = (event) => {
    let inputValue = event.target.value;
    if (inputValue<1 || inputValue >32) {
      this.setState({
        numberOfEvents: inputValue,
        infoText: "Please enter a number between 1 - 32.",
      });
    } else {
      this.setState({
        numberOfEvents: event.target.value,
        infoText: " ",
      });
    }

    this.props.updateEvents(undefined, inputValue);
  };

  render() {
    return (
      <div className="event_number">
        <div className="number-of-events">Number of Events </div>
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


/*handleInputChanged = (event) => {
    console.log(event);
    let inputValue = event.target.value;

    if (inputValue > 1 || inputValue > 32) {
      this.setState({
        infoText: "Please select number from 1 to 32",
      });
    } else {
      this.props.updateEvents(null, inputValue);
      this.setState({
        numberOfEvents: inputValue,
        infoText: "",
      });
    }
  };*/

  /*handleInputChanged = (event) => {
    console.log(event);
    let inputValue = event.target.value;
    if (inputValue < 1 || inputValue > 32) {
      this.setState({
        numberOfEvents: inputValue,
        infoText: "Please enter a number between 1 - 32.",
      });
    } else {
      this.setState({
        numberOfEvents: event.target.value,
        infoText: " ",
      });
    }

    this.props.updateEvents(inputValue);
  };
  
  


   handleInputChanged = (e)=>{
    const inputValue=e.target.value;
    
    if (inputValue<1 || inputValue>32) {
      this.setState({
        infoText: 'Please select number from 1 to 32'
      })
      
    } else {
      this.props.updateEvents(null, inputValue);
      this.setState({
        eventCount: inputValue,
        infoText:''
      })
    }
  }
  
  
  
  
  */




