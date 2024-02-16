import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { loginButtonStyle, parentDivStyle } from "./Login.styles";
import {signupButtonStyle} from "./SignUp.styles";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {Simulate} from "react-dom/test-utils";

export const Login = (): JSX.Element => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(event.target.value);
    };

    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(event.target.value);
    };

    const navigateToSignup = (): void => {
        navigate('/SignUp');
    };
    
    const login = (event: any): void => {
        if(email!="" && password!="" ){
        try {
               
                 axios.post('http://localhost:8081/User/Login', {  

                    email: email,
                    password: password
           
                 }).then(response=> {localStorage.setItem("user", JSON.stringify(response.data));
                 console.log('Login successful', response.data);
                 if(response.data.admin==1)
                 navigate('/Admin')
                else
                 { if(response.data == null)
                  alert("Login failed. Wrong credentials.");
                 navigate('/Home');
                 }
                 });
             
                   
        } catch (error) {
           
            console.error('Login failed', (error as Error).message);
           
        }}
        else alert("Login failed. Wrong credentials.");
    };

    return (

         <div
         
              style={{
                 ...parentDivStyle,
                 display: "flex",
                 alignItems: "center",
                 justifyContent: "center",
                 height: "100vh",

              }}
              >
                  <img
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", 
                    opacity: 1,
                }}
                src={require('../images/happyplanner.jpeg')}
                alt="Background"
            /> 
              <div
                 style={{
                     width: "300px",
                     padding: "20px",
                     border: "1px solid #ccc",
                     borderRadius: "8px",
                     backgroundColor: "rgba(255, 255, 255, 0.8)" 
                 }}
                  >
                 <div style={{ marginBottom: 20 }}>
                     <TextField
                         id="email"
                         label="Email"
                         variant="outlined"
                         fullWidth
                         value={email}
                         onChange={onChangeEmail}
                     />
                 </div>
                 <div style={{ marginBottom: 20 }}>
                     <TextField
                         id="password"
                         label="Password"
                         type="password"
                         variant="outlined"
                         fullWidth
                         value={password}
                         onChange={onChangePassword}
                      />
                 </div>
                 <Button
                     style={loginButtonStyle }
                     onClick={login}
                     variant="contained"
                     color="primary"
                     fullWidth
                 >
                    Login
                </Button>
                  <Button
                      style={signupButtonStyle}
                      onClick={navigateToSignup}
                      // variant="contained"
                      //color="primary"
                       fullWidth
                  >
                      Sign up
                  </Button>
              </div>
             </div>
     );
};

export default Login;
