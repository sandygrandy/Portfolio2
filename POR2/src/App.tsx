import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Project1 from './pages/SemesterProject.tsx'
import Project2 from './pages/ExamProject.tsx'
import Project3 from './pages/JSFrameworks.tsx'
import './styles.css'

function App() {
  return (
    <>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project1" element={<Project1 />} />
      <Route path="/project2" element={<Project2 />} />
      <Route path="/project3" element={<Project3 />} />
    </Routes>
    </>
  )
}

export default App

