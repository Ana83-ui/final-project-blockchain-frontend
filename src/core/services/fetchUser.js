export const getDetailsUser = async (_id) => {
  const token = localStorage.getItem("token");
  console.log("Token:", token); // Verifica que el token sea correcto y esté disponible
  
  const response = await fetch(`http://localhost:3000/api/users/${_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });
  
};


//login
export const loginUser = async (email, password) => {
  const res = await fetch("http://localhost:3000/api/login/", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const result = await res.json();

  if(res.ok){
    const {token, user} = result;
  
    localStorage.removeItem("token");


    localStorage.setItem("token", token);
    console.log(token);

    if(user){
      localStorage.setItem("user", JSON.stringify(user))
      console.log(user)
    }
  }

  return result;
};

// nuevo registro
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
    throw new Error(result.message || 'Something went wrong');
  }

  return result;
};

//modificar usuario
export const editUser = async (_id, updateUser) => {
  const token = localStorage.getItem("token");  
  console.log("Token:", token); 
  if (!token) {
    console.log("No token found, user might not be logged in");
    return { error: "Unauthorized" }; 
  }

  const res = await fetch(`http://localhost:3000/api/users/${_id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token.trim()}`,
    },
    body: JSON.stringify(updateUser),
  });
  const result = await res.json();
  return result;
};

//obtener todos los usuarios
export const fetchAllUsers = async () => {
  const res = await fetch("http://localhost:3000/api/users")
  //   , {
  //   method: "GET",
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  //   body: JSON.stringify(),
  // });
  const result = await res.json();
  return result;
};


