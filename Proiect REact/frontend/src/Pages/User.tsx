import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import axios from 'axios';
import { loginButtonStyle, parentDivStyle } from "./Login.styles";

const UserProfile = (): JSX.Element => {
  const [userId, setId] = useState<number | null>(null);
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");


  useEffect(() => {
  
    const user = JSON.parse(localStorage.getItem("user") || "");
    if (user != null) {
      setId(user.id);
      setUserName(user.name);
      setUserEmail(user.email);
    }
  }, []);

  const handleUpdateProfile = () => {
    try {
      axios.put(`http://localhost:8081/User/Update`, {
        id:userId,
        name: userName,
        email: userEmail,
        // Add other fields as needed
      }).then(response => {

        localStorage.setItem("user", JSON.stringify(response.data));
    
      setUserName(response.data.name);
      setUserEmail(response.data.email);
        console.log('Profile updated successfully', response.data);
      });
    } catch (error) {
      console.error('Profile update failed', (error as Error).message);
      // Handle error, maybe show an error message
    }
  };

  return (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
         <img
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",  
                    opacity: 1,  
                    zIndex:-3
                }}
                src={require('../images/Computer wallpaper.jpeg')} 
                alt="Background"
            />
      <h2>User Profile</h2>
      <div>
        <p>Name: {userName}</p>
        <p>Email: {userEmail}</p>
       
      </div>

      <TextField
        label="New Name"
        variant="outlined"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        label="New Email"
        variant="outlined"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
  

      <Button
        variant="contained"
        color="primary"
        onClick={handleUpdateProfile}
        style={loginButtonStyle}
      >
        Update Profile
      </Button>
    </div>
  );
};

export default UserProfile;
