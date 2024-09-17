import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import SideNavBar from "./components/Navbar/SideNavBar";

function App() {
  return (
    <>
      <div className="flex h-screen w-full">
        <Dashboard></Dashboard>
      </div>
    </>
  );
}

export default App;
