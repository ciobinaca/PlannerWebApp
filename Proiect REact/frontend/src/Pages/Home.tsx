import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const HomePage = (): JSX.Element => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <div style={{ marginBottom: 20 }}>
                <h1>Welcome to Your Planner</h1>
            </div>

            <div style={{ marginBottom: 20 }}>
                <Button component={Link} to="/your tasks" variant="contained" color="secondary" style={{ marginRight: 10 }}>
                    Tasks
                </Button>
                <Button component={Link} to="/profile" variant="contained" color="secondary" style={{ marginRight: 10 }}>
                    View Profile
                </Button>
                <Button component={Link} to="/journal" variant="contained" color="secondary" style={{ marginRight: 10 }}>
                    Journal
                </Button>
                <Button component={Link} to="/calendar" variant="contained" color="secondary">
                    Calendar
                </Button>
            </div>

            <div>
                <p>Your planner content goes here...</p>
            </div>
        </div>
    );
};

export default HomePage;