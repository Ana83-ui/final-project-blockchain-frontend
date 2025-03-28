import {  DETAIL_USER_PROFILE,  UPDATE_USER, UPDATE_BALANCE} from "./MyProfileComponentAction";

const initialState = {
  userDetail: {},
};

export const myProfileComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_USER_PROFILE:
      return {
        ...state,
        userDetail: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        userDetail: action.payload,
      };
      case UPDATE_BALANCE:
        return {
          ...state,
          userDetail: {
            ...state.userDetail,
            balance: action.payload,
          },
        }; 
    default:
      return state;
  }
};

export default myProfileComponentReducer;
