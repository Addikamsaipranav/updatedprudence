import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './topheader.css'
const TopHeader=()=>{
return(
    <div>
    
    <div data-aos="fade-right" className='topmain'>
    <a href="tel:(+91)7981214431" className='anchor'><i class="fa-solid fa-phone"></i><span>(+91)7981214431</span></a>
    <a href="mailto:info@prudenceadvisory.in" className='anchor'><i class="fa-solid fa-envelope"></i><span>info@prudenceadvisory.in</span></a>
    </div>
    </div>
     
     
    
)
}

export default TopHeader;