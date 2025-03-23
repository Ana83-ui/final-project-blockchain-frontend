import React from "react";
import sean from "../../assets/sean.jpg"

const HomePage = () => {
  return (
    <div className="container-main">
      <div className="presentation-home">
        <h1 className="title-home">A reliable space for your transfers</h1>
        <h3>Welcome to TransactSecure, where the security of your transactions is our priority. With cutting-edge technology and a team of specialists, we offer you continuous protection without interruptions, guaranteeing maximum safety in every operation.</h3>
        <h2>Join millions of users who already trust TransferSecure to conduct their operations with complete peace of mind.</h2>
      </div>
      <div>
        <img src={sean} alt="" className="img-home"/>
      </div>
    
    </div>
  );
};

export default HomePage;
