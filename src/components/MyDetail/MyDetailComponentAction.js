export const DETAIL_USER = "DETAIL_USER";
export const UPDATE_USER = "UPDATE_USER";

export const loadDetail = (userData) => {
  console.log("Dispatching user details:", userData);
  return {
    type: DETAIL_USER,
    payload: userData,
  };
};

// export const updateUser = (userData) => {
//   return {
//     type: UPDATE_USER,
//     payload: userData,
//   };
// };

// Acción de actualización
export const updateUser = (updatedUser) => {
  return {
    type: UPDATE_USER,
    payload: updatedUser
  };
};


