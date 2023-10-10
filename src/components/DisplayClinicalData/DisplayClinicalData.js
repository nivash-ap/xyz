import React from "react";
import "./DisplayClinicalData.css";
import Header from "../Header/Header";
import Sidenav from "../Sidenav/Sidenav";
import Avatar from "../../assets/user-avatar.png";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

const DisplayClinicalData = () => {
  // const {clinicalParticipants} =props;
  const location = useLocation();
  const data = location.state?.data;
  const clinicalParticipantNames = Object.keys(data.clinicalParticipants);

  return (
    <>
      <Header />
      <div className="row">
        <div className="side">
          <Sidenav />
        </div>
        <div className="main3">
          <p className="display-page-header">{data.title}</p>
          <div className="clinical-datas-container">
            <div className="clinical-datas-wrapper">
              <div className="clinical-left-data">
                <p className="datas-title">Objective:</p>
                <div className="objective-content">
                  <p>{data.objective}</p>
                </div>
                <div>
                  <p>
                    <span className="datas-title">Point of Contact: </span>
                    {data.contact}
                  </p>
                  <p>
                    <span className="datas-title">Phone: </span>
                    {data.phNumber}
                  </p>
                </div>
              </div>
              <div className="clinical-right-data-img"></div>
            </div>
          </div>

          <div className="coordinator-details-head">
            <div className="datas-title coordinator-head">SR.</div>
            <div className="datas-title coordinator-head">
              STUDY COORDINATOR
            </div>
            <div className="datas-title coordinator-head">
              ASSIGNED PARTICIPANTS
            </div>
          </div>
          <div className="coordinator-details">
            <div className="coordinator-data">1</div>
            <div className="coordinator-data">{data.studyCoordinator}</div>
            <div className="coordinator-data">
              {clinicalParticipantNames.map((participantName, index) => (
                <div key={index}>{participantName}</div>
              ))}
            </div>
          </div>

          <div className="review-container">
            <p className="datas-title">REVIEWS AND RATINGS</p>
            <div className="review-wrapper">
              <div className="review-left-side">
                <img className="reviewer-image" src={Avatar} alt="Avatar"></img>
              </div>
              <div className="review-right-side">
                <p className="reviewer-name">Max Raj</p>
                <p className="review-date"> Tue, 23 August 2023</p>
                <div className="star-wrapper">
                  <FontAwesomeIcon icon={faStar} style={{ color: "#ffc700" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#ffc700" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#ffc700" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#ffc700" }} />
                </div>
                <p className="review-comments">
                  Lorem ipsum dolor sit amet arcu officiis per adipisci
                  abhorreant mauris mauris aliquam adipisci abhorreant mauris
                  mauris aliquam rhoncus rhoncus penatibus aenean et te nec eu
                  takimata dicta nec impedit ut eos ius.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayClinicalData;
