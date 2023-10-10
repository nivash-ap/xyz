import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';

test('renders HomePage with Clinical component', () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
  const clinicalComponent = screen.getByTestId('clinical-component'); 
  expect(clinicalComponent).toBeInTheDocument();
});
