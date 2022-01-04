import "jest-dom/extend-expect";
import MyOrders from "./MyOrders";
import { render } from "@testing-library/react";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MyOrders></MyOrders>);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<MyOrders label="click me please"></MyOrders>);
  expect(getByTestId("button")).toHaveTextContent("click me please");
});
