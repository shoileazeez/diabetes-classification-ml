import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  {Routes, Route, BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Footer/>}/>
        <Route path="home" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
