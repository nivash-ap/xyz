import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Signin from './Signin';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), 
    useNavigate: () => jest.fn(), // Provide a mock function for useNavigate
  }));


describe('Signin Component', () => {
  test('renders signin form', () => {
    render(<Signin />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const signInButton = screen.getByTestId('signin-button');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
  });

  test('displays error messages on empty form submission', () => {
    render(<Signin />);

    const signInButton = screen.getByTestId('signin-button');

    fireEvent.click(signInButton);

    const emailError = screen.getByText('Enter valid username');
    const passwordError = screen.getByText('Enter valid password');

    expect(emailError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
  });
  
  test('navigates to home page on successful login', () => {
    render(<Signin />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const signInButton = screen.getByTestId('signin-button');

    fireEvent.change(emailInput, { target: { value: 'valid@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'validpassword' } });

    fireEvent.click(signInButton);
  });
});
