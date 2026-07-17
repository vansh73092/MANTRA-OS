import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";

import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup";


function Home() {
  return (
    <div className="h-screen bg-[#09090B]">

      <Navbar />

      <div className="flex h-[calc(100vh-64px)]">

        <Sidebar />

        <Hero />

      </div>

    </div>
  );
}


export default function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route 
          path="/" 
          element={<Home />} 
        />

        <Route 
          path="/login" 
          element={<Login />} 
        />

        <Route 
          path="/signup" 
          element={<Signup />} 
        />

      </Routes>

    </BrowserRouter>
  );
}