import React from 'react'
import ss from "../images/Invoice.gif"
import "../HomeLandingpage/landig.css"
import aboutimg from "../images/about.jpg"
import {Row,Col,Container,Media, Button} from "react-bootstrap"
import { Link } from 'react-router-dom'
function Landing() {
  return (
    <div>
     <div className='landing'>
     <Container fluid>
        <Row className="flex-column-reverse flex-md-row">
        <Col lg={6} sm={12} className="main-heading">
       
     

          <p style={{
            color:"crimson"
          }}  data-aos="fade-up" className='headdd'>Financial Solutions to Advance your Business </p>
          <p  data-aos="fade-right"  className='financequote'><blockquote>Financial Freedom is available to those who learn about it and work for it</blockquote></p>
          <Link to="/virtualcfo"><Button data-aos="flip-up" className='financebtn'>Read More</Button></Link>
         
       </Col>
       <Col  lg={6} sm={12}>
         <Media>
         <img
          
          className="mr-10 limages"
          src={ss}
          />
        </Media>
       </Col>
        </Row>
    </Container>
    
     </div>
     
     <div className='aboutlanding'>
     <h1  data-aos="fade-up" className='abthed'>About Us</h1>
     <Container fluid>
     
     <Row>
     <Col lg={6} sm={12}>
     <img
     data-aos="flip-up"
     className="mr-10 aimages"
     src={aboutimg}
     />
      
    </Col>
    <Col  lg={6} sm={12}>
    
      <p  data-aos="fade-left" className='abtinfo'>We incorporated Prudence with a moto”Let’s grow together”. Planning the business resources coupled with compliances of law has become a challenge today. It requires extensive theoretical knowledge and practical experience. Shanmukha and his associates have sound theoretical knowledge and good practical experience. By sharing their knowledge and practical experience with the team members and clients, we ensure effective and timely redressal of issues arising on routine basis or that can arise later.</p>
       <Link to="/about"><Button data-aos="flip-up" className='abtbutton'>Read More</Button></Link>
    </Col>
     </Row>
 </Container>
 
     </div>
      
    </div>
  )
}

export default Landing