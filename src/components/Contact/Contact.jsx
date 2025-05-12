import {React,useState} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contact.css'
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin,FaShareAlt} from 'react-icons/fa';
import { BsEnvelope } from "react-icons/bs";
import { FiMapPin,FiShare2 } from "react-icons/fi";
import { MdOutlinePhoneInTalk } from "react-icons/md"
import NavBar from '/src/Components/NavBar/NavBar.jsx'


function Contact() {
  const[formInfo,setFormInfo] = useState({
    name:"",
    email:"",
    subject:"",
    message:""
  })
  function handleChange(event){
    setFormInfo(prevFormData =>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
  }
  function handleSubmit(event){
    event.preventDefault();
    console.log(formInfo);
    setFormInfo({
      name:"",
      email:"",
      subject:"",
      message:""
    });
  }
  
  return (
    <>
      <NavBar />
      <div className='containers'>
        <div className='containers-name'>Contact<div className='containers-line'></div></div>
        <h3 className='container-heading'>Contact me</h3>
        <Container>
          <Row>
            <Col>
              <div className="contact-block-item">
                <FiMapPin className='item-icon' />
                <h3>My Address</h3>
                <p>Denton, Texas</p>
              </div>
            </Col>
            <Col>
              <div className="contact-block-item">
                <FiShare2 className='item-icon' />
                <h3>Social Profiles</h3>
                <div className='social-icon-container'>
                <a href="https://www.linkedin.com/in/ganesh-bommisetty/" className='social-icon'><FaLinkedin /> </a>
                <a href="https://github.com" className='social-icon'><FaGithub /> </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row className='contact-rows'>
            <Col>
              <div className="contact-block-item">
                <BsEnvelope className='item-icon'/>
                <h3>Email Me</h3>
                <p>ganesh.bommisetty1998@gmail.com</p>
              </div>
            </Col>
            <Col>
              <div className="contact-block-item">
                <MdOutlinePhoneInTalk className='item-icon'/>
                <h3>Call Me</h3>
                <p>(940)758-1280</p>
              </div>
            </Col>
          </Row>
        </Container>
        {/* action={contactForm} */}
        <Form className='custom-form'  onSubmit={handleSubmit}>
          <Row className='m-2 '>
            <Col className='custom-form-col'>
              <Form.Control placeholder='your name' name='name' value={formInfo.name} onChange={handleChange}/>
            </Col>
            <Col className='custom-form-col'>
              <Form.Control type ='email' placeholder='joe@gmail.com' name='email' value={formInfo.email} onChange={handleChange}/>
            </Col>
          </Row>
          <Col className='custom-form-col m-3'>
            <Form.Control placeholder='Subject' name='subject' value={formInfo.subject} onChange={handleChange}/>
          </Col>
          <Col className='custom-form-col-msg m-3'>
            <Form.Control placeholder='Message' as="textarea" rows={3} name='message' value={formInfo.message} onChange={handleChange}/>
          </Col>
          <Button type='submit' className='form-button'>Send Message</Button>
        </Form>

      </div>
    </>
  )
}

export default Contact