export const LOGIN = "LOGIN";
export const UPDATE_LOGIN_USER = "UPDATE_LOGIN_USER";

export const userLogin = (userData) => {
  return {
    type: LOGIN,
    payload: userData,
  };
};

//inputHandler
export const updateLoginUser = (nameProp, valueProp) => {
  return {
    type: UPDATE_LOGIN_USER,
    payload: { name: nameProp, value: valueProp },
  };
};
