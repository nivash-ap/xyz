import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />);
    const logoElement = screen.getByAltText('TATA ELXSI');
    expect(logoElement).toBeInTheDocument();
  });

  it('renders language selection', () => {
    render(<Header />);
    const languageElement = screen.getByAltText('Language');
    expect(languageElement).toBeInTheDocument();
  });

  it('renders profile button with name', () => {
    render(<Header />);
    const profileButton = screen.getByRole('button', { name: /Nivash Anandan/i });
    expect(profileButton).toBeInTheDocument();
  });

  it('renders dropdown menu items', () => {
    render(<Header />);
    const dropdownMenuItem1 = screen.getByText('My Profile');
    const dropdownMenuItem2 = screen.getByText('Logout');
    expect(dropdownMenuItem1).toBeInTheDocument();
    expect(dropdownMenuItem2).toBeInTheDocument();
  });
});
