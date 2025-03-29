export const getDetailsUser = async (_id) => {
  const token = localStorage.getItem("token");
 
  const response = await fetch(`http://localhost:3000/api/users/${_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const loginUser = async (email, password) => {
  const res = await fetch("http://localhost:3000/api/login/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const result = await res.json();

  if (res.ok) {
    const { token, user } = result;
    localStorage.removeItem("token");
    localStorage.setItem("token", token);

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }
  return result;
};


export const registerNewUser = async (loginData) => {
  const res = await fetch("http://localhost:3000/api/signup", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  const result = await res.json();
  if (!res.ok) {
    throw new Error(result.message || "Something went wrong");
  }

  return result;
};


export const editUser = async (_id, updateUser) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return { error: "Unauthorized" };
  }

  const res = await fetch(`http://localhost:3000/api/users/${_id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token.trim()}`,
    },
    body: JSON.stringify(updateUser),
  });
  const result = await res.json();
  return result;
};


export const fetchAllUsers = async () => {
  const res = await fetch("http://localhost:3000/api/users");
  const result = await res.json();
  return result;
};


export const deleteUserById = async (_id) => {
  const res = await fetch(`http://localhost:3000/api/users/${_id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
  const result = await res.json();
  return result;
};



