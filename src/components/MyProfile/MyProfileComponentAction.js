export const DETAIL_USER_PROFILE = "DETAIL_USER_PROFILE";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_BALANCE = "UPDATE_BALANCE"

export const detailUser = (userDetail) => {
  console.log("Dispatching user:", userDetail);
  return {
    type: DETAIL_USER_PROFILE,
    payload: userDetail,
  };
};

export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};


export const updateUserBalance = (newBalance) => {
  return {
    type: UPDATE_BALANCE,
    payload: newBalance,
  };
};


