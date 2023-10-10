import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidenav from './Sidenav';

describe('Sidenav', () => {
  it('renders navigation links with icons', () => {
    render(
      <Router>
        <Sidenav />
      </Router>
    );

    const clinicalLink = screen.getByText('Clinical Trail Program');
    const analyticsLink = screen.getByText('Analytics');
    const studyCoordinatorsLink = screen.getByText('Study coordinators');
    const participantsLink = screen.getByText('Participants');
    const messagesLink = screen.getByText('Messages');
    const ticketManagementLink = screen.getByText('Ticket Management');

    expect(clinicalLink).toBeInTheDocument();
    expect(analyticsLink).toBeInTheDocument();
    expect(studyCoordinatorsLink).toBeInTheDocument();
    expect(participantsLink).toBeInTheDocument();
    expect(messagesLink).toBeInTheDocument();
    expect(ticketManagementLink).toBeInTheDocument();
  });
});
