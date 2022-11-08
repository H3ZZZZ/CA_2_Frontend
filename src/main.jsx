import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
import Contact from "./components/Contact";
import PersonList from "./components/PersonList";
import Person from "./components/Person";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="person" element={<PersonList />}>
            <Route path=":personId" element={<Person />} />
          </Route>
        </Route>
        <Route path="/search" element={<Search />} />
        <Route
          path="/contact"
          element={
            <Contact
              name={"Frederik Hess"}
              address={{
                street: "Hejvej 5",
                town: "Lyngby",
                country: "Denmark",
              }}
            />
          }
        />
        <Route path="/login" element={<App />} />
        <Route path="*" element={<h1>Page Not Found !!!</h1>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
