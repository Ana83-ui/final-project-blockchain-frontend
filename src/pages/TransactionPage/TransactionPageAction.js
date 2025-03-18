export const ALL_TRANSACTIONS = "ALL_TRANSACTIONS";
export const SET_USER = "SET_USER"

export const getTransaction = (transactions) => {
  return {
    type: ALL_TRANSACTIONS,
    payload: transactions,
  };
};

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  };
};
