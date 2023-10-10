import "./Sidenav.css";
import clinLogo from "../../assets/na-clin1.png";
import analLogo from "../../assets/na-anal.png";
import messLogo from "../../assets/na-mess.png";
import partLogo from "../../assets/na-parti.png";
import studLogo from "../../assets/na-stud.png";
import tickLogo from "../../assets/na-tick1.png";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <>
      <nav className="nav flex-column left-move">
        <Link
          to={"/clinical"}
          className="nav-link a-style"
          aria-current="page"
          href="#"
        >
          <img className="logonav " src={clinLogo} alt="--"></img>
          Clinical Trail Program
        </Link>
        <a className="nav-link a-style" href="#">
          <img className="logonav " src={analLogo} alt="--"></img>
          Analytics
        </a>
        <Link to={"/studentCoordinator"} className="nav-link a-style" href="#">
          <img className="logonav " src={studLogo} alt="--"></img>
          Study coordinators
        </Link>
        <a className="nav-link a-style" href="#">
          <img className="logonav " src={partLogo} alt="--"></img>
          Participants
        </a>
        <a className="nav-link a-style" href="#">
          <img className="logonav " src={messLogo} alt="--"></img>
          Messages
        </a>
        <a className="nav-link a-style" href="#">
          <img className="logonav " src={tickLogo} alt="--"></img>
          Ticket Management
        </a>
      </nav>
    </>
  );
};

export default Sidenav;
