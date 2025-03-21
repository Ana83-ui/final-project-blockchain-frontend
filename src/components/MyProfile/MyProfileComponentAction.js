export const DETAIL_USER_PROFILE = "DETAIL_USER_PROFILE";

export const detailUser = (userDetail) => {
  console.log("Dispatching user:", userDetail);
  return {
    type: DETAIL_USER_PROFILE,
    payload: userDetail,
  };
};
