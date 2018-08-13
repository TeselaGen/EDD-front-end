import React from "react";
import { shallow } from "enzyme";

import NoResourceFound from "./index";

const wrapper = shallow(<NoResourceFound />);
// const emptyWrapper = shallow(<NoResourceFound />)

describe("NoResourceFound", () => {
  it("renders correctly", () => {
    expect(wrapper).toBeTruthy();
  });
});
