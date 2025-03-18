import { useState } from "react";
import { useNavigate } from "react-router";

const ChangePasswordForm = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  let navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !newPassword) {
      alert("Email y nueva contraseña son necesarios");
      return;
    }
    const response = await fetch("http://localhost:3000/api/change-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, newPassword }),
    });
    const result = await response.json();
    return result;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" required/>
      <input type="password" value={newPassword} onChange={handlePasswordChange} placeholder="New password" required/>
      <div></div>
      <button type="submit" onClick={() => navigate("/login")}>Change Password</button>
    </form>
  );
};

export default ChangePasswordForm;
