import { DETAIL_USER_PROFILE, UPDATE_USER, updateUser } from "./MyProfileComponentAction";

const initialState = {
  userDetail: null,

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
          userDetail: action.payload
        };
    default:
      return state;
  }
};

export default myProfileComponentReducer;
