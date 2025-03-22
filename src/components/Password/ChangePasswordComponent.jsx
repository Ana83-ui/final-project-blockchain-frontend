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
      alert("Email and new password are required");
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
    if (result.success) {
      alert("Password successfully updated.");
      navigate("/"); 
    } else {
      alert("Error: " + result.message);
    }
    return result;
  };

  return (
    <div className="container-access">
      <div>
        <h1>Set your new password</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="input-form">
          <div className="email">
            <span >Email: </span>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="password">
            <span>New password: </span>
            <input
              type="password"
              value={newPassword}
              onChange={handlePasswordChange}
              placeholder="Enter the new password"
              required
            />
          </div>
          </div>
          
          

          <button type="submit" onClick={handleSubmit} className="btn-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
