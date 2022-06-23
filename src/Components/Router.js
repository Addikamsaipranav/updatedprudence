import React from 'react'
import {Container,Col,Row} from "react-bootstrap"
import ServiceTemplate from './HomeServices.js/ServiceTemplate'
function Router1(props) {
  return (
    <div>
    <Container >
    <div class="row text-center headd">
        <h1 class="section-heading">Pick Your Services</h1>
      </div>
    <Row className="servicerow">
    <a href={props.routeee}>go to ar</a>
      <Col  sm={12} lg={3} md={6}><ServiceTemplate routeee="/ar" heading="Virtual CFO Services " icon="fa-solid fa-chart-line fa-1x" routeee="/ar"/></Col>
      <Col  sm={12} lg={3} md={6}><ServiceTemplate heading="Accounting Services" icon="fa-solid fa-user fa-1x" /></Col>
      <Col  sm={12} lg={3} md={6}><ServiceTemplate heading="AR & AP" icon="icon fas fa-file-powerpoint"/></Col>
      <Col  sm={12} lg={3} md={6}><ServiceTemplate heading="Audit & Assurance" icon="icon fas fa-check-circle" /></Col>
      <Col  sm={12} lg={3} md={6}><ServiceTemplate heading="Taxation" icon="fa-solid fa-handshake-simple" /></Col>
      <Col  sm={12} lg={3} md={6}><ServiceTemplate heading="Corporate Law" icon="icon fas fa-clipboard-list" /></Col>
      <Col  sm={12} lg={3} md={6}><ServiceTemplate heading="Treasury Management" icon="icon fas fa-hand-holding-usd" /></Col>
      <Col  sm={12} lg={3} md={6}><ServiceTemplate heading="Other Services" icon="fa-solid fa-ellipsis" /></Col>
      
    </Row>
  </Container>
    </div>
  )
}

export default Router1