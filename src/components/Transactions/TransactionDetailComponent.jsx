  import React, { useEffect, useState } from "react";
  import { useLocation, useNavigate } from "react-router";
  import { deleteTransactionById } from "../../core/services/fetchTransaction";

  const TransactionDetailComponent = () => {
    let navigate = useNavigate();

    const location = useLocation();
    const { state } = location;
    const { transaction } = state || {};

    const deleteTransaction = async (_id) => {
      const response = await deleteTransactionById(_id);
      if (response) {
        alert("Transaction deleted from history")
        navigate("/profile");
      } else {
        console.log("Error deleting transaction");
      }
    };

    return (
      <div>
        <h2>Details of the transaction</h2>

        {transaction ? (
          <div>
            <div>
              <span>Id:</span>
              <span>{transaction._id}</span>
            </div>
            <div>
              <span>Sender:</span>
              <span>{transaction.sender}</span>
            </div>
            <div>
              <span>Receiver:</span>
              <span>{transaction.receiver}</span>
            </div>
            <div>
              <span>Amount:</span>
              <span>{transaction.amount}</span>
            </div>
            <div>
              <span>Date:</span>
              <span>{transaction.timestamp}</span>
            </div>
            <div>
              <span>Status:</span>
              <span>{transaction.status}</span>
            </div>
          </div>
        ) : (
          <p>Loading transaction details...</p>
        )}

        <div>
          <button onClick={() => { deleteTransaction(transaction._id);}}>Remove</button>
          <button onClick={() => { navigate("/profile");}}>Close</button>
        </div>
      </div>
    );
  };

  export default TransactionDetailComponent;
