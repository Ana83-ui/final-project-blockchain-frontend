export const DETAIL_TRANSACTIONS = "ALL_TRANSACTIONS";
// export const SET_USER = "SET_USER";

export const getTransactionByUser = (transactions) => {
  return {
    type: DETAIL_TRANSACTIONS,
    payload: transactions,
  };
};

// export const setUser = (user) => {
//   return {
//     type: SET_USER,
//     payload: user,
//   };
// };
