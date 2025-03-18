import { LOGIN, UPDATE_LOGIN_USER } from "./LoginPageAction";

const initialState = {
  user: null,
  token: "",
  login: {
    email: "",
    password: "",
  },
};

const loginPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user, 
        token: action.payload.token || ""
      };
    case UPDATE_LOGIN_USER:
      return {
        ...state,
        login: {
          ...state.login,
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      return state;
  }
};

export default loginPageReducer;
