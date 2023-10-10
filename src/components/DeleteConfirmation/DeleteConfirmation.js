import React from "react";
import "./DeleteConfirmation.css";
import CoordinatorCard from "../CoordinatorCard/CoordinatorCard";

const DeleteConfirmation = ({onCancel, onDelete}) => {
  return (
    <>
      <div className="delete-container">
        <p className="head-message">
          Are you sure you want to delete this record?
        </p>
        <p className="body-message">
          Deleting the record will remove all the data associated permanently!
        </p>

        <div className="btn-container">
          <button className="btn-cancel" onClick={onCancel}>Cancel</button>
          <button className="btn-delete" onClick={onDelete}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default DeleteConfirmation;
