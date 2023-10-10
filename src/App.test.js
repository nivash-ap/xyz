import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
  test('renders routes', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const signinRoute = screen.queryByTestId('signin-link');
    const homeRoute = screen.queryByTestId('home-link');
    const clinicalRoute = screen.queryByTestId('clinical-link');
    const studentCoordinatorRoute = screen.queryByTestId('student-coordinator-link');
    const addStudentCoordinatorRoute = screen.queryByTestId('add-student-coordinator-link');
    const editStudentCoordinatorRoute = screen.queryByTestId('edit-student-coordinator-link');
    const clinicalFormRoute = screen.queryByTestId('clinical-form-link');
    const displayClinicalDataRoute = screen.queryByTestId('display-clinical-data-link');
    

    expect(signinRoute).toBeInTheDocument();
    expect(homeRoute).toBeInTheDocument();
    expect(clinicalRoute).toBeInTheDocument();
    expect(studentCoordinatorRoute).toBeInTheDocument();
    expect(addStudentCoordinatorRoute).toBeInTheDocument();
    expect(editStudentCoordinatorRoute).toBeInTheDocument();
    expect(clinicalFormRoute).toBeInTheDocument();
    expect(displayClinicalDataRoute).toBeInTheDocument();
    
  });
});

