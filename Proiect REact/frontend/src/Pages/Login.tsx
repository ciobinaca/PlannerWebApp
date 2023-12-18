import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { loginButtonStyle, parentDivStyle } from "./Login.styles";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

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
        try {
            axios.post('http://localhost:8081/User/Login', {
              
                email: email,
                password: password
                
            }).then(response=> {    localStorage.setItem("userul", JSON.stringify(response.data));
            console.log('Login successful', response.data);
            navigate('/Home');
        });       
    
        } catch (error) {
            console.error('Login failed', (error as Error).message);
        }
    };

    // const login = async (event: React.FormEvent): Promise<void> => {
    //     event.preventDefault();
    //
    //     try {
    //         const response = await axios.get('http://localhost:8081/User/Login', {
    //             params: {
    //                 email: email,
    //                 password: password,
    //             },
    //         });
    //
    //        // setUser(response.data as User); // Assuming 'User' is the backend type
    //         console.log('Login successful', response.data);
    //         navigate('/Home');
    //     } catch (error) {
    //         console.error('Login failed', (error as Error).message);
    //     }
    // };

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
              <div>
                  <img
                 style={{
                     width: "300px",
                     padding: "20px",
                     border: "1px solid #ccc",
                     borderRadius: "8px",
                     backgroundColor: "rgba(255, 255, 255, 0.8)" // You can adjust the background color opacity
                 }}
                      src={require('../images/happyplanner.jpg')} alt="Logo"  />
                  
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
                     style={loginButtonStyle}
                     onClick={login}
                     variant="contained"
                     color="primary"
                     fullWidth
                 >
                    Login
                </Button>
                  <Button
                      style={loginButtonStyle}
                      onClick={navigateToSignup}
                      // variant="contained"
                      color="primary"
                       fullWidth
                  >
                      Sign up
                  </Button>
              </div>
             </div>
//</div>
     );
};

export default Login;
