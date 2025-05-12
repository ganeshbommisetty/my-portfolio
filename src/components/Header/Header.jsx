import {React, useEffect, useState} from 'react';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Header.css'
import MobileToast from '/src/components/MobileToast';
function Header() {
    const navigate = useNavigate();
    
    function AboutNav(){
        navigate('about')
    }
    function SkillsNav(){
        navigate('skills')
    }
    const EducationNav = () => navigate('education')
    const ContactNav = () => navigate('contact')
    const ResumeNav = () => navigate('resume')
    const HomeNav = () => navigate('')
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <nav>
        <MobileToast />
        <button className="hamburger-btn" onClick={toggleMenu}>
                &#9776;
        </button>
        <div className='custom-header-container'>
            <div className='custom-header-text'> 
                <h2 className='custom-header-desc'>I'm</h2>
                <h1 className='custom-header-name'>Ganesh Bommisetty</h1>
            </div>
            
            <div className={`nav-contents ${isMenuOpen ? 'open' : ''}`}>
                <ul className='custom-header-list'>
                    <li onClick={HomeNav}><span>Home</span></li>
                    <li onClick={AboutNav}><span>About</span></li>
                    <li onClick={SkillsNav}><span>Skills</span></li>
                    <li onClick={EducationNav}><span>Education</span></li>
                    <li onClick={ResumeNav}><span>Resume</span></li>
                    <li onClick={ContactNav}><span>Contact</span></li>
                </ul>
            </div>
                <div className='social-icons'>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/ganesh-bommisetty/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>            
        </div>       
    </nav>
  )
}

export default Header