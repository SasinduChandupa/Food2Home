import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Add other routes here when needed */}
                <Route path="/shop" element={<Shop />} />
            </Routes>
        </Router>
    );
}

export default App;