import react,{useState,useEffect,useRef} from "react";
import HashLoader from "react-spinners/HashLoader";
import "./contact.css"
import Heading from "./BelowNav/Heading";
import "./BelowNav/Header.css"
import {Form,Button, Container} from 'react-bootstrap';
import {Row,Col,Table} from  "react-bootstrap"
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Aos from 'aos'
import "aos/dist/aos.css";
import Footer from "./Footer/Footer";

const Contact=()=>{
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
   const buttonText="Send message";
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_04jh6rg', 'template_d4xuelv', form.current, '-Gi6hdAPH-YdIA-OB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Email send");
  };
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
       setLoading(false)
    },2000)
  },[])

  const notify = () => toast.success("Email submtted!",{position:toast.POSITION.TOP_RIGHT});
    return(
        <div className="contact">
        {
          loading ?
          <div className="loading">
          <HashLoader
          loading={loading}   size={30}  color={"#162447"} />
          </div>
          :
          <div>
          <Heading name="Contact"></Heading>
       
          <Container className="contactcontainer">
          <Row className="mb-5 mt-3">
           <Col lg='8'>
           <h1 className="display-4 mb-4">
            
           </h1>
           </Col>
          </Row>
        
          <Row className="sec_sp">
            <Col lg='5' className="mb-5">
           
               <div  data-aos="flip-up">
               
               <br/>
               <table className="virtualtable">
               <tr className="virtualtr">
                 <td><i class="fa-solid fa-user"></i></td>
                 <td>Name</td>
                </tr>
                 <tr className="virtualtr">
                 <td className="none"></td>
                 <td>Prudence Accounting Solutions</td>
                </tr>
                 <tr className="virtualtr">
                 <td className="icons"><i class="fa-solid fa-location-dot"></i></td>
                 <td>Address</td>
                </tr>
                 <tr className="virtualtr">
                 <td></td>
                 <td>7,KHB colony,</td>
                </tr>
                 <tr>
                 <td></td>
                 <td>7th block,Koramangala,</td>
                </tr>
                 <tr>
                 <td></td>
                 <td>Bengaluru, Karnataka</td>
                </tr>
                 <tr>
                 <td className="icons"><i class="fa-solid fa-envelope"></i></td>
                 <td>Email</td>
                </tr>
                <tr>
                 <td></td>
                 <td><a href="mailto:info@prudenceadvisory.in" ><span>info@prudenceadvisory.in</span></a></td>
                </tr>
            </table>
               
               </div>
               
        
            </Col> 
        
            <Col>
             <div className="contactline"></div>
            </Col>
        
            <Col lg="6" clasName="d-flex align-items-center">
            <br/>
            <div data-aos="flip-up">
               <Form className="contact__form w-100" ref={form} onSubmit={sendEmail}>
               <Row>
                 <Col lg="4" className="form-group">
                 <input className="ip" type="text" id="contactie_name" name="contactie_name" placeholder="Name"/>
                 </Col>
                 <Col lg="4" className="form-group">
                 <input className="ip" type="text" id="email" name="contactie_email" placeholder="Email"/>
                 </Col>
               </Row>
               <Row>
               <Col lg="4" className="form-group">
               <input className="ip" type="text" id="name" name="contactie_phone" placeholder="Phone-no"/>
               </Col>
               <Col lg="4" className="form-group">
               <input className="ip" type="text" id="name" name="contactie_country" placeholder="Country"/>
               </Col>
             </Row>
                <input type="text" id="subject" name="contactie_subject" placeholder="Subject" className="subject"/>
        
                <textarea id="message" name="contactie_message" rows="4" cols="50"></textarea>
                <br/>
                <button onClick={notify} className="button" type="submit">{buttonText}</button>
                <ToastContainer />
               </Form>
               </div>
            </Col>
        
          </Row>
            
         </Container>
         <iframe data-aos="fade-up" className='iframe' width="1080" height="423" id="gmap_canvas" src="https://maps.google.com/maps?q=7,KHB%20colony,%207th%20block,Koramangala,%20Bengaluru,%20Karnataka&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div>
          

        }
        <Footer/>
        </div>
        
    )
}

export default  Contact;