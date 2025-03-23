export const DETAIL_USER_PROFILE = "DETAIL_USER_PROFILE";
export const UPDATE_USER = "UPDATE_USER";

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
