import { combineReducers } from "redux";
import { myProfileComponentReducer } from "../../../components/MyProfile/MyProfileComponentReducer";
import loginPageReducer from "../../../pages/LoginPage/LoginPageReducer";
import { transactionPageReducer } from "../../../pages/TransactionPage/TransactionPageReducer";
import myDetailComponentReducer from "../../../components/MyDetail/MyDetailComponentReducer";
import newTransactionComponentReducer from "../../../components/Transactions/NewTransactionComponentReducer";

const reducers = combineReducers({
  myProfileComponentReducer,
  loginPageReducer,
  transactionPageReducer,
  myDetailComponentReducer,
  newTransactionComponentReducer,
});

export default reducers;
