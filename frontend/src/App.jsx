import { useState } from 'react'
import Home from './pages/home/Home'
import Rulouri from './pages/rulouri/Rulouri'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rulouri" element={<Rulouri />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
