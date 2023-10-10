import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom'; 
import Clinical from './Clinical';

// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]), // Empty data for testing
  })
);

describe('Clinical Component', () => {
  test('renders clinical page with cards and "Add New Program" button', async () => {
    render(
      <MemoryRouter initialEntries={['/clinical']}>
        <Routes>
          <Route path="/clinical" element={<Clinical />} />
        </Routes>
      </MemoryRouter>
    );

    // Wait for data to fetched and components to render
    await waitFor(() => {
      const clinicalCards = screen.queryAllByTestId('clinical-data-card');
      const addButton = screen.getByText('Add New Program');

      expect(clinicalCards).toHaveLength(0); 
      expect(addButton).toBeInTheDocument();
    });
  });

  
});
