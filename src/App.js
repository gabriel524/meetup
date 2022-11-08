import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import './nprogress.css';
import { getEvents, extractLocations } from "./api";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    locationSelected: "all",
    showWelcomeScreen: undefined,
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  updateEvents = (location, maxNumEvents) => {
    if (maxNumEvents === undefined) {
      maxNumEvents = this.state.numberOfEvents;
    } else this.setState({ numberOfEvents: maxNumEvents });
    if (location === undefined) {
      location = this.state.locationSelected;
    }

    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, maxNumEvents),
        numberOfEvents: maxNumEvents,
        locationSelected: location,
      });
    });
  };

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;
    const { numberOfEvents } = this.state;
    return (
      <div className="App">
        <div className="title-wrapper">
          <h1>Meet App</h1>
          <h4>Please choose your nearest city</h4>
        </div>
        <div className="data-wrapper">
          <CitySearch
            locations={this.state.locations}
            updateEvents={this.updateEvents}
          />
          <EventList events={this.state.events} />
          <NumberOfEvents
            numberOfEvents={numberOfEvents}
            updateEvents={this.updateEvents}
          />
        </div>
        <Row className="events-wrapper"></Row>
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}

export default App;
