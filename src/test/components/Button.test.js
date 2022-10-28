/* eslint-disable no-undef */
import React from "react";
import '@testing-library/jest-dom'
// eslint-disable-next-line no-unused-vars
import {fireEvent, render, screen} from '@testing-library/react'
import Button from "../../componets/Button";



describe("Button Componet", () => {
  it("should be clicked", () => {
    render(<Button/>);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});
