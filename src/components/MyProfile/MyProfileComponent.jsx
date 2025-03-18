import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { detailUser } from "./MyProfileComponentAction";
import TransactionPage from "../../pages/TransactionPage/TransactionPage";

const MyProfileComponent = () => {
  const userDetail = useSelector(
    (state) => state.myProfileComponentReducer.userDetail
  );
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

  const goToDetailUser = () => {
    navigate("/details",);
  };

  const goToNewTransaction = () => {
    navigate("/transactions");
  };

  return (
    <div>
      <hr />
      {userDetail ? (
        <div>
          <div>
            {/* <MyProfileComponent /> */}
          <form id="upload-form" encType="multipart/form-data">
  <input type="file" name="photo" id="photo" accept="image/*" />
  <button type="submit">Upload Photo</button>
</form>

          </div>
          <h2>Welcome to your profile, {userDetail.username}!</h2>
          <span>{userDetail.photo}</span>
          <div>My balance: {userDetail.balance}</div>
        </div>
      ) : (
        <div>User not found</div>
      )}
      <hr />
      <div>
        <button onClick={goToDetailUser}>Modify profile</button>
      </div>
      <hr />
      <div>
        <button onClick={goToNewTransaction}>New Transaction</button>
      </div>

      <div>
        <TransactionPage />
      </div>
    </div>
  );
};

export default MyProfileComponent;
