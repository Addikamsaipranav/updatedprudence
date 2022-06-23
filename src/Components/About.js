import react,{useState,useEffect} from "react";
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
            <div className="aboutscroll">
            <Heading name="Founder"></Heading>
            
            <Container fluid className="about">
               <Row className="ceo">
                <center className="ahead"> <Col data-aos="flip-up" sm={8}> Our <span className="text">Amazing</span> Mentor </Col></center>
                <center>
                
                <Col><img data-aos="flip-up" className="aboutimg" src={shammu}/></Col>
                <Col className="degree">
                <p data-aos="fade-right"> Shanmukha Bharadwaz</p>
                <p data-aos="fade-left">B.Com,ACA,CMA</p>
                </Col>
                <Col data-aos="fade-up">
                 <p className="ceoheading">He is in the practice for the past 5 years beginning by setting up own practice and building it up and Experience of 5 years in this field.</p>
                 <p className="ceoheading">He has good knowledge of departmental working at lower level up to the appellate level. He has varied experience in all areas of Audit, Investigation, Due Diligence, Taxation (Direct and Indirect), Valuation, Company Law Matters for both domestic and foreign companies, Management Consultancy.</p>
                 <p className="ceoheading">Work with clients includes IT companies (Small and medium sized), Start up , firms, banks, trusts, societies, charitable and educational institutions besides few renowned individuals. He has also experience in Cost management of Start-ups and Share valuation for fund raising. He is specialized in implementing internal controls and Internal Systems Audit in various startups and MNC’s Acting as a virtual chief financial officer (CFO) for more than 15 companies.</p>
                </Col>
                </center>
               </Row>
               <Row >
               <div  className="aboutteamintegrity">
               <center data-aos="flip-up" className="atih">A TEAM WITH INTEGRITY</center>
               <p data-aos="fade-down-left" className="atid">Our client list includes domestic and international entities of various sizes from different industries. Our team of experienced professionals provide financial solutions in a manner where client satisfaction is our top priority.</p>
               </div>
               
               </Row>
               <Row className="whyprudence"> 
               <center data-aos="flip-right"  className="wph">Why Prudence</center>
               
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
                 <h3 data-aos="fade-down">Phani Tejaswini </h3>
                 <p className="role"> </p>
                 <p data-aos="fade-right">She has an experience of more than 6 years in areas of expertise are Accounts, Finance, Project Financing, Credit Appraisal, Auditing and Taxation. She was previously associated with Manufacturing and IT Industry.

                 She has also been actively involved in preparation of Financial Statements, Annual Reports, Consolidated Financial Statements, Cash Flow Statements, Capital Adequacy, Disclosures & Notes to Accounts, and Memorandum to Audit Committee/Board and related Annexure.
                 
                 She is specialized in implementing internal controls and Internal Systems Audit in various startups and MNC’s. She has also experience in Cost management of Start-ups and Share valuation for fund raising.</p>
             </Col>
             <Col data-aos="flip-left" className="teammembers" lg={4} sm={12} md={12}>
             <img data-aos="flip-up" src={shravan} className="team_img"></img>
                  <h3 data-aos="fade-down" >Shravan M S</h3>
                  <p className="role"> </p>
                  <p data-aos="fade-up">Shravan M S B.com,CMAMore than 5 years of diverse industries experience in all areas of Audit, Accounting and Cost Analysis

                  Well geared to take up any professional assignments in the above areas.
                  
                  He is expertise in cost analysis, preparation of project profitability and payback model.</p>
             </Col>
             <Col data-aos="flip-left" className="teammembers" lg={4} sm={12} md={12}>
             <img data-aos="flip-up" src={bhargavi} className="team_img"></img>
                  <h3 data-aos="fade-down">Bharagavinadh Reddy</h3>
                  <p className="role"> </p>
                  <p data-aos="fade-right">She has an experience of 5 year in finance and has an experience working with MNCs in financial Planning and analysis.

                  Currently acting as V.CFO of Manufacturing company.</p>
             </Col>
           </Row>

           
            </Container>
            </div>
            
         }
         
         </div>
        
    )
}

export default  About;