import { DETAIL_USER_PROFILE } from "./MyProfileComponentAction";

const initialState = {
  userDetail: {}
     
};

export const myProfileComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_USER_PROFILE:
      return {
        ...state,
        userDetail: action.payload
      };

    default:
      return state;
  }
};

export default myProfileComponentReducer
