import react,{useState,useEffect} from "react";
import HashLoader
from "react-spinners/HashLoader";
import "../BelowNav/Header.css"
import { Container,Row,Col, Media } from "react-bootstrap";
import Heading from "../BelowNav/Heading";
import "../Services/Services.css"
import LinksComponent from "../LinksComponent/LinksComponent";
import Description from "../ServicesDescription/Description";
const OtherServices=()=>{
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
         <Heading name="Other Services"></Heading>
         <Container className="allservices">
         <Row>
         <Col lg={9} sm={12}>
         
         <div className="servicecontainer">

         <Col lg={9} sm={12}>
                   
         <div className="servicecard">
         <p className='servicedheading'>Internal Controls and ERP Implementation</p>
         <Description data="Implementation of ERP for the organisation in a stage wise manner."/>
         <Description data="Placing internal controls by monitoring KPI and KRI in key processes like AR, AP, Inventory Etc.,"/>
         <Description data="Setting up multilevel approvals for payments and requisitions"/>
         <Description data="Checking efficiency and effectiveness of ERP implemented and suggesting the improvements and changes as required."/>
         <Description data="Process mapping of various process in order to keep track on normal and abnormal loss."/>
         <Description data="Trend analysis of various expenses from Quarter to Quarter and investigation if there is any abnormal movement in trends for suggesting Management."/>
   </div>

   <div className="servicecard">
   <p className='servicedheading'>Fund Raising</p>
   <p>Financing is necessary at every stage of a business life cycle. We build detailed forecast models and advises on ideal & minimum size of funding required for the business, based on multiple sensitivity scenarios. We leverages on its experience in negotiating with all parties involved, to bargain the best deal for its client company and its promoters.</p>
   <Description data="Preparation Bank Loan Application"/>
   <Description data="Preparation of project report"/>
   <Description data="Preparation of CMA data"/>
   <Description data="Working Capital"/>
   <Description data="Term Loan"/>
   <Description data="Project Finance"/>
   <Description data="Bank guarantee"/>
   <Description data="Loan against property"/>
   <Description data="Collateral free loans"/>
   <Description data="MSME Loans"/>
   <Description data="Bills Discounting"/>
   <Description data="Venture Capital"></Description>
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

export default OtherServices