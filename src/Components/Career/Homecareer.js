import React from 'react'
import { Link } from 'react-router-dom'
import "../Career/Homecareer.css"
function Homecareer() {
  return (
    <div className='homecareer '>
    
    <span><h1 data-aos="flip-right">Carreer</h1></span>
    <p className='hometext' data-aos="flip-up">A career as a finance professional is suitable for everyone with appropriate academic qualification. People with bodily deformity , one can possess excellent accounting and analytical skills.</p>
    <Link to="/career">  <center><button data-aos="flip-left"  className="careerbutton" type="submit">Apply Now</button></center></Link>
  
    </div>
  )
}

export default Homecareer