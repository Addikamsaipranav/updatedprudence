import React ,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Table} from "react-bootstrap"
import "../LinksComponent/LinkComp.css"
import Aos from 'aos'
import "aos/dist/aos.css";
function LinksComponent() {

  useEffect(()=>{
    Aos.init({duration:2000});
  },[])

  return (
    <div>
   
           <div data-aos="flip-up" className="links">
           <Table>
           <thead>
             <tr>
              
               <th><Link to="/virtualcfo"><i className="fa-solid fa-chart-line fa-1x"></i></Link><br/></th>
               <td><Link to="/virtualcfo">VirtualCFO</Link></td>
             </tr>
           </thead>
           <tbody>
             <tr>
             <th><Link to="/accountingservices"><i className="fa-solid fa-user fa-1x"></i></Link><br/></th>
               <td><Link to="/accountingservices"><span>Accounting Services</span></Link></td>
             </tr>
             <tr>
               <th><Link to="/ar&ap"><i className="icon fas fa-file-powerpoint"></i></Link> <br/></th>
               <td><Link to="/ar&ap"><span>AR & AP</span></Link> <br/></td>
            </tr>
             <tr>
               <th> <Link to="/auditassurance"><i className="icon fas fa-check-circle"></i></Link> <br/></th>
               <td> <Link to="/auditassurance"><span>Audit & Assurance</span></Link> <br/></td>
            </tr>

            <tr>
               <th><Link to="/taxation"><i className="fa-solid fa-handshake-simple"></i></Link> <br/></th>
               <td><Link to="/taxation"><span>Taxation</span></Link> <br/></td>
             </tr>
             <tr>
               <th><Link to="/corporatelaw"><i className="icon fas fa-clipboard-list"></i></Link> <br/> </th>
               <td><Link to="/corporatelaw"><span>Corporate Law</span></Link> <br/></td>
            </tr>
            <tr>
            <th> <Link to="/treasury"><i className="icon fas fa-hand-holding-usd"></i></Link> <br/></th>
            <td> <Link to="/treasury"><span>Treasury Management</span></Link> <br/></td>
            </tr>
            <tr>
            <th><Link to="/otherservices"><i className="fa-solid fa-ellipsis"></i></Link> <br/></th>
            <td><Link to="/otherservices"><span>Other Services</span></Link> <br/></td>
            </tr>
           </tbody>
         </Table>
            </div>
           
        
    </div>
  )
}

export default LinksComponent