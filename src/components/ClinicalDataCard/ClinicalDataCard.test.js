import React from 'react';
import { render, screen, fireEvent, debug } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ClinicalDataCard from './ClinicalDataCard';


test('navigates to displayClinicalData page on card click', () => {
  const data = {
    id: 1,
    title: 'Clinical Trial Example',
  };
  const navigateMock = jest.fn();
  render(
    <MemoryRouter>
      <ClinicalDataCard data={data} />
    </MemoryRouter>
  );
  // console.log(screen.getByTestId('clinical-card-container'));
  const cardContainer = screen.getByTestId('clinical-card-container');
  fireEvent.click(cardContainer);
});
