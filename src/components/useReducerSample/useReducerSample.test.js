import React from "react";
import { shallow } from "enzyme";
import UseReducerSample from "./useReducerSample";

describe("UseReducerSample", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UseReducerSample />);
    expect(wrapper).toMatchSnapshot();
  });
});
