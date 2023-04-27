import React from "react";
import '../src/App.css'
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/Home-Page/index";
import CardSection from "./Components/Card-Section/index";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      <CardSection/>
    </div>
  );
}

export default App;
