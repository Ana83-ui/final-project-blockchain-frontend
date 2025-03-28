import { DETAIL_USER, UPDATE_USER, UPDATE_BALANCE} from "./MyDetailComponentAction";

const initialState = {
  userDetail: {},
   

};

export const myDetailComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_USER:
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

export default myDetailComponentReducer;
