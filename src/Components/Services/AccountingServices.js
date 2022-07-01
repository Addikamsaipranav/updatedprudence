import react,{useState,useEffect} from "react";
import HashLoader
from "react-spinners/HashLoader";
import "../BelowNav/Header.css"
import { Container,Row,Col, Media } from "react-bootstrap";
import Heading from "../BelowNav/Heading";
import "../Services/Services.css"
import LinksComponent from "../LinksComponent/LinksComponent";
import Description from "../ServicesDescription/Description";
import Footer from "../Footer/Footer";
const AccountingServices=()=>{
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
         <Heading name="Accounting Services"></Heading>
         <Container className="allservices">
         <Row>
           <Col lg={9} sm={12}>
         
           <div className="servicecontainer">

           <Col lg={9} sm={12}>
                     
           <div className="servicecard">
           <p className='servicedheading'>Books Keeping Services</p>
           <Description data="ERP selection and implementation"/>
          <Description data="Recording of journal entries"/>
          <Description data="Preparation of ledger accounts"/>
          <Description data="Preparation of monthly/yearly Profit & Loss account and Balance sheet in compliance with the Indian GAAP."/>
          <Description data="Inventory Managament"/>
          <Description data="Management audit"/>
          <Description data="Internal Audit"/>
          <Description data="Prepare MIS reports in a format and at a frequency as desired by the management of the Company."/>
          <Description data="Facilitate audit of accounts of the Company."/>
     </div>

     <div className="servicecard">
     <p className='servicedheading'>Payroll Services</p>
     <Description data="Salary processing and Payslip generation"/>
     <Description data="Expense reimbursement"/>
     <Description data="Leave Tracking"/>
     <Description data="TDS, PT, ESI and PF payment advice and monthly returns"/>
     <Description data="Allowances"/>
  </div>
     
        </Col>
    </div> 
            </Col>

          <Col className="sidelinks" lg={3} sm={12}>
              <LinksComponent/>
          </Col>
         </Row>
         
       </Container>
       <Footer/>
         </div>
         
        }
        </div>
    )
}

export default AccountingServices;