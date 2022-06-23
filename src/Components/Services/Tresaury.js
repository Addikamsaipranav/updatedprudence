import react,{useState,useEffect} from "react";
import HashLoader
from "react-spinners/HashLoader";
import "../BelowNav/Header.css"
import { Container,Row,Col, Media } from "react-bootstrap";
import Heading from "../BelowNav/Heading";
import "../Services/Services.css"
import LinksComponent from "../LinksComponent/LinksComponent";
import Description from "../ServicesDescription/Description";
const Tresaury=()=>{
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
         <Heading name="Tresaury Management"></Heading>
         <Container className="allservices">
         <Row>
         <Col lg={9} sm={12}>
         
         <div className="servicecontainer">

         <Col lg={9} sm={12}>
                   
         <div className="servicecard">
         <p className='servicedheading'></p>
         <Description data="Cash and Bank entries"/>
         <Description data="Smooth cash flow management"/>
         <Description data="MTM Forex Finance, Foreign risk and credit risk"/>
         <Description data="Analysing Liquidity"/>
         <Description data="Enhancing Working capital"/>
         <Description data="Bank Reconciliations"/>
         <Description data="Credit card reconciliations"/>
         <Description data="Intercompany transactions"/>
         <Description data="Manual Payments"/>
         <Description data="RBI Approvals and Advisory services"/>
         
         

      
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

export default Tresaury;