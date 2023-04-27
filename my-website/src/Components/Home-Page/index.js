import React from "react";
import '../Home-Page/style.css'
import { AppBar, Container } from "@mui/material";

const HomePage =()=>{
    return(
        <div>
        <div className='Home-Page'>Hi This is the main Page.</div>
        <div>
            <AppBar position="static">
                <Container maxWidth="xl">
                    Hello
                </Container>
            </AppBar>
        </div>
      <h1 className="wed-planner">Wedding Planner</h1>
      <p>p tag</p>
      <h2 className="plan-your-own-wedding">Plan Your Own Wedding</h2>
      <p>p tag</p>
      </div>
    )
} 
export default HomePage;