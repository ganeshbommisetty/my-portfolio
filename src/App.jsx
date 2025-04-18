import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import { useNavigate,Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Resume from './components/Resume/Resume'
import { HiChevronDoubleLeft } from "react-icons/hi";

function App() {
  const navigate = useNavigate();
  const return_icon = () => navigate('/');
    // window.location.href = '/';
  
  return (
    <div>
    <button className='return-icon' onClick={return_icon}>
    <HiChevronDoubleLeft  />
    </button>
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
