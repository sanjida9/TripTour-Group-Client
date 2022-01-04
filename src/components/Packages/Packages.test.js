import "jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Packages from "./Packages";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Packages></Packages>);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Packages label="click me please"></Packages>);
  expect(getByTestId("button")).toHaveTextContent("click me please");
});
