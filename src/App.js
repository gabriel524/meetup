import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import "./nprogress.css";
import Row from "react-bootstrap/Row";
import WelcomeScreen from "./WelcomeScreen";
import { WarningAlert } from "./Alert";
import { getEvents, extractLocations, checkToken, getAccessToken } from "./api";
class App extends Component {
  state = {
    events: [],
    locations: [],
    allEvents: [],
    numberOfEvents: 32,
    locationSelected: "all",
    errorText: "",
    offlineText: "",
    showWelcomeScreen: undefined,
  };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem("access_token");
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            allEvents: events,
            events: events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(events),
          });
        }
      });
    }

    if (!navigator.onLine) {
      this.setState({
        offlineText:
          "It seems that you're not connected to the internet, your data was loaded from the cache.",
      });
    } else {
      this.setState({
        offlineText: "",
      });
    }
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
        const filteredEvents = locationEvents.slice(0, maxNumEvents);
      this.setState({
        events: locationEvents.slice(0, maxNumEvents),
        numberOfEvents: maxNumEvents,
        event: filteredEvents,
        locationSelected: location,
      });
    });
  };

  componentWillUnmount() {
    this.mounted = false;
  }

  handleInputChanged = (event) => {
    let newCount = event.target.value;
    if (isNaN(newCount)) {
      return "";
    } else {
      parseInt(newCount);
    }
    const allEvents = this.state.allEvents;
    const { locationSelected } = this.state;
    const locationEvents =
      locationSelected === "all"
        ? allEvents
        : allEvents.filter((event) => event.location === locationSelected);
    if (newCount > 32 || newCount <= 0) {
      this.setState({
        numberOfEvents: newCount,
        events: locationEvents.slice(0, newCount),
        errorText: "Please choose a number between 1 and 32",
      });
    } else {
      this.setState({
        numberOfEvents: newCount,
        events: locationEvents.slice(0, newCount),
        errorText: " ",
      });
    }
  };

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(", ").shift();
      return { city, number };
    });
    return data;
  };

  render() {
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;
    const { numberOfEvents } = this.state;
    return (
      <div className="App">
        <WarningAlert text={this.state.offlineText} />
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
            handleInputChanged={this.handleInputChanged}
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
