import React from 'react'
import ss from "../images/Invoice.gif"
import "../HomeLandingpage/landig.css"
import {Row,Col,Container,Media} from "react-bootstrap"
function Landing() {
  return (
    <div>
     <div className='landing'>
     <Container fluid>
        <Row className="flex-column-reverse flex-md-row">
        <Col lg={6} sm={12}>
          <h1 data-aos="fade-up">Financial Solutions to Advance your Business </h1>
          
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
     <div className='about'>
     <Container fluid>
     <Row>
     <Col lg={6} sm={12}>
      image code
      
    </Col>
    <Col  lg={6} sm={12}>
    about info
     
    </Col>
     </Row>
 </Container>
 
     </div>
      <div className='cards'>
     
     </div>
    </div>
  )
}

export default Landing