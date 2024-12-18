import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin"; // Page entière
import EcranTv from "./pages/EcranTv"; // Une autre page entière

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Appel direct des pages */}
        <Route path="/" element={<Admin />} />
        <Route path="/about" element={<EcranTv />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
