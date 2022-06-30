import { motion } from "framer-motion";
import React ,{useState} from "react";
import "./Card.css";
import { Container,Row,Col } from "react-bootstrap";
import aboutimg from "../images/about.jpg"
const Cards=()=>{
  const img = document.querySelector("img");
  const icons = document.querySelector(".icons");
  img.onclick = function(){
    this.classList.toggle("active");
    icons.classList.toggle("active");
  }
  return(
   
     <div>
      
     <Container>
     
      <Row>
       
      <Col>
      <div className="container">
      <div className="wrapper">
         <a href="#">
         <img src={aboutimg} alt=""/>
         </a>
      </div>
      <div className="content">
         <p>
            User Interface Designer and <br/>front-end developer
         </p>
         
      </div>
     
   </div>
      
      </Col>
       
      <Col>
      
      <div className="container">
      <div className="wrapper">
         <a href="#">
         <img src={aboutimg} alt=""/>
         </a>
      </div>
      <div className="content">
         <p>
            User Interface Designer and <br/>front-end developer
         </p>
         
      </div>
     
   </div>
      </Col>

      <Col>
      
      <div className="container">
      <div className="wrapper">
         <a href="#">
         <img src={aboutimg} alt=""/>
         </a>
      </div>
      <div className="content">
         <p>
            User Interface Designer and <br/>front-end developer
         </p>
         
      </div>
     
   </div>
      </Col>
      </Row>
     
     </Container>
     
     </div>
      
      
        
     
   
  )
}


export default Cards;