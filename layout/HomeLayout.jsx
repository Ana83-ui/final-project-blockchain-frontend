import { useNavigate } from "react-router";
import React from "react";
import logo from "../src/assets/logo.jpg";

const HomeLayout = ({ children }) => {
  let navigate = useNavigate();

  const goToForm = () => {
    navigate("/login");
  };

  const goToHome = () => {
    navigate("/");
  };

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <div className="container-app">
      <div className="container-header">
        <div className="header">
          <div className="company">
            <img onClick={goToHome} src={logo} alt=" logo of company" className="logo of the company"/>
            <h1 onClick={goToHome} className="title-header"> TransactFlow </h1>
          </div>
          <p onClick={goToForm} className="sign"> Sign In</p>
        </div>
      </div>
      
      {children}

      <div className="container-footer">
        <div className="footer">
          <div className="company">
            <img onClick={goToHome} src={logo} alt=" logo of company" className="logo of the company"/>
            <h1>TransactFlow</h1>
          </div>
          <div className="copy">
            <span>Website created by &copy; Ana Molina </span>
          </div>
          <div className="contact">
            <span onClick={goToContact}>Contact Us!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
