import react,{useState,useEffect} from "react";
import HashLoader
from "react-spinners/HashLoader";
import "./BelowNav/Header.css"
import { Container,Row,Col, Media } from "react-bootstrap";
import Heading from "./BelowNav/Heading";
import "./virtualCFO.css";
import img1 from "../images/1.jpeg"
import img2 from "../images/2.jpeg"
import img3 from "../images/3.jpeg"
import img4 from "../images/4.jpeg"
import { Table } from "react-bootstrap";
import LinksComponent from "./LinksComponent/LinksComponent";
import Aos from 'aos'
import "aos/dist/aos.css";

const VirtualCFO=()=>{
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
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
            <div className="virtual">
         <Heading name="Virtual CFO"></Heading>
         <Container className="vcontainer">
         <Row>
           <Col lg={9} sm={12}>
           <div className="vdata">
           <Row  className="strategic" data-aos="flip-up">
             <Col lg={5} sm={12}>
             <Media>
             <img
              
              width={250}
              height={200}
              className="mr-10 vimages"
              src={img1}
              />
            </Media>
             </Col>
             <Col data-aos="flip-right" lg={5} sm={12}>
                 <h1 className="vhead">Strategic Support</h1>
                 <p className="vdata">
                 Take informed decisions driven by strategic insights and support
                 </p>
             </Col>
           </Row> 
           
          <Row  className="strategic flex-column-reverse flex-md-row" >
           <Col data-aos="flip-right" className="mtext" lg={5} sm={12}>
                 <h1 className="vhead">Management Reporting</h1>
                 <p className="vdata">
                 See the big picture with visual reports, actionable insights to help you grow your business.
                 </p>
             </Col>


             <Col data-aos="flip-up" className="mimg" lg={5} sm={12}>
             <Media>
             <img
              
              width={250}
              height={200}
              className="mr-10 vimages "
              src={img2}
              />
            </Media>
             </Col>
             
           </Row>

        <Row className="strategic">
           <Col data-aos="flip-up" lg={5} sm={12}>
           <Media>
           <img
            
            width={250}
            height={200}
            className="mr-10 vimages"
            src={img3}
            />
          </Media>
           </Col>
           <Col data-aos="flip-right" lg={5} sm={12}>
               <h1 className="vhead">Forecasting & Planning</h1>
               <p className="vdata">
               Keep control over your spending with budgets, forecasts and plans.
               </p>
           </Col>
         </Row> 
        
         <Row  className="strategic flex-column-reverse flex-md-row">
           <Col data-aos="flip-right" className="mtext" lg={5} sm={12}>
                 <h1 className="vhead">Financial Analysis</h1>
                 <p className="vdata">
                 Understood what is happening by combining the power of quantitative and qualitative analysis.
                 </p>
             </Col>


             <Col data-aos="flip-up" className="mimg" lg={5} sm={12}>
             <Media>
             <img
              
              width={250}
              height={200}
              className="mr-10 vimages"
              src={img4}
              />
            </Media>
             </Col>
             
           </Row>

        </div>
 </Col>
 <Col lg={3} sm={12}>
<LinksComponent/>
 </Col>
         </Row>
         
       </Container>
         </div>
         
        }
        </div>
    )
}

export default VirtualCFO;