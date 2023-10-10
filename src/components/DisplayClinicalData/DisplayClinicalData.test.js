import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DisplayClinicalData from "./DisplayClinicalData";

describe("DisplayClinicalData component", () => {
  const mockData = {
    title: "Sample Title",
    objective: "Sample Objective",
    contact: "Sample Contact",
    phNumber: "1234567890",
    studyCoordinator: "Sample Coordinator",
    clinicalParticipants: {
      participant1: {},
      participant2: {},
    },
  };

  it("renders component with provided data", () => {
    render(
      <MemoryRouter initialEntries={["/displayClinicalData/123"]}>
        <Routes>
          <Route
            path="/displayClinicalData/:id"
            element={<DisplayClinicalData />}
          />
        </Routes>
      </MemoryRouter>
    );

    // Now you can query elements in the rendered component as needed
    const titleElement = screen.getByText("Sample Title");
    const coordinatorElement = screen.getByText("Sample Coordinator");
    const participant1Element = screen.getByText("participant1");
    const participant2Element = screen.getByText("participant2");

    expect(titleElement).toBeInTheDocument();
    expect(coordinatorElement).toBeInTheDocument();
    expect(participant1Element).toBeInTheDocument();
    expect(participant2Element).toBeInTheDocument();
  });
});
