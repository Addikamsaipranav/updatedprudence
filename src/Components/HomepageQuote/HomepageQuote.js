import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import img2 from "../images/Picture1.png"
import "../HomepageQuote/HomepageQuote.css"
function HomepageQuote() {
  return (
    <div  className='Quote '  data-aos="fade-up">
    <Container >
    
    <Row>
    
      <Col  sm={12} lg={6} md={12} className="mr-3 quotep">
      <p  data-aos="flip-up" class="para text-white text-center"><span class="fs-1">"</span>We enable our clients to recognize uncharted
      possibilities and assist them towards deploying sustainable strategies.<br/>
    We strive to deliver personalized experience that makes decision making esier and simple.<br/>
   With extensive service capability and seamless domain knowledge what we offer is reliable and trusted advice<span class="fs-1">"</span></p>

      </Col>
      <Col  sm={12} lg={6} md={12}>
       <img  data-aos="flip-left"  sm={12}  src={img2}></img>
      </Col>
      
      
    </Row>
  </Container>
    </div>
  )
}

export default HomepageQuote