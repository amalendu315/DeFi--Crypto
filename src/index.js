import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { TransactionProvider } from "./context/TransactionContext";
import Navbar from "./components/Navabar/Navbar";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TransactionProvider>
    <React.StrictMode>
      <Router>
        <Navbar />
        <App />
        <Footer />
      </Router>
    </React.StrictMode>
  </TransactionProvider>
);
