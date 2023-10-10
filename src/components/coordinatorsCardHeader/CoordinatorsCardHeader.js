import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import "./CoordinatorsCardHeader.css";

const CoordinatorsCardHeader = ({currentPageCoordinators,setCurrentPageCoordinators}) => {
  const [sortName, setSortName] = useState("asc");
  const [sortCreated, setSortCreated] = useState("asc");
  const [sortExpiry, setSortExpiry] = useState("asc");
  const [sortStatus, setSortStatus] = useState("asc");
  const [sortEmail, setSortEmail] = useState("asc");

  const handleSortNameClick = () => {
    setSortName((prevSortName) => (prevSortName === 'asc' ? 'desc' : 'asc'));

    // Clone the current page coordinators array to avoid modifying the original data
    const sortedCoordinators = [...currentPageCoordinators];

    // Sort the array based on the first name
    sortedCoordinators.sort((a, b) => {
      if (sortName === 'asc') {
        return a.firstName.localeCompare(b.firstName);
      } else {
        return b.firstName.localeCompare(a.firstName);
      }
    });

    // Update the state with the sorted coordinators
    setCurrentPageCoordinators(sortedCoordinators);
  };

  const handleSortCreatedClick = () => {
    setSortCreated((prevSortCreated) => (prevSortCreated === 'asc' ? 'desc' : 'asc'));

    // Clone the current page coordinators array to avoid modifying the original data
    const sortedCoordinators = [...currentPageCoordinators];

    // Sort the array based on the creationDate
    sortedCoordinators.sort((a, b) => {
      const dateA = new Date(a.creationDate.split('/').reverse().join('/'));
      const dateB = new Date(b.creationDate.split('/').reverse().join('/'));

      if (sortCreated === 'asc') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });

    // Update the state with the sorted coordinators
    setCurrentPageCoordinators(sortedCoordinators);
  };

  const handleSortExpiryClick = () => {
    setSortExpiry((prevSortExpiry) => (prevSortExpiry === 'asc' ? 'desc' : 'asc'));

    // Clone the current page coordinators array to avoid modifying the original data
    const sortedCoordinators = [...currentPageCoordinators];

    // Sort the array based on the expiryDate
    sortedCoordinators.sort((a, b) => {
      const dateA = new Date(a.expiryDate.split('/').reverse().join('/'));
      const dateB = new Date(b.expiryDate.split('/').reverse().join('/'));

      if (sortExpiry === 'asc') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });

    // Update the state with the sorted coordinators
    setCurrentPageCoordinators(sortedCoordinators);
  };

  const handleSortStatusClick = () => {
    setSortStatus((prevSortStatus) => (prevSortStatus === 'asc' ? 'desc' : 'asc'));

    // Clone the current page coordinators array to avoid modifying the original data
    const sortedCoordinators = [...currentPageCoordinators];

    // Sort the array based on the status (true comes before false)
    sortedCoordinators.sort((a, b) => {
      if (sortStatus === 'asc') {
        return a.status - b.status;
      } else {
        return b.status - a.status;
      }
    });

    // Update the state with the sorted coordinators
    setCurrentPageCoordinators(sortedCoordinators);
  };


  const handleSortEmailClick = () => {
    setSortEmail((prevSortEmail) => (prevSortEmail === 'asc' ? 'desc' : 'asc'));

    // Clone the current page coordinators array to avoid modifying the original data
    const sortedCoordinators = [...currentPageCoordinators];

    // Sort the array based on the email
    sortedCoordinators.sort((a, b) => {
      if (sortEmail === 'asc') {
        return a.email.localeCompare(b.email);
      } else {
        return b.email.localeCompare(a.email);
      }
    });

    // Update the state with the sorted coordinators
    setCurrentPageCoordinators(sortedCoordinators);
  };

  return (
    <header className="student-coordinators-container-header">
      <div className="no-sorting">USER</div>
      <div className="header-col" onClick={handleSortNameClick}>
        <div>NAME</div>
        <div>
        {sortName === "desc" && <FontAwesomeIcon icon={faSortDown} />}
        {sortName === "asc" && <FontAwesomeIcon icon={faSortUp} />}
        </div>
      </div>
      <div className="header-col" onClick={handleSortCreatedClick}>
        <div>CREATED</div>
        <div>
        {sortCreated === "desc" && <FontAwesomeIcon icon={faSortDown} />}
        {sortCreated === "asc" && <FontAwesomeIcon icon={faSortUp} />}
        </div>
      </div>
      <div className="header-col" onClick={handleSortExpiryClick}>
        <div>EXPIRY</div>
        <div>
        {sortExpiry === "desc" && <FontAwesomeIcon icon={faSortDown} />}
        {sortExpiry === "asc" && <FontAwesomeIcon icon={faSortUp} />}
        </div>
      </div>
      <div className="header-col" onClick={handleSortStatusClick}>
        <div>STATUS</div>
        <div>
        {sortStatus === "desc" && <FontAwesomeIcon icon={faSortDown} />}
        {sortStatus === "asc" && <FontAwesomeIcon icon={faSortUp} />}
        </div>
      </div>
      <div className="header-col" onClick={handleSortEmailClick}>
        <div>EMAIL</div>
        <div>
        {sortEmail === "desc" && <FontAwesomeIcon icon={faSortDown} />}
        {sortEmail === "asc" && <FontAwesomeIcon icon={faSortUp} />}
        </div>
      </div>
      <div>ACTION</div>
    </header>
  );
};
export default CoordinatorsCardHeader;
