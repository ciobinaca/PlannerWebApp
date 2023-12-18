import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { loginButtonStyle, parentDivStyle } from "./Login.styles";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Signup = (): JSX.Element => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setUsername(event.target.value);
    };

    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(event.target.value);
    };

    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(event.target.value);
    };

    const signup = (event: React.MouseEvent): void => {
        try {
            axios.post('http://localhost:8081/User/Signup', {
                username: username,
                email: email,
                password: password,
            }).then(response => {
                localStorage.setItem("userul", JSON.stringify(response.data));
                console.log('Signup successful', response.data);
                navigate('/Login');
            });
        } catch (error) {
            console.error('Signup failed', (error as Error).message);
        }
    };

    return (
        <div style={{ ...parentDivStyle, display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <div>
                <img
                    style={{
                        width: "300px",
                        padding: "20px",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        backgroundColor: "rgba(255, 255, 255, 0.8)"
                    }}
                    src={require('../images/happyplanner.jpg')} alt="Logo"
                />
                <div style={{ marginBottom: 20 }}>
                    <TextField
                        id="username"
                        label="Username"
                        variant="outlined"
                        fullWidth
                        value={username}
                        onChange={onChangeUsername}
                    />
                </div>
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
                    onClick={signup}
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Signup
                </Button>
            </div>
        </div>
    );
};

export default Signup;
