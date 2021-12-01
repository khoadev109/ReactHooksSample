import React from "react";
import { shallow } from "enzyme";
import UseContextSample from "./useContextSample";

describe("UseContextSample", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UseContextSample />);
    expect(wrapper).toMatchSnapshot();
  });
});
