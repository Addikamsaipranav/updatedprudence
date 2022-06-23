import React from 'react'

function Heading(props) {
  return (
    <div data-aos="zoom-out-left">
    <section className='title'>
    <div className="container-fluid" >
      <div className="row" >
        <div  className="col mycoc">
          <p>{props.name}</p>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Heading