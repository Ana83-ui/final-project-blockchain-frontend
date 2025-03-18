import { useNavigate } from "react-router";
import faceLogin from "../src/assets/face-login.svg";
import React from "react";

const HomeLayout = ({ children }) => {
  let navigate = useNavigate();
  const goToForm = () => {
    navigate("/login");
  };

  return (
    <div>
      <div>
        <h1>header</h1>
        <img onClick={goToForm} src={faceLogin} alt="login access emoticon" />
      </div>
      {children}
      <div>
        <h1>footer</h1>
      </div>
    </div>
  );
};

export default HomeLayout;
