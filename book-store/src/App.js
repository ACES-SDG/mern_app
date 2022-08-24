import "./App.css";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/Book/About";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
        </Routes>
      </main>
    </React.Fragment>
    // <div className="App">
    //   <Header/>
    // </div>
  );
}

export default App;
