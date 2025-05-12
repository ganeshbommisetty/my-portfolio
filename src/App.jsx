import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import {Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Resume from './components/Resume/Resume'

function App() {  
  return (
    <div>
      <Routes>
        <Route path="" element={<Header />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path='education' element={<Education />}/>
        <Route path='resume' element={<Resume />}/>
        <Route path='contact' element={<Contact/>} />
      </Routes>

      <Footer />  {/* This stays always visible */}
    </div>
  )
}

export default App
