import react,{useState,useEffect} from "react";
import HashLoader
from "react-spinners/HashLoader";
import "../BelowNav/Header.css"
import { Container,Row,Col, Media } from "react-bootstrap";
import Heading from "../BelowNav/Heading";
import "../Services/Services.css"
import LinksComponent from "../LinksComponent/LinksComponent";
import "../Services/ServiceText.css"
import Description from "../ServicesDescription/Description";

const AuditAssurance=()=>{
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
         setLoading(false)
      },2000)
    },[])
    return(
        <div >
        {
            loading ?
            <div className="loading">
            <HashLoader
            loading={loading}   size={30}  color={"#162447"} />
            </div>
            :
            <div className="background">
         <Heading name="Audit Assurance"></Heading>
         <Container className="allservices">
         <Row>
           <Col lg={9} sm={12}>
              
          
           <div className="servicecontainer">

           <Col lg={9} sm={12}>
                     
           <div className="servicecard">
           <p className='servicedheading'></p>
           <Description data="Internal Audit."/>
          <Description data="Due diligence."/>
          <Description data="Compliance audit."/>
          <Description data="Risk Assurance"/>
          <Description data="Valuation Services"/>
          <Description data="Management audit"/>
          <Description data="Internal Audit"/>
          <Description data="IFRS"/>
          <Description data="Operational Audit"/>
          
           </div>
        </Col>
    </div>  
                            
              
            </Col>

          <Col className="sidelinks" lg={3} sm={12}>
              <LinksComponent/>
          </Col>
         </Row>
         
       </Container>
         </div>
         
        }
        </div>
    )
}

export default AuditAssurance;