import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DeleteConfirmation from './DeleteConfirmation';

describe('DeleteConfirmation Component', () => {
  test('renders confirmation message and buttons', () => {
    const onCancelMock = jest.fn();
    const onDeleteMock = jest.fn();

    render(
      <DeleteConfirmation onCancel={onCancelMock} onDelete={onDeleteMock} />
    );

    const headMessage = screen.getByText('Are you sure you want to delete this record?');
    const bodyMessage = screen.getByText('Deleting the record will remove all the data associated permanently!');
    const cancelButton = screen.getByText('Cancel');
    const deleteButton = screen.getByText('Delete');

    expect(headMessage).toBeInTheDocument();
    expect(bodyMessage).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });

  test('calls onCancel and onDelete functions when buttons are clicked', () => {
    const onCancelMock = jest.fn();
    const onDeleteMock = jest.fn();

    render(
      <DeleteConfirmation onCancel={onCancelMock} onDelete={onDeleteMock} />
    );

    const cancelButton = screen.getByText('Cancel');
    const deleteButton = screen.getByText('Delete');

    fireEvent.click(cancelButton);
    fireEvent.click(deleteButton);

    expect(onCancelMock).toHaveBeenCalledTimes(1);
    expect(onDeleteMock).toHaveBeenCalledTimes(1);
  });
});
