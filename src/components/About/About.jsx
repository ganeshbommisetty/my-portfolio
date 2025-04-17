import React from 'react'
import image from './my pic.jpeg'
import './About.css'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

function About() {
  return (
    <div className='containers'>
        <div className='containers-name'>About<div className='containers-line'></div></div>
        <h3 className='containers-heading'>LEARN MORE ABOUT ME</h3>
      <div className='about-content'>
        <img src={image} alt='profile-pic' className='about-img'/>
        <div className='about-desc'>
          <h3 className='title'>Software Engineer</h3>
          <p><em>
          I’m Ganesh Bommisetty, a Computer Science graduate from the University of North Texas with a strong foundation in full-stack development, distributed systems, and cloud-native applications. My industry experience spans multiple domains including observability platforms, payroll systems, and e-commerce, where I've contributed to backend services, frontend applications, and cloud infrastructure.
            </em></p>
          <p>My academic and professional journey has equipped me with hands-on experience in system design, microservices, and performance optimization. I’ve worked extensively with modern frameworks, cloud platforms, and data solutions to build scalable, reliable, and user-centric applications. I'm passionate about solving complex problems and continuously exploring better ways to build and deploy software systems.</p>
          <p>Open to connecting and exploring impactful tech projects.</p>
          <ul>
            <li>
              <FaEnvelope className="custom-email"/>
              <strong>Email:</strong>
              <span>ganesh.bommisetty1998@gmail.com</span>
            </li>
            <li>
              <FaLinkedin className='email'/>
              <strong>LinkedIn:</strong>
              <a className='linkedin-link'href="https://www.linkedin.com/in/ganesh-bommisetty/">view profile</a>
            </li>
          </ul>
        </div>
      </div>  
        
    </div>
    
  )
}

export default About
