import { DETAIL_USER , UPDATE_USER} from "././MyDetailComponentAction";

const initialState = {
    userDetail: {},
    updateUser: null
}


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
          userDetail: {
            ...state.userDetail,
            ...action.payload.updatedUser,
          },
          
        };
      default:
        return state;
    }
  };
  
  export default myDetailComponentReducer;