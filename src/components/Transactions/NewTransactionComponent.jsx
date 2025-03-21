import React from "react";
import { useNavigate } from "react-router";
import { addNewTransaction } from "../../core/services/fetchTransaction";
import { addItemTransaction } from "./NewTransactionComponentAction";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import denis from "../../assets/denis.jpg"


const NewTransactionComponent = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const backToUserProfile = () => {
    navigate("/profile");
  };

  const [newTransaction, setNewTransaction] = useState({
    sender: "",
    receiver: "",
    amount: "",
  });

  const inputHandler = (nameProp, valueProp) => {
    const createNewTransaction = { ...newTransaction, [nameProp]: valueProp };
    setNewTransaction(createNewTransaction);
  };

  const addTransaction = async () => {
    if (
      !newTransaction.sender ||
      !newTransaction.receiver ||
      !newTransaction.amount
    ) {
      alert("All fields ar required");
      return;
    }
    const transactionToAdd = {
      sender: newTransaction.sender,
      receiver: newTransaction.receiver,
      amount: parseInt(newTransaction.amount),
    };
    const response = await addNewTransaction(transactionToAdd);
    if (response) {
      dispatch(addItemTransaction(newTransaction));
      setNewTransaction({
        sender: "",
        receiver: "",
        amount: "",
      });
      alert("Transaction send");
      navigate("/profile");
    } else {
      console.log("Error sending the transaction");
    }
  };

  return (
    <div className="container-access">
      {/* <div>
        <img src={denis} alt="" />
      </div> */}
      <h1>Your new transaction starts here</h1>
      <div className="input-form"> 
        <div>
        <span className="sender">Sender: </span>
          <input type="text" placeholder="Enter your email address" value={setNewTransaction.sender} name="sender" onChange={(e) => inputHandler(e.target.name, e.target.value)}/>
      </div>
      <div>
        <span className="receiver">Receiver: </span>
        <input type="text" placeholder="Enter the recipient’s email" value={setNewTransaction.receiver} name="receiver" onChange={(e) => inputHandler(e.target.name, e.target.value)}/>
      </div>
      <div>
        <span className="amount">Amount: </span>
        <input type="text" placeholder="Amount to sent" value={setNewTransaction.amount} name="amount" onChange={(e) => inputHandler(e.target.name, e.target.value)}/>
      </div>
      <div className="btn-bis">
        <button onClick={addTransaction} className="btn-register">Send</button>
        <button onClick={backToUserProfile} className="btn-register" >Cancel</button>
      </div>
      </div>
      
    </div>
  );
};

export default NewTransactionComponent;
