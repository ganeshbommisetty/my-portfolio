import React from 'react'
import './Education.css'
import EducationData from '/src/data/Education';
function Education() {
  return (
    <div className='containers'>
      <div className='containers-name'>Education<div className='containers-line'></div></div>
      <div className='education-container'>
        {EducationData.map((e,i)=>{
          return(
            <div className='education-card' key={i}>
              <img src={`${import.meta.env.BASE_URL}${e.logo}`} alt='unt-logo' className='education-icon'/>
              <h3 className='cards-title'>{e.title}</h3> 
              <div className="education-card-content">
                <span>{e.startdate} - {e.enddate}</span>
                <h4>{e.coursename}</h4>
                <span>CGPA: {e.grade}</span> 
              </div>          
            </div>
          )
        })}  
      </div>    
    </div>
  )
}

export default Education