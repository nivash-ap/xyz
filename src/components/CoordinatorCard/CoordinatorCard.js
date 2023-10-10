import React, {useState} from "react";
import userAvatar from "../../assets/user-avatar.png";
import "./CoordinatorCard.css";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import DeleteConfirmation from "../DeleteConfirmation/DeleteConfirmation";

const CoordinatorCard = ({ coordinator, setCurrentPageCoordinators }) => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const showDeleteConfirmation = () => {
    setShowConfirmation(true);
  }
  const hideDeleteConfirmation = () => {
    setShowConfirmation(false);
  }

  async function fetchCoordinators() {
    try {
      const response = await fetch("http://localhost:3001/studentCoordinators");
      const data = await response.json();
      setCurrentPageCoordinators(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const editCoordinatorHandler = () => {
    navigate("/editStudentCoordinator", { state: { coordinator } });
  };

  const deleteCoordinatorHandler = async () => {
    // alert("Are you sure to delete!!");
    try {
      const response = await fetch(
        `http://localhost:3001/studentCoordinators/${coordinator.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        fetchCoordinators();
        console.log("Data deleted successfully");
      } else {
        console.log("Error deleting data");
      }
    } catch (error) {
      console.log("Error deleting data", error);
    }

    hideDeleteConfirmation();
  };

  return (
    <div className="coordinator-card-wrapper">
      <div className="coordinator-profile-wrapper">
        <img
          className="coordinator-profile"
          src={userAvatar}
          alt="Coordinator-Profile"
        ></img>
      </div>

      <div className="coordinator-name-wrapper">
        <div className="coordinator-name">{coordinator.firstName}</div>
        <div className="coordinator-id">Coordinator ID#{coordinator.id}</div>
      </div>

      <div className="coordinator-creation-date">
        {coordinator.creationDate}
      </div>

      <div className="coordinator-expiry-date">{coordinator.expiryDate}</div>

      <div className="coordinator-status">
        <button
          className={`coordinator-status-btn ${
            coordinator.status ? "active" : "inactive"
          }`}
        >
          {coordinator.status ? "Active" : "Inactive"}
        </button>
      </div>

      <div className="coordinator-email">{coordinator.email}</div>

      <div className="coordinator-action-btns-wrapper">
        <div
          className="coordinator-edit-btn-wrapper"
          onClick={editCoordinatorHandler}
        >
          <FontAwesomeIcon
            icon={faPen}
            style={{ color: "#287ad2" }}
            className="fa-icon"
          />
        </div>
        <div
          className="coordinator-delete-btn-wrapper"
          // onClick={deleteCoordinatorHandler}
          onClick = {showDeleteConfirmation}
        >
          <FontAwesomeIcon
            icon={faTrashCan}
            style={{ color: "#ff0000" }}
            className="fa-icon"
          />
        </div>

        {showConfirmation && ( <DeleteConfirmation onCancel={hideDeleteConfirmation} onDelete={deleteCoordinatorHandler} /> )}
      </div>
    </div>
  );
};

export default CoordinatorCard;
