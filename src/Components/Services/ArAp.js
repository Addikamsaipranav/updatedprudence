import react,{useState,useEffect} from "react";
import HashLoader
from "react-spinners/HashLoader";
import "../BelowNav/Header.css"
import { Container,Row,Col, Media } from "react-bootstrap";
import Heading from "../BelowNav/Heading";
import "../Services/Services.css"
import LinksComponent from "../LinksComponent/LinksComponent";
import Description from "../ServicesDescription/Description";
const ArAp=()=>{
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
         <Heading name="AR & AP"></Heading>
         <Container className="allservices">
         <Row>
         <Col lg={9} sm={12}>
         
         <div className="servicecontainer">

         <Col lg={9} sm={12}>
                   
         <div className="servicecard">
         <p className='servicedheading'>Accounts Receivables</p>
         <Description data="Sales Order processing and sales dispute management"/>
        <Description data="Invoicing and Billing as per contracts"/>
        <Description data="Payment follow-ups"/>
        <Description data="Invoice Reconciliation with Payment"/>
        <Description data="Inventory Managament"/>
        <Description data="Monthly open debtors opening balance statements to customers"/>
        <Description data="Debtor aging report preparation"/>
      
   </div>

   <div className="servicecard">
   <p className='servicedheading'>Accounts Payable</p>
   <Description data="Invoice receiving and verification."/>
   <Description data="onnecting with vendor for any queries"/>
   <Description data="Voucher creation and approval from appropriate person"/>
   <Description data="Payment advice for treasury management team"/>
   <Description data="TDS and TDS compliance"/>
   <Description data="Aging report for accounts payable"/>
   <Description data="Monthly cost reporting"/>
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

export default ArAp;