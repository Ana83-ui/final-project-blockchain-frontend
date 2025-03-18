export const fetchAllTransaction = async () => {
  const response = await fetch("http://localhost:3000/api/transactions");
  if (!response.ok) {
    throw new Error("Error fetching transactions");
  }
  const data = await response.json();
  return data.transactions;
};

export const getTransactionById = async () => {

  const token = localStorage.getItem("token");
  if (!token) {
    console.error("No token found. Please log in.");
    return null;
  }

  const userId = JSON.parse(localStorage.getItem("user"))?._id;
  if (!userId) {
    console.error("No user ID found. Please log in.");
    return;
  }

  const res = await fetch(`http://localhost:3000/api/transaction/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, 
    },
  });
  const result = await res.json();

  if (res.ok) {
     console.log(result);
  } else {
    console.error("Error fetching transactions:", result);
  }
  return result;
};




export const deleteTransactionById = async (_id) => {
  const res = await fetch(`http://localhost:3000/api/transactions/${_id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
  const result = await res.json();
  return result;
};


export const getDetailTransaction = async (_id) => {
  const res = await fetch(`http://localhost:3000/api/transactions/${_id}`);
  const result = await res.json();
  return result;
};


export const addNewTransaction = async (transaction) => {
  const res = await fetch("http://localhost:3000/api/transactions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(transaction),
  });
  const result = await res.json();
  return result;
};