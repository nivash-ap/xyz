import React from "react";
import "./ClinicalDataCard.css";
import { useNavigate, Link } from "react-router-dom";
import bgImage from '../../assets/bg-clinical.jpg';

const ClinicalDataCard = ({ data }) => {
  const navigate = useNavigate();


  const cardStyle = {
    backgroundImage: `url(${bgImage})`,
  };

  const handleClick = () => {
    navigate(`/displayClinicalData/${data.id}`,{ state: { data } });
  };

  return (
    <div
      className="display-card-container"
      onClick={handleClick}
      data-testid="clinical-card-container"
    >
      <div className="clinical-card-content">
        <p className="clinical-card-title">{data.title}</p>
        <p className="extra-line">Lorem ipsum dolor sit amet, consectet elit <span className="extra-style">view details</span></p>
      </div>
    </div>
  );
};

export default ClinicalDataCard;
