import { DETAIL_TRANSACTIONS } from "./TransactionPageAction";

const initialState = {
  transactions: {},
  userId: null,
  user: null,
};

export const transactionPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    // case SET_USER:
    //   return {
    //     ...state,
    //     user: action.payload,
    //     userId: action.payload?._id,
    //   };
    default:
      return state;
  }
};

export default transactionPageReducer;
