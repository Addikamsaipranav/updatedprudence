import React ,{useEffect} from "react";
import ServiceTemplate from "./HomeServices.js/ServiceTemplate";
import { Container,Row,Col } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../Components/HomeServices.js/ServiceTemplate.css"
import HomepageQuote from "./HomepageQuote/HomepageQuote";
import Aos from 'aos'
import "aos/dist/aos.css";
import HorizontalSlider from "../Components/HorizontalSlider/Slider"
import Homecareer from "./Career/Homecareer";
import "../Components/HorizontalSlider/Slider.css"
import home from "../images/home.svg"
import Landing from "./HomeLandingpage/Landing";



const Home=(props)=>{
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
    return(
        <div>
     <Landing/>
       
 <Container id="services" className="serviceshome reveal " data-aos="flip-up">
    <div class="row text-center headd">
        <h1 className="section-heading" data-aos="flip-up">Pick Your Services</h1>
      </div>
    <Row className="servicerow">
    
      <Col  sm={12} lg={3} md={6}><ServiceTemplate routee="/virtualcfo" heading="Virtual CFO Services " icon="fa-solid fa-chart-line fa-1x" routeee="/ar"/></Col>
      <Col  sm={12} lg={3} md={6}><ServiceTemplate routee="/accountingservices" heading="Accounting Services" icon="fa-solid fa-user fa-1x" /></Col>
      <Col  sm={12} lg={3} md={6}><ServiceTemplate routee="/ar&ap" heading="AR & AP" icon="icon fas fa-file-powerpoint"/></Col>
      <Col  sm={12} lg={3} md={6}><ServiceTemplate routee="auditassurance" heading="Audit & Assurance" icon="icon fas fa-check-circle" /></Col>
      <Col  sm={12} lg={3} md={6}><ServiceTemplate routee="/taxation" heading="Taxation" icon="fa-solid fa-handshake-simple" /></Col>
      <Col  sm={12} lg={3} md={6}><ServiceTemplate routee="/corporatelaw" heading="Corporate Law" icon="icon fas fa-clipboard-list" /></Col>
      <Col  sm={12} lg={3} md={6}><ServiceTemplate routee="/treasury" heading="Treasury Management" icon="icon fas fa-hand-holding-usd" /></Col>
      <Col  sm={12} lg={3} md={6}><ServiceTemplate routee="/otherservices" heading="Other Services" icon="fa-solid fa-ellipsis" /></Col>
      
    </Row>
  </Container>
 
<Homecareer/>
  <HorizontalSlider/>
  <HomepageQuote />

        </div>
    )
}

export default  Home;