import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Rulouri from './pages/rulouri/Rulouri'
import Ferestre from './pages/ferestre/Ferestre'
import Portofoliu from './pages/portofoliu/Portofoliu'
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rulouri" element={<Rulouri />} />
        <Route path="/ferestre-usi" element={<Ferestre />} />
        <Route path="/portofoliu" element={<Portofoliu />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App