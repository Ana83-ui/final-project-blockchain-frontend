import { DETAIL_USER, UPDATE_USER } from "././MyDetailComponentAction";

const initialState = {
  userDetail: null,
  updateUser: {
  }
};

export const myDetailComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_USER:
      console.log("Details received:", action.payload); 
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

export default myDetailComponentReducer;
