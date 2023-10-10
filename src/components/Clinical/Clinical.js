import React, { useState, useEffect } from "react";
import "./Clinical.css";
import Header from "../Header/Header";
import Sidenav from "../Sidenav/Sidenav";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import ClinicalDataCard from "../ClinicalDataCard/ClinicalDataCard";

const Clinical = () => {
  const [clinicalData, setClinicalData] = useState([]);
  const navigate = useNavigate();

  const displayHandler = () => {
    navigate("/displayClinicalData");
  };

  useEffect(() => {
    async function fetchCoordinators() {
      try {
        const response = await fetch("http://localhost:3001/clinicalData");
        const data = await response.json();
        setClinicalData(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }

    fetchCoordinators();
  }, []);

  return (
    <>
      <Header />

      <div className="row">
        <div className="side">
          <Sidenav />
        </div>
        <div className="main4">
          <header className="clinical-page-header">
            <div className="page-header">
              <p className="head-text">Clinical Trail Program</p>
            </div>
          </header>
          <div className="clinical-card-wrapper">
            {/* <div className=""> */}
            {clinicalData.map((clinicalInfo) => (
              <ClinicalDataCard key={clinicalInfo.id} data={clinicalInfo} />
            ))}
            {/* </div> */}

            <div className="add-card-container">
              <div className="add-image">
                <Link to="/clinicalForm">
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    size="xs"
                    style={{
                      color: "#d5d7e3",
                      width: "121px",
                      height: "121px",
                    }}
                  />
                </Link>
              </div>

              <h5 className="add-image-title">Add New Program</h5>
              <p className="add-image-text">
                Click on plus to add a new program
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Clinical;
