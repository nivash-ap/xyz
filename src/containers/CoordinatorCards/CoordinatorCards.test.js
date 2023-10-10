import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CoordinatorCards from './CoordinatorCards';

// Mocking the fetch function to provide data for testing
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]), 
  })
);

describe('CoordinatorCards', () => {
  it('renders coordinator cards and pagination', async () => {
    render(<CoordinatorCards />);

    // Wait for the initial data fetch to complete
    await waitFor(() => {
        expect(screen.getByText('Coordinators', { selector: 'p.coordinators-title' })).toBeInTheDocument();
    });

    // Assuming your CoordinatorCard component renders a card with some specific content
    // You can assert the presence of that content here
    // For simplicity, let's assume that the CoordinatorCard component renders a name field
    // So, you would expect that the name field to be present for each coordinator

    // Example: If your CoordinatorCard has a name field
    // Expecting the name field for each coordinator
    // Mocking an array of coordinators for testing
    const mockCoordinators = [
      { id: 1, name: 'Coordinator 1' },
      { id: 2, name: 'Coordinator 2' },
    ];

    render(<CoordinatorCards coordinators={mockCoordinators} />);

    // Wait for coordinator cards to be rendered
    await waitFor(() => {
      expect(screen.getByText('Coordinator 1')).toBeInTheDocument();
      expect(screen.getByText('Coordinator 2')).toBeInTheDocument();
    });
    
    // expect(screen.getByLabelText('Previous')).toBeInTheDocument();
    // expect(screen.getByLabelText('Next')).toBeInTheDocument();
  });

});
