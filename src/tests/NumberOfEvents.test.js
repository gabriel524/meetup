import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render number input", () => {
    expect(NumberOfEventsWrapper.find(".event_number")).toHaveLength(1);
  });

  test("render default number in the input is 32", () => {
    expect(NumberOfEventsWrapper.find(".event_number").prop("value")).toBe(32);
  });

  test("render change the number of events in input field by changing state", () => {
    NumberOfEventsWrapper.setState({
      numOfEvents: 32,
    });
    const eventObject = { target: { value: 6 } };
    NumberOfEventsWrapper.find(".event_number").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("numOfEvents")).toBe(32);
  });
});



