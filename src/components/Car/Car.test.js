import React, { useState } from "react";
import Car from "./Car";

describe("Car Component", () => {
  it("test state", () => {
    const wrapper = shallow(<Car />);
    wrapper.find(".rst").simulate("click");
    expect(wrapper.find("div").text()).toBe("Sent Successfully");
  });
});
