import React from "react";
import { shallow } from "enzyme";
import UseCustomHookSample from "./useCustomHookSample";

describe("UseCustomHookSample", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UseCustomHookSample />);
    expect(wrapper).toMatchSnapshot();
  });
});
