import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ClinicalForm from './ClinicalForm';
import { MemoryRouter } from 'react-router-dom';

describe('ClinicalForm Component', () => {
  test('renders clinical form with inputs and buttons', () => {

    render(
      <MemoryRouter>
        <ClinicalForm />
      </MemoryRouter>
      );
    const pageTitle = screen.getByText('Add a new Clinical Trail Program');
    const nameInput = screen.getByPlaceholderText('Enter the program name');
    const objectiveTextarea = screen.getByPlaceholderText('Objective of the program');
    const contactInput = screen.getByPlaceholderText('Contact Person');
    const phoneInput = screen.getByPlaceholderText('Enter Phone Number');
    const submitButton = screen.getByText('Submit');
    const cancelButton = screen.getByText('Cancel');

    expect(pageTitle).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(objectiveTextarea).toBeInTheDocument();
    expect(contactInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });
});
