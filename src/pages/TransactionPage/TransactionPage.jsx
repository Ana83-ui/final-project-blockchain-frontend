import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactionByUser } from "./TransactionPageAction";
import { getTransactionById } from "../../core/services/fetchTransaction";
import { useNavigate } from "react-router";

const TransactionPage = () => {
  const { transactions } = useSelector((state) => state.transactionPageReducer);
  
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const transactionsAll = async () => {
    const result = await getTransactionById();
    if (result && result.length > 0) {
      dispatch(getTransactionByUser(result));
    } else {
      dispatch(getTransactionByUser([]));
    }
  };

  useEffect(() => {
    transactionsAll();
  }, []);

  const goToDetailTransaction = (transaction) => {
    const receiverEmail = transaction.receiver?.email;
    if(!receiverEmail){
      alert ("Receiver not found")
      navigate("/profile")
    } else{
     navigate("/transaction", {
      state: { transaction },
    }); 
    }
    
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="container-transaction">
      <h1 className="title-transaction">My transactions history</h1>
      {transactions && transactions.length > 0 ? (
        transactions.map((t, idx) => {  

        const receiverEmail = t.receiver?.email || "Unknown receiver";
        
          return (
            <div key={idx} className="transaction-card, div-with-line">
              <div>
                <span>Date: </span>
                <span>{formatDate(t.timestamp)}</span>
              </div>
              <div>
                <span>{receiverEmail}</span>
              </div>
              <div>
                <span>Amount: </span>
                <span>{t.amount} €</span>
              </div>

              <button onClick={() => {goToDetailTransaction(t);}} className="btn-go" >+ Info</button>
       
            </div>
          );
        })
      ) : (
        <p>No transactions found</p>
      )}
    </div>
  );
};

export default TransactionPage;
