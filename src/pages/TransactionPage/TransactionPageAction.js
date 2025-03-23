export const DETAIL_TRANSACTIONS = "ALL_TRANSACTIONS";

export const getTransactionByUser = (transactions) => {
  return {
    type: DETAIL_TRANSACTIONS,
    payload: transactions,
  };
};

