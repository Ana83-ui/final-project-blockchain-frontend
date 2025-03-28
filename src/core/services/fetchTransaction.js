
export const getTransactionById = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("No token found. Please log in.");
    return null;
  }
  const res = await fetch(`http://localhost:3000/api/transaction/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": token,
    },
  });
  const result = await res.json();

  if (res.ok) {
    console.log(result);
    return result.transactions;
  } else {
    console.error("Error fetching transactions:", result);
    return null;
  }
};

export const getDetailTransaction = async (_id) => {
  const res = await fetch(`http://localhost:3000/api/transactions/${_id}`);
  const result = await res.json();
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

export const addNewTransaction = async (transaction) => {
  const res = await fetch("http://localhost:3000/api/transactions", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(transaction),
  });
  const result = await res.json();
    return result;
};

export const getUserBalance = async (userId) =>{
  const res = await fetch(`http://localhost:3000/api/balance/${userId}`)
  if(!res.ok){
    throw new Error ("Error al obtener el balance")
  }
  const response = await res.json()
  return response.balance
}


