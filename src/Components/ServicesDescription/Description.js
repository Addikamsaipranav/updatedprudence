import React from 'react'
import {Col, Container,Row} from "react-bootstrap"
import "./Description.css"
function Description(props) {
  return (
    <div>
    <Container>
    <Row>
     <Col className='ppp' sm={12}><p data-aos="flip-up"><i class="fa-solid fa-angles-right"></i> {props.data}</p></Col>
    </Row>
    </Container>
    </div>
  )
}

export default Description