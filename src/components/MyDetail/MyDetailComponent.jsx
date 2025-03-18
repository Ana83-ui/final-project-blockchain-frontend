import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../core/services/fetchUser";
import { loadDetail, updateUser } from "./MyDetailComponentAction";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const MyDetailComponent = () => {
  const userDetail = useSelector(
    (state) => state.myDetailComponentReducer.userDetail
  );
  console.log("Estado actual de userDetail:", userDetail);

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    balance: "",
  }
);
 

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

  //actualiza newUser con los datos de userDetail
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

  // Edit user function
  const editUserById = async (_id) => {
    try {
      const updatedUser = {
        username: newUser.username,
        email: newUser.email,
        balance: newUser.balance,
      };
      const response = await editUser(_id, updatedUser);
  
      if (response) {
        console.log("Respuesta después de la actualización:", response); 
        dispatch(updateUser({ _id, updatedUser }));
        dispatch(loadDetail(response)); // Recarga los detalles actualizados
        alert("Successful modification");
        setIsEditing(false);
        navigate("/profile");
      } else {
        console.error("Error al actualizar el usuario", response);
        alert("Failed to update user.");
      }
    } catch (error) {
      console.error("Error en la solicitud de actualización", error);
      alert("An error occurred while updating the user.");
    }
  };
  

  const inputHandler = (nameProp, valueProp) => {
    const updatedUser = { ...newUser, [nameProp]: valueProp };
    setNewUser(updatedUser);
    console.log("Nuevo valor de", nameProp, ":", valueProp);
  };

  return (
    <div>
      <h1>My details</h1>
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
          <span>{userDetail.balance}</span>
        )}
      </div>
      <div>
        {isEditing ? (
          <div>
            <button onClick={() => editUserById(userDetail._id)}>Save</button>
            <button onClick={backToUserProfile}>Cancel</button>
          </div>
        ) : (
          <button onClick={() => setIsEditing(true)}>Modify</button>
        )}
      </div>
    </div>
  );
};

export default MyDetailComponent;
