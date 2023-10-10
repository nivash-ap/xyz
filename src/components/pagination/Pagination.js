import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleLeft,
  faAngleRight,
  faAngleDoubleRight
} from '@fortawesome/free-solid-svg-icons';
import './Pagination.css';


const Pagination = ({ coordinators, setCurrentPageCoordinators }) => {
	const coordinatorsPerPageOptions = [5, 10, 20];

	const [currentPage, setCurrentPage] = useState(1);
	const [coordinatorsPerPage, setCoordinatorsPerPage] = useState(5);

	useEffect(() => {
		handlePageChange(1);
	  }, [coordinators, coordinatorsPerPage]);
	
	  const handlePageChange = (pageNumber) => {
		if (pageNumber > 0 && pageNumber <= totalPages) {
		  setCurrentPage(pageNumber);
		  calculateCurrentPageCoordinators(pageNumber, coordinatorsPerPage);
		}
	  };
	
	  const calculateCurrentPageCoordinators = (pageNumber, coordinatorsPerPage) => {
		const indexOfLastCoordinator = pageNumber * coordinatorsPerPage;
		const indexOfFirstCoordinator = indexOfLastCoordinator - coordinatorsPerPage;
		const currentPageCoordinators = coordinators.slice(
		  indexOfFirstCoordinator,
		  indexOfLastCoordinator
		);
		setCurrentPageCoordinators(currentPageCoordinators);
	  };
	
	  const totalCoordinators = coordinators.length;
	  const totalPages = Math.ceil(totalCoordinators / coordinatorsPerPage);
	
	  const indexOfLastCoordinator = currentPage * coordinatorsPerPage;
	  const indexOfFirstCoordinator = indexOfLastCoordinator - coordinatorsPerPage+1;

  return (
    <div className="pagination-wrapper">
      <div className="pagination-options">
        <span>Items per page: </span>
        <select
          className='pagination-select'
          value={coordinatorsPerPage}
          onChange={(e) => setCoordinatorsPerPage(parseInt(e.target.value))}
        >
          {coordinatorsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <span>
           {indexOfFirstCoordinator} -{Math.min(totalCoordinators,indexOfLastCoordinator)} of {totalCoordinators}
      </span>
      <div className="pagination-buttons">
        <button
          className='page-shift-buttons'
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          <FontAwesomeIcon icon={faAngleDoubleLeft} />
        </button>
        <button 
          className='page-shift-buttons'
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          data-testid='previous-button'
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        
        <button
          className='page-shift-buttons'
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          data-testid='next-button'
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
        <button
          className='page-shift-buttons'
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
