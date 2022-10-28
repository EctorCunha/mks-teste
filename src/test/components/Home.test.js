/* eslint-disable no-undef */
import React from "react";
import '@testing-library/jest-dom'
// eslint-disable-next-line no-unused-vars
import {fireEvent, render, screen} from '@testing-library/react'
import Home from "../../pages/index";



describe("Button Componet", () => {
  it("should be clicked", () => {
    render(<Home/>);

    const button = screen.getByText("comprar");

    expect(button).toBeInTheDocument();
  });
});
