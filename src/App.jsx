import "./App.css";
import { Provider } from "react-redux";
import store from "./core/redux/store/store";
import HomeLayout from "../layout/HomeLayout";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MyProfileComponent from "./components/MyProfile/MyProfileComponent";
import TransactionDetailComponent from "./components/Transactions/TransactionDetailComponent";
import MyDetailComponent from "./components/MyDetail/MyDetailComponent";
import NewTransactionComponent from "./components/Transactions/NewTransactionComponent";
import ChangePasswordComponent from "./components/Password/ChangePasswordComponent";
import ContactComponent from "./components/Contact/ContactComponent";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <HomeLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile" element={<MyProfileComponent />} />
              <Route path="/details" element={<MyDetailComponent />} />
              <Route path="/transaction" element={<TransactionDetailComponent />}/>
              <Route path="/transactions" element={<NewTransactionComponent />}/>
              <Route path="/password" element={<ChangePasswordComponent />} />
              <Route path="/contact" element={<ContactComponent />} />
            </Routes>
          </HomeLayout>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
