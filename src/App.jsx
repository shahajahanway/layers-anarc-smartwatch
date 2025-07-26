import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { Products } from "./pages/Products"
import { About } from "./pages/About"
import { Login } from "./pages/Login"

function App() {
  const [videoEnded, setVideoEnded] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home videoEnded={videoEnded} setVideoEnded={setVideoEnded} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
