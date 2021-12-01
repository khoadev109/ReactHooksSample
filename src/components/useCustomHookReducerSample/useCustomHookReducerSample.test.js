import React from "react";
import { shallow } from "enzyme";
import UseCustomHookReducerSample from "./useCustomHookReducerSample";

describe("UseCustomHookReducerSample", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UseCustomHookReducerSample />);
    expect(wrapper).toMatchSnapshot();
  });
});
