import React from "react";
import Header from "../Header/Header";
import Sidenav from "../Sidenav/Sidenav";
import "./StudentCoordinator.css";
import { Link } from "react-router-dom";
import CoordinatorCards from "../../containers/CoordinatorCards/CoordinatorCards";

const StudentCoordinator = () => {
  return (
    <>
      <Header />

      <div className="row">
        <div className="side">
          <Sidenav />
        </div>
        <div className="main">
          <header className="study-page-header">
            <div className="page-header">
              <p className="head-text">Study Coordinators</p>
            </div>
            <Link to="/addStudentCoordinator">
              <button className="btn btn-primary btn-primary1">
                Add New Study Coordinator
              </button>
            </Link>
          </header>

          <div className="student-coordinators-container">
            <CoordinatorCards data-testid="coordinator-cards-component" />
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentCoordinator;
