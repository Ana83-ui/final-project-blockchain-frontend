import { DETAIL_TRANSACTIONS } from "./TransactionPageAction";

const initialState = {
  transactions: {},
};

export const transactionPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    default:
      return state;
  }
};

export default transactionPageReducer;
