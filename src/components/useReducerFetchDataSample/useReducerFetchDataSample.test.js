import React from "react";
import { shallow } from "enzyme";
import UseReducerFetchDataSample from "./useReducerFetchDataSample";

describe("UseReducerFetchDataSample", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UseReducerFetchDataSample />);
    expect(wrapper).toMatchSnapshot();
  });
});
