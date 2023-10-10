import "./Signin.css";
import elxsiLogo from "../../assets/elxsilogo1.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState(false);
  const [err, setErr] = useState({ uName: "", pwd: "" });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    // console.log(loginData.username.length);
    if (loginData.username.length === 0 || loginData.password.length === 0) {
      let uName = loginData.username.length === 0 ? "Enter valid username" : "";
      let pwd = loginData.password.length === 0 ? "Enter valid password" : "";
      const error = {
        uName: uName,
        pwd: pwd,
      };
      setErr(error);
    } else {
      e.preventDefault();

      const { username, password } = loginData;

      try {
        const response = await fetch(
          "http://localhost:3001/users" 
        );

        if (!response.ok) {
          throw new Error("Failed to fetch JSON data");
        }

        const usersList = await response.json();
        // console.log(usersList);

        // Check if the API response contains the expected 'users' array
        if (!usersList) {
          throw new Error("users list is empty.");
        }

        let userFound = false;
        usersList.forEach((user) => {
          if (user.username === username && user.password === password) {
            userFound = true;
          }
        });

        if (userFound) {
          setLoginError(false);
          navigate("/home");
          
        } else {
          alert("Invalid credentials");
          setLoginError(true);
        }
      } catch (error) {
        console.error("Error fetching JSON:", error);
      }
    }
  };

  

  return (
    <div className="sigin-wrapper card">
      <div className="headdiv ">
        <nav className="d-flex jusify-content-around navbar">
          <h3 className="signin-text">Sign In</h3>

          <img className="logo" src={elxsiLogo} alt="Tata Elxsi logo"></img>
        </nav>
      </div>
      <div className="footerdiv">
        <p className="Weltext">Welcome back! Please login to your account.</p>
        <div className="mb-3">
          <label htmlFor="mail" className="label">
            Email
          </label>
          <input
            type="email" 
            id="mail"
            name="username"
            value={loginData.username}
            onChange={handleInputChange}
            className={err.uName ? "form-control errInp" : "form-control err"}
            pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2}$"
            placeholder="username@gmail.com"
          />
          {err.uName && <p style={{ color: "red" }}>{err.uName}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className={err.pwd ? "form-control errInp" : "form-control inp"}
            value={loginData.password}
            onChange={handleInputChange}
            placeholder="Password"
          />
          {err.pwd && <p style={{ color: "red" }}>{err.pwd}</p>}
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox signin-remeber-me-wrapper">
            <input
              type="checkbox"
              className="custom-control-input inp"
              id="signinRemeberMeOption"
            />
            <label
              className="custom-control-label remtext"
              htmlFor="signinRemeberMeOption"
            >
              Remember me
            </label>
          </div>
        </div>

        <div className="signin-btn-wrapper">
          <button
            data-testid = "signin-button"
            type="submit"
            className="btn btn-primary btn-lg button-style signin-submit"
            onClick={handleSubmit}
            // onClick={notify}
          >
            Sign In
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Signin;
