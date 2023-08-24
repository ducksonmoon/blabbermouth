import "./App.css";
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";
import UserForm from "./components/Form/UserForm";
import BraveryContent from "./components/Bravery/Bravery";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen justify-between bg-gradient-to-r from-violet-100 from-40% to-purple-200 to-100%">
        <Header />
        <Routes>
          <Route path="/" Component={UserForm} />
          <Route path="/bravery" Component={BraveryContent} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
