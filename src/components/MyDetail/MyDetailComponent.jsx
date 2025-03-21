import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../core/services/fetchUser";
import { loadDetail, updateUser } from "./MyDetailComponentAction";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import MyPhotoComponent from "../MyProfile/MyPhotoComponent";
import lachlan from "../../assets/lachlan.jpg"

const MyDetailComponent = () => {
  const userDetail = useSelector(
    (state) => state.myDetailComponentReducer.userDetail
  );

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [newUser, setNewUser] = useState({
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
    console.log("Usuario desde localStorage:", user);
    if (token && user) {
      dispatch(loadDetail(user));
    } else {
      console.log("No user or token found in localStorage");
    }
  }, [dispatch]);

  useEffect(() => {
    if (userDetail) {
      console.log("userDetail actualizado:", userDetail);
      setNewUser({
        username: userDetail.username || "",
        email: userDetail.email || "",
        balance: userDetail.balance || "",
      });
    }
  }, [userDetail]);

  const editUserById = async (_id) => {
    try {
      const updatedUser = {
        username: newUser.username,
        email: newUser.email,
        balance: newUser.balance,
        photo: newUser.photo,
      };
      const response = await editUser(_id, updatedUser);
      console.log(response);
      if (response && response.user) { 
        dispatch(updateUser({ _id, updatedUser: response.user })); 
        dispatch(loadDetail(response
        )); 
        alert("Successful modification");
        setIsEditing(false);
        navigate("/profile");
      } else {
        alert("Failed to update user.");
      }
    } catch (error) {
      alert("An error occurred while updating the user.");
    }
  };

  const inputHandler = (nameProp, valueProp) => {
    const updatedUser = { ...newUser, [nameProp]: valueProp };
    setNewUser(updatedUser);
    console.log("Nuevo estado:", updatedUser);
  };

  return (
    <div className="container-personal">
     <div>
      <img src={lachlan} alt="" className="img-personal"/>
    </div>
    <div>
      <h1>My personal information</h1>
    
      {userDetail ? (
        <>
           <div>
            <MyPhotoComponent />
          </div>
          <div className="detail-transaction">
            <div>
              <span>Username: </span>
              {isEditing ? (
                <input
                  type="text"
                  value={newUser.username}
                  name="username"
                  onChange={(e) => inputHandler(e.target.name, e.target.value)}
                />
              ) : (
                <span>{userDetail.username}</span>
              )}
            </div>
  
            <div>
              <span>Email: </span>
              {isEditing ? (
                <input
                  type="text"
                  value={newUser.email}
                  name="email"
                  onChange={(e) => inputHandler(e.target.name, e.target.value)}
                />
              ) : (
                <span>{userDetail.email}</span>
              )}
            </div>
  
            <div>
              <span>Balance: </span>
              {isEditing ? (
                <input
                  type="text"
                  value={newUser.balance}
                  name="balance"
                  onChange={(e) => inputHandler(e.target.name, e.target.value)}
                />
              ) : (
                <span>{userDetail.balance} €</span>
              )}
            </div>
  
            <div>
              {isEditing ? (
                <div>
                  <button onClick={() => editUserById(userDetail._id)} className="btn-register" >Guardar</button>
                  <button onClick={backToUserProfile} className="btn-register" >Cancelar</button>
                </div>
              ) : (
                <button onClick={() => setIsEditing(true)} className="btn-modify" >Modificar</button>
              )}
            </div>
          </div>
        </>
      ) : (
        <p>Cargando los detalles del usuario...</p>
      )}
    </div>
      
    </div>
  );
  
};

export default MyDetailComponent;
