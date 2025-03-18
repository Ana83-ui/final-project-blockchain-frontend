export const ADD_TRANSACTION = "ADD_TRANSACTION";

export const addItemTransaction = (transaction) => {
    return {
      type: ADD_TRANSACTION,
      payload: transaction,
    };
  };