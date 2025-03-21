import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLoginUser, userLogin } from "./LoginPageAction";
import { loginUser, registerNewUser } from "../../core/services/fetchUser";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const login = useSelector((state) => state.loginPageReducer.login);
  const [flagLogin, setFlagLogin] = useState(true);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const inputHandler = (nameProp, valueProp) => {
    dispatch(updateLoginUser(nameProp, valueProp));
  };

  // Manejo de login
  const loadedUser = async () => {
    if (!login.email || !login.password) {
      alert("Email or password is missing!");
      return;
    }
    try {
      const user = await loginUser(login.email, login.password);
      console.log("User from login:", user);
      if (user && user.user) {
        localStorage.setItem("token", user.token);
        localStorage.setItem("user", JSON.stringify(user.user));

        localStorage.setItem("token", user.token);
        localStorage.setItem("user", JSON.stringify(user.user));
        dispatch(
          userLogin({
            _id: user.user._id,
            balance: user.user.balance,
            email: user.user.email,
            username: user.user.username,
            photo: user.user.photo,
            token: user.token,
          })
        );
        navigate("/profile");
      } else {
        console.error("Invalid user data:", user);
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  useEffect(() => {
    console.log("Login data in Redux:", login);
  }, [login]);

  const clearFields = () => {
    dispatch(updateLoginUser("email", ""));
    dispatch(updateLoginUser("password", ""));
    dispatch(updateLoginUser("username", ""));
  };

  const registerUser = async () => {
    if (!login.email || !login.password) {
      alert("Email and password are required!");
      return;
    }
    try {
      const response = await registerNewUser(login);
     // Si la respuesta es exitosa, seguimos con el flujo
      clearFields();
      console.log("API Response:", response);
      setFlagLogin(true);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed", error);
      // Asegúrate de capturar correctamente el mensaje de error
      if (error.message === "Email already registered") {
        alert("The email is already in the database");
      } else {
        alert("The email is already in the database.");
      }
    }
  };

  const goToResetPassword = () => {
    navigate("/password");
  };

  const title = flagLogin ? "We are glad to see you again!" : "Thank you for joining us";

  return (
    <div className="container-access">
      <div>
        <h1>{title}</h1>
      </div>

      {!flagLogin && (
        <div className="input-form">
          <div className="username">
            <span>Username: </span>
            <input type="text" placeholder="Enter a username" name="username" value={login.username} onChange={(e) => inputHandler(e.target.name, e.target.value)}/>
          </div>
          <div>
            <span className="email">Email: </span>
            <input type="text" placeholder="Enter a valid email" name="email" value={login.email} onChange={(e) => inputHandler(e.target.name, e.target.value)}/>
          </div>
          <div className="password">
            <span>Password: </span>
            <input type="password" placeholder="Enter a password" name="password" value={login.password} onChange={(e) => inputHandler(e.target.name, e.target.value)}/>
          </div>
          <div>
            <button className="btn-register" onClick={registerUser}>Register</button>
          </div>
        </div>
      )}

      {flagLogin ? (
        <div className="container-form">
          <div className="input-form">
            <div className="email">
              <span>Email: </span>
              <input type="text" placeholder="Enter a valid email" name="email" value={login.email} onChange={(e) => inputHandler(e.target.name, e.target.value)}/>
            </div>
            <div className="password">
              <span>Password: </span>
              <input type="password" placeholder="Enter a password" name="password" value={login.password} onChange={(e) => inputHandler(e.target.name, e.target.value)}
              />
            </div>

            <div>
              {flagLogin ? (
                <div>
                  <button className="btn-go" onClick={loadedUser}>Login</button>
                  
                  <div className="register">
                    <div className="link">
                      <h3>Are you not registered yet?</h3>
                    <span className="register-access" onClick={() => setFlagLogin(false)}>Register</span>
                    </div>
                    <div className="link">
                    <h3>Forgot your password? </h3>
                    <p className="register-access" onClick={goToResetPassword}>Click here</p>
                  </div>
                    <div >
                    
                  </div>
                  
                  </div>
                  
                </div>
              ) : (
                <div>
                  <button onClick={registerUser}>Register</button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default LoginPage;
