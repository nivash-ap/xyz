import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Sidenav from "../Sidenav/Sidenav";
import "./AddStudentCoordinator.css";
import userAvatar from "../../assets/user-avatar.png";
import { useNavigate, useLocation } from "react-router-dom";
import Select from "react-select";

// import TextField from '@mui/material/TextField';

const AddStudentCoordinator = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { coordinator } = location.state || {};
  const currentDate = new Date();
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 30);
  // Initialize initialFormData with default values
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    age: "",
    occupation: "",
    status: true,
    creationDate: getFormattedDate(currentDate),
    expiryDate: getFormattedDate(expiryDate),
  };

  // Set the formData state based on coordinator data if available
  const [formData, setFormData] = useState(
    coordinator ? { ...initialFormData, ...coordinator } : initialFormData
  );
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    age: "",
    occupation: "",
  });

  function getFormattedDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  // Function to update form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to update form errors
  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    const errors = {};

    if (!value.trim() || value === "") {
      errors[name] = `Please enter a valid ${name}`;
    } else {
      errors[name] = "";
    }

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      ...errors,
    }));
  };
  const cancelHandler = () => {
    navigate("/studentCoordinator");
  };
  const addStudentCoordinatorHandler = async (e) => {
    e.preventDefault();

    try {
      let response;

      if (coordinator) {
        // If coordinator exists, send a PUT request to update the existing coordinator
        response = await fetch(
          `http://localhost:3001/studentCoordinators/${coordinator.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
      } else {
        // If coordinator is not provided, send a POST request to create a new coordinator
        response = await fetch("http://localhost:3001/studentCoordinators", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      }

      if (response.ok) {
        // Success
        if (coordinator) {
          alert("student coordinator successfully updated.");
        } else {
          alert("student coordinator successfully added.");
        }
        navigate("/studentCoordinator");
      } else {
        // Handle error
      }
    } catch (error) {
      alert("Error occurred: " + error);
    }
  };

  return (
    <>
      <Header />

      <div className="row">
        <div className="side">
          <Sidenav />
        </div>
        <div className="main">
          <header className="student-coordinator-page-header">
            <div className="page-header">
              {coordinator ? (
                <p className="new-head-text">Edit Student Coordinator</p>
              ) : (
                <p className="new-head-text">Add New Student Coordinator</p>
              )}
            </div>
          </header>
          <div className="form-card">
            <div>
              <div>
                <img className="avatar" src={userAvatar} alt="Avatar"></img>
              </div>
              <p className="add-student-coordinator-details">
                PERSONAL DETAILS
              </p>
              <div className="coordinator-details-wrapper">
                <div className="input-field-wrapper">
                  <label className="add-student-coordinator-label">
                    First Name
                  </label>
                  <input
                    className={`new-coordinator-input p-2 pt-3 pb-3 ${
                      formErrors.firstName ? "error-new-coordinator-input" : ""
                    }`}
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name.."
                    value={formData["firstName"]}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    required
                  ></input>
                  {formErrors.firstName && (
                    <div className="error-text" style={{ color: "red" }}>
                      {formErrors.firstName}
                    </div>
                  )}
                </div>
                <div className="input-field-wrapper">
                  <label className="add-student-coordinator-label">
                    Last Name
                  </label>
                  <input
                    className={`new-coordinator-input p-2 pt-3 pb-3 ${
                      formErrors.lastName ? "error-new-coordinator-input" : ""
                    }`}
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name.."
                    value={formData["lastName"]}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    required
                  ></input>
                  {formErrors.lastName && (
                    <div className="error-text" style={{ color: "red" }}>
                      {formErrors.lastName}
                    </div>
                  )}
                </div>
                <div className="input-field-wrapper">
                  <label className="add-student-coordinator-label">Email</label>
                  <input
                    className={`new-coordinator-input p-2 pt-3 pb-3 ${
                      formErrors.email ? "error-new-coordinator-input" : ""
                    }`}
                    type="email"
                    name="email"
                    placeholder="Enter your email.."
                    value={formData["email"]}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    required
                  ></input>
                  {formErrors.email && (
                    <div className="error-text" style={{ color: "red" }}>
                      {formErrors.email}
                    </div>
                  )}
                </div>
                <div className="input-field-wrapper">
                  <label className="add-student-coordinator-label">
                    Phone Number
                  </label>
                  <input
                    className={`new-coordinator-input p-2 pt-3 pb-3 ${
                      formErrors.phoneNumber
                        ? "error-new-coordinator-input"
                        : ""
                    }`}
                    type="tel"
                    name="phoneNumber"
                    placeholder="Enter your phone number.."
                    value={formData["phoneNumber"]}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    required
                  ></input>
                  {formErrors.phoneNumber && (
                    <div className="error-text">{formErrors.phoneNumber}</div>
                  )}
                </div>
                <div className="input-field-wrapper">
                  <label className="add-student-coordinator-label">
                    Address
                  </label>
                  <input
                    className={`new-coordinator-input p-2 pt-3 pb-3 ${
                      formErrors.address ? "error-new-coordinator-input" : ""
                    }`}
                    type="text"
                    name="address"
                    placeholder="Enter your address.."
                    value={formData["address"]}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    required
                  ></input>
                  {formErrors.address && (
                    <div className="error-text" style={{ color: "red" }}>
                      {formErrors.address}
                    </div>
                  )}
                </div>
                <div className="input-field-wrapper">
                  <label className="add-student-coordinator-label">City</label>
                  <input
                    className={`new-coordinator-input p-2 pt-3 pb-3 ${
                      formErrors.city ? "error-new-coordinator-input" : ""
                    }`}
                    type="text"
                    name="city"
                    placeholder="Enter your city.."
                    value={formData["city"]}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    required
                  ></input>
                  {formErrors.city && (
                    <div className="error-text" style={{ color: "red" }}>
                      {formErrors.city}
                    </div>
                  )}
                </div>

                <div className="input-field-wrapper">
                  <label className="add-student-coordinator-label">State</label>
                  <input
                    className={`new-coordinator-input p-2 pt-3 pb-3 ${
                      formErrors.state ? "error-new-coordinator-input" : ""
                    }`}
                    type="text"
                    name="state"
                    placeholder="Enter your state.."
                    value={formData["state"]}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    required
                  ></input>
                  {formErrors.state && (
                    <div className="error-text" style={{ color: "red" }}>
                      {formErrors.state}
                    </div>
                  )}
                </div>

                <div className="input-field-wrapper">
                  <label className="add-student-coordinator-label">
                    Pin Code
                  </label>
                  <input
                    className={`new-coordinator-input p-2 pt-3 pb-3 ${
                      formErrors.pincode ? "error-new-coordinator-input" : ""
                    }`}
                    type="number"
                    name="pincode"
                    placeholder="Enter your pincode.."
                    value={formData["pincode"]}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    required
                  ></input>
                  {formErrors.pincode && (
                    <div className="error-text" style={{ color: "red" }}>
                      {formErrors.pincode}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <p className="add-student-coordinator-details">
              ADDITIONAL DETAILS
            </p>
            <div className="coordinator-details-wrapper row-cols-2">
              <div className="input-field-wrapper">
                <label className="add-student-coordinator-label">Age</label>
                <select
                  className={`new-coordinator-input p-2 pt-3 pb-3 ${
                    formErrors.age ? "error-new-coordinator-input" : ""
                  }`}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  required
                  name="age"
                >
                  <option value="" default>
                    Choose Age
                  </option>
                  <option
                    value="Between 18-24"
                    selected={formData.age === "Between 18-24"}
                  >
                    Between 18-24
                  </option>
                  <option
                    value="Between 25-40"
                    selected={formData.age === "Between 25-40"}
                  >
                    Between 25-40
                  </option>
                  <option
                    value="Between 41-60"
                    selected={formData.age === "Between 41-60"}
                  >
                    Between 41-60
                  </option>
                </select>
                {formErrors.age && (
                  <div className="error-text">{formErrors.age}</div>
                )}
              </div>
              <div className="input-field-wrapper">
                <label className="add-student-coordinator-label">
                  Occupation
                </label>
                <select
                  className={`new-coordinator-input p-2 pt-3 pb-3 ${
                    formErrors.occupation ? "error-new-coordinator-input" : ""
                  }`}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  name="occupation"
                  required
                >
                  <option value="" default>
                    Choose Occupation
                  </option>
                  <option
                    value="Business"
                    selected={formData.occupation === "Business"}
                  >
                    Business
                  </option>
                  <option
                    value="Education"
                    selected={formData.occupation === "Education"}
                  >
                    Education
                  </option>
                </select>
                {formErrors.occupation && (
                  <div className="error-text">{formErrors.occupation}</div>
                )}
              </div>
            </div>
            <div className="student-form-buttons">
              <button
                className="student-coordinator-button student-coordinator-btn-cancel"
                onClick={cancelHandler}
              >
                Cancel
              </button>
              <button
                className="student-coordinator-button student-coordinator-btn-submit"
                onClick={addStudentCoordinatorHandler}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddStudentCoordinator;
