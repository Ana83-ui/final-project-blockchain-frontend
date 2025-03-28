import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { detailUser, updateUserBalance } from "./MyProfileComponentAction";
import TransactionPage from "../../pages/TransactionPage/TransactionPage";
import { getUserBalance } from "../../core/services/fetchTransaction";


const MyProfileComponent = () => {
  const userDetail = useSelector(
    (state) => state.myProfileComponentReducer.userDetail
  );
  const [newUser, setNewUser] = useState();
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (userDetail) {
      setNewUser({
        photo: userDetail.photo || "",
        username: userDetail.username || "",
        email: userDetail.email || "",
        balance: userDetail.balance || "",
      });
    }
  }, [userDetail]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (token && user) {
      dispatch(detailUser(user));
    } else {
      console.log("No user or token found in localStorage");
    }
  }, [dispatch]);

  useEffect(() => {
    if (userDetail && userDetail.balance !== undefined && userDetail.balance !== balance) {
      setBalance(userDetail.balance);
      dispatch(updateUserBalance(userDetail.balance));
    }
  }, [userDetail, balance, dispatch]);


  const handleTransactionUpdate = async () => {
    if (userDetail) {
      const balanceUpdate = await getUserBalance(userDetail._id);
      dispatch(updateUserBalance(balanceUpdate));
      setBalance(balanceUpdate);
    }
  };

  const goToDetailUser = () => {
    navigate("/details");
  };

  const goToNewTransaction = () => {
    navigate("/transactions");
  };

  return (
    <div className="container-profile">
      {userDetail ? (
        <div>
          <div className="welcome-profile">
            <div className="photo">
              {userDetail.photo ? (
                <img
                  className="photo-profile"
                  src={`http://localhost:3000/${userDetail.photo}`}
                  alt="Add new profile photo"
                />
              ) : (
                <p>No profile photo</p>
              )}
              <h1 className="welcome-title">
                Welcome to your profile, {userDetail.username}!
              </h1>
            </div>

            <div>
              <button className="btn-submit" onClick={goToDetailUser}>
                {" "}
                Modify profile{" "}
              </button>
            </div>
          </div>
          <div className="balance">
            <h2 className="title-balance">
              {" "}
              My balance: {userDetail.balance} €{" "}
            </h2>
            <div>
              <button onClick={goToNewTransaction} className="btn-submit">
                {" "}
                New Transaction
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>User not found</div>
      )}

      <div>
        <TransactionPage onTransactionComplete={handleTransactionUpdate} />
      </div>
    </div>
  );
};

export default MyProfileComponent;
