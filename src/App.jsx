import React from "react";
import './index.css'
import { Navbar, Welcome,  Services, Transactions, Footer } from "./Components";
// import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
          <Services />
          <Transactions />
          <Footer />
      </div>
    </>
  );
}

export default App;
