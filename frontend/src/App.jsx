import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  {Routes, Route, BrowserRouter} from "react-router-dom";
import Predict from "./pages/Predict";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import BatchPredict from "./pages/BatchPredict"

function App() {

  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/batch-predict" element={<BatchPredict/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/predict" element={<Predict/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
