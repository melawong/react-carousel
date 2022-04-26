import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";



it("renders without crashing", function () {
  render(<Card caption="testing image 1" src="test1.com" currNum={1} totalNum={1} />);
});


it("matches snapshot", function () {
  const { container } = render(<Card caption="testing image 1" src="test1.com" currNum={1} totalNum={1} />);
  expect(container).toMatchSnapshot();
});