import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserById, editUser } from "../../core/services/fetchUser";
import { loadDetail, updateUser } from "./MyDetailComponentAction";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import MyPhotoComponent from "../MyProfile/MyPhotoComponent";
import lachlan from "../../assets/lachlan.jpg"


const MyDetailComponent = () => {
 const userDetail = useSelector((state) => state.myProfileComponentReducer.userDetail);
const [balance, setBalance] = useState()
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [newUser, setNewUser] = useState({
    photo: "",
    username: "",
    email: "",
    balance: "",
  });

  const backToUserProfile = () => {
    navigate("/profile");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (token && user) {
      dispatch(loadDetail(user));
    } else {
      console.log("No user or token found in localStorage");
    }
  }, [dispatch]);

  useEffect(() => {
    if (userDetail) {
      setNewUser({
        photo: userDetail.photo || "",
        username: userDetail.username || "",
        email: userDetail.email || "",
        balance: userDetail.balance || "",
      });
    }
  }, [userDetail]);

  useEffect(() => {
    if(userDetail){
      console.log("Updated user balance:", userDetail.balance);
    setBalance(userDetail.balance)
    }
  }, [userDetail.balance]); 



  const editUserById = async (_id) => {
    try {
      const updatedUser = {
        photo: newUser.photo,
        username: newUser.username,
        email: newUser.email,
        balance: newUser.balance, 
      };
      const response = await editUser(_id, updatedUser);
      if (response && response.user) { 
        dispatch(updateUser(response.user )); 
        dispatch(loadDetail(response.user )); 
        localStorage.setItem("user", JSON.stringify(response.user));
        alert("Successful modification");
        setIsEditing(false);
        navigate("/profile");
      } else {
        alert("Failed to update user");
      }
    } catch (error) {
      alert("An error occurred while updating the user.");
    }
  };

 const removeUser = async (_id)=>{
  const response = await deleteUserById(_id);
    if (response) {
      alert("The user has been deleted")
      navigate("/login");
    } else {
      console.log("Error deleting de user");
    }
 }



  const inputHandler = (nameProp, valueProp) => {
    const updatedUser = { ...newUser, [nameProp]: valueProp };
    setNewUser(updatedUser);
    
  };


  return (
    <div className="container-personal">
     <div>
      <img src={lachlan} alt="" className="img-personal"/>
    </div>
    <div>
      <h1>My personal information</h1>
      {userDetail && Object.keys(userDetail).length > 0 ? (
        <>
           <div>
            <MyPhotoComponent />
          </div>
          <div className="detail-transaction">
            <div>
              <span className="title-span">Username: </span>
              {isEditing ? (
                <input type="text" value={newUser.username} name="username" onChange={(e) => inputHandler(e.target.name, e.target.value)}/>
              ) : (
                <span>{userDetail.username}</span>
              )}
            </div>
  
            <div>
              <span className="title-span">Email: </span>
              {isEditing ? (
                <input type="text" value={newUser.email} name="email" onChange={(e) => inputHandler(e.target.name, e.target.value)}/>
              ) : (
                <span>{userDetail.email}</span>
              )}
            </div>
  
            <div>
              <span className="title-span">Balance: </span>
              {isEditing ? (
                <input type="text" value={newUser.balance} name="balance" onChange={(e) => inputHandler(e.target.name, e.target.value)}/>
              ) : (
                <span>{userDetail.balance} €</span>
              )}
            </div>
            <div>
              <span onClick={()=>{removeUser(userDetail._id)}} className="opt_out" >Click here to cancel these service</span>
            </div>
  
            <div>
              {isEditing ? (
                <div>
                  <button onClick={() => editUserById(userDetail._id)} className="btn-register" >Save</button>
                  <button onClick={backToUserProfile} className="btn-register" >Cancel</button>
                </div>
              ) : (
                <div>
                  <button onClick={() => setIsEditing(true)} className="btn-modify" >Modify</button>
                  <button onClick={()=>{navigate("/profile")}} className="btn-modify">Close</button>
                </div>
               
              )}
            </div>
          </div>
        </>
      ) : (
        <p>Loading the user details...</p>
      )}
    </div>
      
    </div>
  );
  
};

export default MyDetailComponent;
