import { ADD_TRANSACTION } from "./NewTransactionComponentAction";

const initialState = {
  transaction: [],
};

export const newTransactionComponentReducer = ( state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transaction: [...state.transaction, action.payload],
      };

    default:
      return state;
  }
};

export default newTransactionComponentReducer;
