import React from "react";
import { render, screen } from "@utils/test-utils";

import Header from "../index";

const defaultProps = {};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<Header {...setupStore} />, {});
};

describe("Test for Header component", () => {
  test("Should render without errors", () => {
    setup();
    expect(screen.getByText("Iniciar sesión")).toBeTruthy();
  });

  test("Should renders the same component", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});