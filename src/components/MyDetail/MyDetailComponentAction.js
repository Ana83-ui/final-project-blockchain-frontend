export const DETAIL_USER = "DETAIL_USER";
export const UPDATE_USER = "UPDATE_USER";

export const loadDetail = (user) => {
  console.log("Dispatching user details:", user); 
  return {
    type: DETAIL_USER,
    payload: user,
  };
};

export const updateUser = (userData) => {
  return {
    type: UPDATE_USER,
    payload: userData,
  };
};
