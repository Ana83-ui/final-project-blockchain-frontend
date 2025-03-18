import React from 'react'
import { useNavigate } from "react-router";
import {addNewTransaction} from "../../core/services/fetchTransaction"
import { addItemTransaction } from './NewTransactionComponentAction';
import { useState } from 'react';
import { useDispatch } from "react-redux";

const NewTransactionComponent = () => {
    const dispatch = useDispatch()
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
        if (!newTransaction.sender || !newTransaction.receiver || !newTransaction.amount) {
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
          alert("Transaction send")
          navigate("/profile");
        } else {
          console.log("Error al agregar el producto");
        }
      };






  return (
    <div>
      <h1>New transaction</h1>
      <div>
        <span>Sender: </span>
        <input type="text" placeholder='Enter your email address' value={setNewTransaction.sender} name="sender" onChange={(e)=>inputHandler(e.target.name, e.target.value)} />
      </div>
      <div>
        <span>Receiver: </span>
        <input type="text" placeholder='Enter the recipient’s email' value={setNewTransaction.receiver} name="receiver" onChange={(e)=>inputHandler(e.target.name, e.target.value)} />
      </div>
      <div>
        <span>Amount: </span>
        <input type="text" placeholder='Amount to sent' value={setNewTransaction.amount} name="amount" onChange={(e)=>inputHandler(e.target.name, e.target.value)} />
      </div>
      <div>
        <button onClick={addTransaction} >Send</button>
        <button onClick={backToUserProfile} >Cancel</button>
      </div>
    </div>
  )
}

export default NewTransactionComponent
