import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = (): JSX.Element => {
    const navigate = useNavigate();
    const navigateToTasks = (): void => {
        navigate('/MyTasks');}
    const navigateToUser = (): void => {
            navigate('/profile');    
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <div style={{ marginBottom: 20,opacity:0.7 }}>
                <h1>Welcome to Your Planner</h1>
            </div>
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
                src={require('../images/home.jpeg')} 
                alt="Background"
            />
           
            <div style={{ marginBottom: 20 }}>
                <Button component={Link} to="/MyTasks"
                onClick={navigateToTasks}
                 variant="contained" color="secondary" 
                 style={{ marginRight: 10, backgroundColor: '#8DB600', 
    color: '#fff' }}>
                    My Tasks
                </Button>
                <Button component={Link} to="/profile" onClick={navigateToUser} variant="contained" color="secondary" style={{ marginRight: 10,backgroundColor: '#8DB600', 
    color: '#fff' }}>
                    View Profile
                </Button>
                <Button component={Link} to="/journal" variant="contained" color="secondary" style={{ marginRight: 10,backgroundColor: '#8DB600', 
    color: '#fff' }}>
                    Journal
                </Button>
                <Button component={Link} to="/calendar" variant="contained" color="secondary" style={{backgroundColor: '#8DB600', 
    color: '#fff' }}>
                    Calendar
                </Button>
            </div>

            {/* <div>
                <p></p>
            </div> */}
        </div>
    );
};

export default HomePage;