import React from "react";
import { ThemeProvider } from "./components/ThemsContext";
import Counter from "./components/Counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import ChangeText from "./components/ChangeText";
import ExpensiveCalculationComponent from "./components/UseMemo";
const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/text-change" element={<ChangeText />} />
            <Route path="/useMemo" element={<ExpensiveCalculationComponent/>}/>
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
