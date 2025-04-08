import { Routes, Route } from 'react-router-dom'
import './App.css'
import Calculator from './calculator/Calculator'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </>
  )
}

export default App
