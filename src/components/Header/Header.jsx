import React from 'react';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Header.css'
function Header() {
    const navigate = useNavigate();
    
    function AboutNav(){
        navigate('/about')
    }
    function SkillsNav(){
        navigate('/skills')
    }
    const EducationNav = () => navigate('/education')
    const ContactNav = () => navigate('/contact')
    const ResumeNav = () => navigate('/resume')
  return (

    <nav>
        <div className='custom-header-container'>
            <div className='custom-header-text'> 
                <h2 className='custom-header-desc'>I'm</h2>
                <h1 className='custom-header-name'>Ganesh Bommisetty</h1>
            </div>
            <div className='nav-contents'>
                <ul className='custom-header-list'>
                    <li>Home</li>
                    <li onClick={AboutNav}>About</li>
                    <li onClick={SkillsNav}>Skills</li>
                    <li onClick={EducationNav}>Education</li>
                    <li onClick={ResumeNav}>Resume</li>
                    <li onClick={ContactNav}>Contact</li>
                </ul>

                <div className='social-icons'>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/ganesh-bommisetty/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
            </div>
        </div>       
    </nav>
  )
}

export default Header