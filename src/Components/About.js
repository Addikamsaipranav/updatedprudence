import react,{useState,useEffect,Fragment} from "react";
import Heading from "./BelowNav/Heading";
import "./BelowNav/Header.css"
import HashLoader
from "react-spinners/HashLoader";
import "../Components/about.css"
import { Container,Row,Col } from "react-bootstrap";
import shammu from "../images/shammu.jpg"
import tejeswini from "../images/tejeswini.png";
import shravan from "../images/shravan.jpg";
import bhargavi from "../images/bhargavi.jpg";
import Context from "../Components/Context/Context"
import Provider  from "../Components/Context/AboutProvider";
import context from "react-bootstrap/esm/AccordionContext";
import { contextType } from "google-map-react";

const About=()=>{
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
         setLoading(false)
      },2000)
    },[])
    return(
         <div>
         {
            loading ?
            <div className="loading">
            <HashLoader
            loading={loading}   size={30}  color={"#162447"} />
            </div>
            :
            <Provider>
            
            <Context.Consumer>

            {
               
              (context)=>(
                <Fragment>
                <div className="aboutscroll">
                <Heading name="Founder"></Heading>
                
                <Container fluid className="about">
                   <Row className="ceo">
                    <center className="ahead"> <Col data-aos="flip-up" sm={8}> Our <span className="text">Amazing</span> Mentor </Col></center>
                    <center>
                    
                    <Col><img data-aos="flip-up" className="aboutimg" src={shammu}/></Col>
                    <Col className="degree">
                    <p data-aos="fade-up">{context.data.ceoname}</p>
                    <p data-aos="fade-left">{context.data.ceoQualification}</p>
                    </Col>
                    <Col data-aos="fade-up">
                    <p className="ceoheading">
                    {context.data.ceoinfo}
                    </p>
                    
                    </Col>
                    </center>
                   </Row>
                   <Row >
                   <div  className="aboutteamintegrity">
                   <center data-aos="flip-up" className="atih">{context.data.section2.heading1}</center>
                   <p data-aos="fade-down-left" className="atid">{context.data.section2.info}</p>
                   </div>
                   
                   </Row>
                   <Row className="whyprudence"> 
                   <center data-aos="flip-right"  className="wph">{context.data.whyprudence.heading}</center>
                   
                   <Col className="wpid feature-box" lg={4} sm={12} md={12}>
                   <i data-aos="flip-up" className="icon1 icon fas fa-users"></i>
                   <h3 data-aos="fade-right">Right Team</h3>
                   </Col>
                   <Col className="wpid feature-box" lg={4} sm={12} md={12}>
                    <i data-aos="flip-up" className="icon1 icon fas fa-file-alt"></i>
                    <h3 data-aos="fade-up">One stop solutions</h3></Col>
                   <Col className="wpid feature-box" lg={4} sm={12} md={12}>
                   <i data-aos="flip-up" className="icon1 icon far fa-edit"></i>
                   <h3 data-aos="fade-left">Start up Management</h3>
                   </Col>
                   
                
                 </Row>
    
                 <Row className="ourteam"> 
                 <center className="oteam">Our Amazing Team</center>
                 <Col data-aos="flip-left" className="teammembers" lg={4} sm={12} md={12}>
                    <img data-aos="flip-up" src={tejeswini} className="team_img"></img>
                     <h3 data-aos="fade-down">{context.data.aboutteam.tejeswini.name}</h3>
                     <p className="role"></p>
                     <p data-aos="fade-right">{context.data.aboutteam.tejeswini.info}</p>
                 </Col>

                 <Col data-aos="flip-left" className="teammembers" lg={4} sm={12} md={12}>
                 <img data-aos="flip-up" src={shravan} className="team_img"></img>
                      <h3 data-aos="fade-down" >{context.data.aboutteam.shravan.name}</h3>
                      <p className="role"> </p>
                      <p data-aos="fade-up">{context.data.aboutteam.shravan.info}</p>
                 </Col>

                 <Col data-aos="flip-left" className="teammembers" lg={4} sm={12} md={12}>
                 <img data-aos="flip-up" src={bhargavi} className="team_img"></img>
                      <h3 data-aos="fade-down">{context.data.aboutteam.bhargavi.name}</h3>
                      <p className="role"> </p>
                      <p data-aos="fade-right">{context.data.aboutteam.bhargavi.info}</p>
                 </Col>
               </Row>
    
               
                </Container>
                </div>
                
                </Fragment>
              )
            }
          </Context.Consumer>
  </Provider>
            
         }
         
         </div>
        
    )
}

export default  About;