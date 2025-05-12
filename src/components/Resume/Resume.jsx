import React from 'react'
import './Resume.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ResumeData from '/src/data/Resume'
import NavBar from '/src/Components/NavBar/NavBar.jsx'
function Resume() {
  return (
    <> 
      <NavBar />
      <div className='containers'>
        <div className='containers-name'>Resume<div className='containers-line'></div></div>
        <h3 className='containers-heading'>Check my resume</h3>
        <Row>
          {ResumeData.map((data,i) =>{
          return (
            <>
              <Col style={{ marginLeft: '20px' }} >
                <h3 className='section-titles'>Summary</h3>
                <div className='resume-item' key={i}>
                  <div className="resume-item-line"></div>
                  <div className="resume-item-dot"></div>
                  <h4 className='resume-item-title'>Ganesh Bommisetty</h4>
                  <p><em>{data.summary}</em></p>
                </div>
                {/* Education Section */}
                <h3 className='section-titles'>Education</h3>
                <div className="resume-card">
                  <div className="resume-item-line"></div>
                  {data.education.map((e,i) =>{
                  return  (
                    <div className="resume-item" key={i}>
                      <div className="resume-item-dot"></div>
                      <h4 className='resume-item-title'>{e.title}</h4>
                      <h5 className='resume-item-year'>{e.graduation}</h5>
                      <p><em>{e.universityname}</em> </p>
                      <p>GPA: {e.grade}</p>
                      </div>
                      )
                  })}
                </div>
                <h3 className='section-titles'>Projects</h3>
                {data.projects.map((e,i)=>{
                  return(
                    <div key={i}> 
                      <h4>{e.projectname}</h4>
                      <p className='project-desc'>{e.desc}</p>
                    </div>
                  )
                })}
                {/* Skills Section */}
                <h3 className='section-titles'>Technical Skills</h3>
                <ul className='resume-list'>
                  {data.technicalskill.map((s,i) =>{
                    return <li key={i}>{s}</li>
                  })}
                </ul>
                </Col>
              <Col>
                <h3 className='section-titles'>Professional Summary</h3>
                {/* Experience Section */}
                <div className='resume-card'> 
                  <div className="resume-item-line"></div>
                    {data.experience.map((e,i) =>{
                      return (
                        <div className="resume-item" key={i}>
                          <div className="resume-item-dot"></div>
                          <h4 className='resume-item-title'>{e.role}</h4>
                          <h5 className='resume-item-year'>{e.startdate} - {e.enddate}</h5>
                          <p><em>{e.companyname}</em></p>
                        <div>
                              <ul className='resume-item-list'>
                              {e.points.map((point,i) => {
                                return <li key={i}>{point}</li>
                              }
                              )}
                              </ul>
                          </div>
                        </div>
                      )}
                    )}
                </div>
                
              </Col>
            </>
          )
          })} 
        </Row>
      </div>
    </>
  )
}

export default Resume