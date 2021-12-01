import React from "react";
import { shallow } from "enzyme";
import UseEffectSample from "./useEffectSample";

describe("UseEffectSample", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UseEffectSample />);
    expect(wrapper).toMatchSnapshot();
  });
});
