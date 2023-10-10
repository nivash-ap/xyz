import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination', () => {
  const mockCoordinators = Array.from({ length: 15 }, (_, index) => `Coordinator ${index + 1}`);
  const mockSetCurrentPageCoordinators = jest.fn();

  it('renders the pagination options and page info', () => {
    render(
      <Pagination coordinators={mockCoordinators} setCurrentPageCoordinators={mockSetCurrentPageCoordinators} />
    );

    expect(screen.getByText('Items per page:')).toBeInTheDocument();
    expect(screen.getByText('1 - 5 of 15')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '<<' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '<' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '>' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '>>' })).toBeInTheDocument();
  });

  it('updates coordinators per page on selection change', () => {
    render(
      <Pagination coordinators={mockCoordinators} setCurrentPageCoordinators={mockSetCurrentPageCoordinators} />
    );

    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: '10' } });

    expect(mockSetCurrentPageCoordinators).toHaveBeenCalledWith(mockCoordinators.slice(0, 10));
  });

  it('handles previous and next button clicks', () => {
    render(
      <Pagination coordinators={mockCoordinators} setCurrentPageCoordinators={mockSetCurrentPageCoordinators} />
    );

    const previousButton = screen.getByTestId('previous-button');
    const nextButton = screen.getByTestId('next-button');

    fireEvent.click(nextButton);
    expect(mockSetCurrentPageCoordinators).toHaveBeenCalledWith(mockCoordinators.slice(5, 10));

    fireEvent.click(previousButton);
    expect(mockSetCurrentPageCoordinators).toHaveBeenCalledWith(mockCoordinators.slice(0, 5));
  });

  
});
