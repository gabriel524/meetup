import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import "./nprogress.css";
import Row from "react-bootstrap/Row";
import WelcomeScreen from "./WelcomeScreen";
import { getEvents, extractLocations, checkToken, getAccessToken } from "./api";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
class App extends Component {
  state = {
    events: [],
    locations: [],
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
 getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

  render() {
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;
    const { numberOfEvents } = this.state;
    return (
      <div className="App">
        <div className="title-wrapper">
          <h1 className="title">Meet App</h1>
          <h4>Please choose your nearest city</h4>
        </div>

        <div className="data-wrapper">
          <NumberOfEvents
            updateEvents={this.updateEvents}
            numberOfEvents={numberOfEvents}
            handleInputChanged={this.handleInputChanged}
          />
          <CitySearch
            locations={this.state.locations}
            updateEvents={this.updateEvents}
          />

          <h4>Events in each city</h4>

          <ScatterChart
            width={400}
            height={400}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="number" dataKey="x" name="stature" unit="cm" />
            <YAxis type="number" dataKey="y" name="weight" unit="kg" />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>

          <EventList events={this.state.events} />
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







