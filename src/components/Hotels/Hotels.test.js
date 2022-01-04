import React, { useState } from "react";
import Hotels from "./Hotels";

describe("Car Component", () => {
  it("test state", () => {
    const wrapper = shallow(<Hotels />);
    wrapper.find(".btnHover").simulate("click");
    expect(wrapper.find("filterResults").text()).toBe("Sent Successfully");
  });
});
