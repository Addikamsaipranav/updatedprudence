import React from 'react'
import "../HomeServices.js/ServiceTemplate.css"
import { Link } from 'react-router-dom'
function ServiceTemplate(props) {
  return (
    <div>
    
          <p>{props.name}</p>

          <section className='secion1'>
  
          <div className="row1">
            <div className="column1">
              <div className="card1">
                <div className="icon-wrapper">
                  <i className={props.icon}></i>
                </div>
                <h3 className='h3'>{props.heading}</h3>
               <Link to={props.routee}> <div className='servicebutton'>Read more</div></Link>
              </div>
            </div>
            <div>
            <div className="contactline"></div>
            </div>
            </div>
          
        </section>
        
    </div>
  )
}

export default ServiceTemplate