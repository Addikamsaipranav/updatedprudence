import react,{useState,useEffect} from "react";
import HashLoader
from "react-spinners/HashLoader";
import "../BelowNav/Header.css"
import { Container,Row,Col, Media } from "react-bootstrap";
import Heading from "../BelowNav/Heading";
import "../Services/Services.css"
import LinksComponent from "../LinksComponent/LinksComponent";
import Description from "../ServicesDescription/Description";
const CorporateLaw=()=>{
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
         <Heading name="Corporate Law"></Heading>
         <Container className="allservices">
         <Row>
         <Col lg={9} sm={12}>
         
         <div className="servicecontainer">

         <Col lg={9} sm={12}>
                   
         <div className="servicecard">
         <p className='servicedheading'></p>
         <Description data="Tax planning / compliance for individual and corporate"/>
         <Description data="GST and Income Tax returns"/>
         <Description data="Tax impact analysis"/>
         <Description data="Transfer pricing"/>
         <Description data="Structuring of cross border transactions"/>
         <Description data="Structuring overseas investments"/>
         <Description data="Providing updates on significant change of law"/>
         <Description data="Providing clarifications and opinions on issues"/>
         <Description data="Representation before various authorities"/>
         <Description data="Succession planning"/>
         

      
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

export default CorporateLaw;