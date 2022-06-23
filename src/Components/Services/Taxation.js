import react,{useState,useEffect} from "react";
import HashLoader
from "react-spinners/HashLoader";
import "../BelowNav/Header.css"
import { Container,Row,Col, Media } from "react-bootstrap";
import Heading from "../BelowNav/Heading";
import "../Services/Services.css"
import LinksComponent from "../LinksComponent/LinksComponent";
import Description from "../ServicesDescription/Description";
const Taxation=()=>{
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
         <Heading name="Taxation"></Heading>
         <Container className="allservices">
         <Row>
         <Col lg={9} sm={12}>
         
         <div className="servicecontainer">

         <Col lg={9} sm={12}>
                   
         <div className="servicecard">
         <p className='servicedheading'></p>
         <Description data="Company incorporation."/>
         <Description data="Advice on corporate restructuring"/>
         <Description data="Filling of all statutory forms."/>
         <Description data="Mergers and Acquisitions."/>
         <Description data="Structuring of entities and transactions."/>
         <Description data="Providing updates on significant change of law."/>
         <Description data="Providing clarifications and opinions on various transactions."/>
         <Description data="Representation before various authorities."/>
         
         

      
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

export default Taxation;