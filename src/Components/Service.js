import react,{useState,useEffect} from "react";
import HashLoader
from "react-spinners/HashLoader";
import "./BelowNav/Header.css";
import { Container,Col,Row } from "react-bootstrap";
import ServiceTemplate from "./HomeServices.js/ServiceTemplate";
import "../Components/HomeServices.js/ServiceTemplate.css"
import Heading from "./BelowNav/Heading";
const Service=()=>{
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
            <div>
            <Heading name="services"></Heading>
             
        <Container data-aos="flip-up">
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
            </div>
        }
     
        </div>
    )
}

export default  Service;