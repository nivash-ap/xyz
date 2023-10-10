import React, { useState, useEffect } from "react";
import "./CoordinatorCards.css";
import CoordinatorsCardHeader from "../../components/coordinatorsCardHeader/CoordinatorsCardHeader";
import CoordinatorCard from "../../components/CoordinatorCard/CoordinatorCard";
import Pagination from "../../components/pagination/Pagination";
// import AdvancedExample from "../../AdvancedExample";

const CoordinatorCards = () => {
  const [coordinators, setCoordinators] = useState([]);
  const [currentPageCoordinators, setCurrentPageCoordinators] = useState([]);
  const coordinatorsPerPage = 5;
  useEffect(() => {
    async function fetchCoordinators() {
      try {
        const response = await fetch(
          "http://localhost:3001/studentCoordinators"
        );
        const data = await response.json();
        setCoordinators(data);
        setCurrentPageCoordinators(data.slice(0, coordinatorsPerPage));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchCoordinators();
  }, []);
  return (
    <main className="student-coordinators-container">
      <CoordinatorsCardHeader
        currentPageCoordinators={currentPageCoordinators}
        setCurrentPageCoordinators={setCurrentPageCoordinators}
      />
      <div className="student-coordinators-wrapper">
        {currentPageCoordinators.map((coordinator) => (
          <CoordinatorCard
            key={coordinator.id}
            coordinator={coordinator}
            setCurrentPageCoordinators={setCurrentPageCoordinators}
          />
        ))}
      </div>
      <div>
        <Pagination
          coordinators={coordinators}
          setCurrentPageCoordinators={setCurrentPageCoordinators}
        />
      </div>
    </main>
  );
};
export default CoordinatorCards;
