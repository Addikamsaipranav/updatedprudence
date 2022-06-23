import React, { useState } from "react";
import "./navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import VirtualCFO from "./VirtualCFO";
import Contact from "./Contact";
import ArAp from "./Services/ArAp";
import Taxation from "./Services/Taxation";
import AccountingServices from "./Services/AccountingServices";
import AuditAssurance from "./Services/AuditAssurance";
import CorporateLaw from "./Services/CorporateLaw";
import Tresaury from "./Services/Tresaury";
import OtherServices from "./Services/OtherServices"
import Career from "./Career";


function Navbar() {
  
  
  const [isMobile,setIsMobile] = useState(false);
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
      
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
      
   <Router>
   <nav className="nav a navposition" >
  <Link to="/" className="nav__brand">
  
    <h2><span>P</span>rudence</h2>
  </Link>
   <ul className={active} 
   onClick={()=>{
     setActive("nav__menu");
     setIcon("nav__toggler");

   }
  }
   >

     <li className="nav__item">
     <Link to="/" className="nav__link "> Home</Link>
     </li>
     
     <li className="nav__item">
     <Link to="/about" className="nav__link"> About </Link>
     </li>

     <li className="nav__item">
     <Link   to="services"  className="nav__link"> 
        
       services
     
     </Link>
     </li>

    

     <li className="nav__item">
     <Link to="/virtualcfo" className="nav__link"> VirtualCFO </Link>
     </li>

     <li className="nav__item">
     <Link to="/contact" className="nav__link"> Contact </Link>
     </li>

   </ul>
   <div onClick={navToggle} className={icon}>
     <div className="line1"></div>
     <div className="line2"></div>
     <div className="line3"></div>
   </div>
 </nav>
 <Routes>
    
        <Route path="/taxation" element={<Taxation/>}/>
        <Route path="/auditassurance" element={<AuditAssurance/>}/>
        <Route path="/accountingservices" element={<AccountingServices/>}/>
        <Route path="/corporatelaw" element={<CorporateLaw/>}/>
        <Route path="/taxation" element={<Taxation/>}/>
        <Route path="/otherservices" element={<OtherServices/>}/>
        <Route path="/ar&ap" element={<ArAp/>}/>
        <Route path="/treasury" element={<Tresaury/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/virtualcfo" element={<VirtualCFO />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
   </Router>
  );
}

export default Navbar;
