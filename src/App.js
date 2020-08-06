import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Workspace } from "./components/Workspace";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <SideBar />
        <Workspace />
      </div>
    </div>
  );
}

export default App;
