import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Veloura from './pages/Veloura.tsx'
import JSFrameworks from './pages/JSF.tsx'
import Biddy from './pages/Biddy.tsx'
import './styles.css'
import ScrollToTop from './components/ScrollToTop.tsx'

function App() {
  return (
    <>
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/veloura" element={<Veloura />} />
      <Route path="/jsframeworks" element={<JSFrameworks />} />
      <Route path="/biddy" element={<Biddy />} />
    </Routes>
    </>
  )
}

export default App

