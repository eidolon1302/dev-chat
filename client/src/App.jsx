import React from "react";
import { Button } from "@/components/ui/button";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth/Page";
import Chat from "./pages/profile/Page";
import Profile from "./pages/profile/Page";
import About from "./pages/profile/Page";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/chat" element={<Chat/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<Navigate to="/auth" />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;