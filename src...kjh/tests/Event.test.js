import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });
  test("render correct number of events", () => {
    expect(EventWrapper.find(".events")).toHaveLength(1);
  });
});
