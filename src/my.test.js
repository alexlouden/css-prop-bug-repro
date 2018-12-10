import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { MyBox } from "./App";

test("it works", () => {
  const tree = renderer.create(<MyBox />).toJSON();
  expect(tree).toHaveStyleRule("border", "1px solid red");
  expect(tree).toHaveStyleRule("color", "blue");
});
