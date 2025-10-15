import { useState } from 'react'
import Home from './pages/home/Home'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
