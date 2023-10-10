import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Sidenav from "../Sidenav/Sidenav";
import "./ClinicalForm.css";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const ClinicalForm = () => {
  const navigate = useNavigate();
  const [coordinators, setCoordinators] = useState([]);
  const [studyCoordinator, setStudyCoordinator] = useState("");
  const [clinicalParticipants, setClinicalParticipants] = useState({});

  useEffect(() => {
    async function fetchCoordinators() {
      try {
        const response = await fetch(
          "http://localhost:3001/studentCoordinators"
        );
        const data = await response.json();
        setCoordinators(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchCoordinators();
  }, []);

  const handleStudyCoordinatorChange = (event) => {
    setStudyCoordinator(event.target.value);
  };

  const [cFormData, setCFormData] = useState({
    title: "",
    objective: "",
    contact: "",
    phNumber: "",
  });
  const [cFormErrors, setCFormErrors] = useState({
    title: "",
    objective: "",
    contact: "",
    phNumber: "",
  });

  const participants = [
    "Akash",
    "Abitha",
    "Rajesh",
    "Sadik",
    // Add more participants as needed
  ];

  const handleClinicalParticipantsSelection = (event) => {
    const { name, checked } = event.target;
    setClinicalParticipants((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to update form errors
  const handleInputBlur = (event) => {
    const { name, value } = event.target;
    const errors = {};

    if (!value.trim() || value === "") {
      errors[name] = `Please enter a valid ${name}`;
    } else {
      errors[name] = "";
    }

    setCFormErrors((prevErrors) => ({
      ...prevErrors,
      ...errors,
    }));
  };

  const apiData = {
    title: cFormData.title,
    objective: cFormData.objective,
    contact: cFormData.contact,
    phNumber: cFormData.phNumber,
    studyCoordinator: studyCoordinator,
    clinicalParticipants: clinicalParticipants,
  };

  const clinicalDataHandler = async (e) => {
    e.preventDefault();
    console.log(apiData);

    try {
      const response = await fetch("http://localhost:3001/clinicalData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      });

      if (response.ok) {
        alert("Data added successfully");
        navigate("/clinical");

      } else {
        alert("Data added failed");
      }
    } catch (error) {
      alert("Error occured: " + error);
    }
  };

  const cancelHandler = () => {
    navigate("/clinical");
  };

  return (
    <>
      <Header />

      <div className="row">
        <div className="side">
          <Sidenav />
        </div>
        <div className="main3">
          <p className="clinical-form-header">
            Add a new Clinical Trail Program
          </p>

          <div className="clinical-form-details">
            <div className="right-side-div">
              <p className="details-head">PROGRAM DETAILS</p>
              <div>
                <div className="clinical-input-field-wrapper">
                  <label className="clinical-form-label">
                    Name of Clinical Trail Program
                  </label>
                  <input
                    className={`clinical-form-input p-2 pt-3 pb-3 ${
                      cFormErrors.title ? "clinical-error-input" : ""
                    }`}
                    type="text"
                    name="title"
                    // value={title}
                    placeholder="Enter the program name"
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                  ></input>
                  {cFormErrors.title && (
                    <div className="err-text" style={{ color: "red" }}>
                      {cFormErrors.title}
                    </div>
                  )}
                </div>
                <div className="clinical-input-field-wrapper">
                  <label className="clinical-form-label">
                    Objective/Goal of the Program
                  </label>
                  <textarea
                    className={`clinical-form-input p-2 pt-3 pb-3 ${
                      cFormErrors.objective ? "clinical-error-input" : ""
                    }`}
                    type="textarea"
                    name="objective"
                    // value={objective}
                    placeholder="Objective of the program"
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                  ></textarea>
                  {cFormErrors.objective && (
                    <div className="err-text" style={{ color: "red" }}>
                      {cFormErrors.objective}
                    </div>
                  )}
                </div>
              </div>
              <div className="contact-container">
                <div className="clinical-input-field-wrapper contact">
                  <label className="clinical-form-label">
                    Point of Contact
                  </label>
                  <input
                    className={`clinical-form-input p-2 pt-3 pb-3 ${
                      cFormErrors.contact ? "clinical-error-input" : ""
                    }`}
                    type="text"
                    name="contact"
                    // value={contact}
                    placeholder="Contact Person"
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                  ></input>
                  {cFormErrors.contact && (
                    <div className="err-text" style={{ color: "red" }}>
                      {cFormErrors.contact}
                    </div>
                  )}
                </div>
                <div className="clinical-input-field-wrapper contact">
                  <label className="clinical-form-label">Phone Number</label>
                  <input
                    className={`clinical-form-input p-2 pt-3 pb-3 ${
                      cFormErrors.phNumber ? "clinical-error-input" : ""
                    }`}
                    type="tel"
                    name="phNumber"
                    // value={phNumber}
                    placeholder="Enter Phone Number"
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                  ></input>
                  {cFormErrors.phNumber && (
                    <div className="err-text" style={{ color: "red" }}>
                      {cFormErrors.phNumber}
                    </div>
                  )}
                </div>
              </div>
              <div className="select-container">
                <div className="clinical-input-field-wrapper contact">
                  <label className="clinical-form-label">
                    Choose Study Coordinator
                  </label>
                  <div className="multi-select-container">
                    <p className="multi-select-title">Study Co-ordinator</p>
                    {coordinators.map((coordinator) => (
                      <div key={coordinator.id}>
                        <input
                          className="radio"
                          type="radio"
                          value={coordinator.firstName}
                          name={`option${coordinator.id}`} // Unique name for each radio option
                          checked={studyCoordinator === coordinator.firstName}
                          onChange={handleStudyCoordinatorChange}
                        />
                        {coordinator.firstName}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="clinical-input-field-wrapper contact">
                  <label className="clinical-form-label">
                    Choose Participants
                  </label>
                  <div className="multi-select-container">
                    <p className="multi-select-title">Participants</p>
                    <div className="multi-select-wrapper">
                      {participants.map((participant) => (
                        <div key={participant}>
                          <input
                            className="ckbox"
                            type="checkbox"
                            value={participant}
                            name={participant}
                            checked={clinicalParticipants[participant] || false}
                            onChange={handleClinicalParticipantsSelection}
                          />
                          {participant}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  className="clinical-form-button clinical-btn-cancel"
                  onClick={cancelHandler}
                >
                  Cancel
                </button>
                <button
                  className="clinical-form-button clinical-btn-submit"
                  onClick={clinicalDataHandler}
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="left-side-div">
              <div className="add-image-container">
                <FontAwesomeIcon
                  className="add-img"
                  icon={faImage}
                  style={{ color: "#1394f6" }}
                />
                <p className="img-text-title">Upload a picture</p>
                <p className="img-text">Supported file formats: .jpg, .png</p>
                <p className="img-text">Maximum file size: 2MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClinicalForm;
