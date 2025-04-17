import React from 'react'
import './Skill.css'
import { ProgressBar } from 'react-bootstrap'
import SkillData from '/src/data/Skill'

function Skills() {
  
  return (
    <div className='containers'>
      <div className='containers-name'>SKILLS<div className='containers-line'></div></div>    
      <div className="skill-container">
        {SkillData.map((e,i)=>{
          return(
            <div className='skill-card' key={i}>
              <div className='skill-card-content'>
               <span>{e.name}</span>
               <i>{e.percentage}%</i>
              </div>
              <ProgressBar now={e.percentage} className='custom-progress'/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills