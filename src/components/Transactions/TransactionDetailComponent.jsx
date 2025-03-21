import { useLocation, useNavigate } from "react-router";
import { deleteTransactionById } from "../../core/services/fetchTransaction";
import dynamic from "../../assets/dynamic.jpg"

const TransactionDetailComponent = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { transaction } = state || {};

  const deleteTransaction = async (_id) => {
    const response = await deleteTransactionById(_id);
    if (response) {
      alert("Transaction deleted successfully from history");
      navigate("/profile");
    } else {
      console.log("Error deleting transaction");
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
    <div className="container-personal">
      <div>
        <img src={dynamic} alt="" />
      </div>
      <div>
          <h1>Details of the transaction</h1>

      {transaction ? (
        <div className="detail-transaction">
          <div>
            <span>Transaction Number: </span>
            <span>{transaction._id}</span>
          </div>
          <div>
            <span>Sender: </span>
            <span>{transaction.sender}</span>
          </div>
          <div>
            <span>Receiver: </span>
            <span>{transaction.receiver}</span>
          </div>
          <div>
            <span>Amount: </span>
            <span>{transaction.amount} €</span>
          </div>
          <div>
            <span>Date: </span>
            <span>{formatDate(transaction.timestamp)}</span>
          </div>
          <div>
            <span>Status: </span>
            <span>{transaction.status}</span>
          </div>
        </div>
      ) : (
        <p>Not transaction details available</p>
      )}

      <div className="btn-bis">
        <button onClick={() => { deleteTransaction(transaction._id);}} className="btn-submit">Remove</button>
        <button onClick={() => { navigate("/profile"); }} className="btn-submit" >Close</button>
      </div>
      </div>
    
    </div>
  );
};

export default TransactionDetailComponent;
