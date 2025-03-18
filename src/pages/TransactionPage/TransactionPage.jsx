import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransaction, setUser } from "./TransactionPageAction";
import { getTransactionById } from "../../core/services/fetchTransaction";
import { useNavigate } from "react-router";
import { fetchAllTransaction } from "../../core/services/fetchTransaction";

const TransactionPage = () => {
  const { transactions, user } = useSelector(
    (state) => state.transactionPageReducer
  );
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const transactionsAll = async () => {
    const result = await fetchAllTransaction();
    dispatch(getTransaction(result));
  };

  useEffect(() => {
    transactionsAll();
  }, [user]);

  const goToDetailTransaction = () => {
    navigate("/transaction",{
      state: {transactions}
    });
  };


  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };


  return (
    <div>
      <h1>My transactions history</h1>
      {transactions && transactions.length > 0 ? (
        transactions.map((t, idx) => {
          return (
            <div key={idx}>
              <div>
                <span>Date: </span>
                <span>{formatDate(t.timestamp)}</span>
              </div>
              <div>
                <span>To: </span>
                <span>{t.receiver.email}</span>
              </div>
              <div>
                <span>Amount: </span>
                <span>{t.amount} €</span>
              </div>

              <button
                onClick={() => {
                  goToDetailTransaction(t.transactions);
                }}
              >
                Details
              </button>
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
