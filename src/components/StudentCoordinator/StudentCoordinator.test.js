import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import StudentCoordinator from './StudentCoordinator';

// const CoordinatorCards = (props) => {
//   console.log('CoordinatorCards props:', props);

//   // Rest of the component logic
// };

test('renders StudentCoordinator component with header and coordinator cards', async () => {
  render(
    <Router>
      <StudentCoordinator />
    </Router>
  );

  await waitFor(() => {
    const headerText = screen.getByText('Study Coordinators');
    const addButton = screen.getByText('Add New Study Coordinator');
    const coordinatorCardsComponent = screen.getByTestId('coordinator-cards-component');

    expect(headerText).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(coordinatorCardsComponent).toBeInTheDocument();
  });
});

