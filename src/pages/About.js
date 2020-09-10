import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import yo from "./images/yo.png"

function About() {
  return (
    <div>
      <Container style={{ marginTop: 30}}>
        <Row>

        <Col size="md-5">
          <img src={yo} style={{height: 630}}></img>
        </Col>
        <Col size="md-7">
          <Row>
            <Col size="md-12">
              <h1>About me</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <p>
              I'm an Electronic engineer by Puebla’s Autonomous University and have a
              Master Degree in Innovation for Business Development by “Tecnologico de
              Monterrey”. </p>
              <p>
              I work for Honeywell leading an international engineering team that enables the fast-growing
              trend of e-commerce in North-America by solving the toughest technology challenges in Automated Supply Chain. </p>
              <p>
              Leveraging on the latest technology, Agile principles and Top Talent; to drive the Innovation engine that will make the Future of connected distribution centers.</p>
              <p>
              Additional to his engineering responsibilities, I'm the HTS LATAM Local Innovation Ecosystem Leader: Ensuring collaboration with local Universities, Technology partners and startups: for talent attraction, joint research and shared infrastructure, to enable Honeywell’s LATAM Innovation process with the interaction of marketing, sales and engineering. Identifying LATAM customer needs and designing local connected solutions that will add value to regional customers.</p>
              <p>
              My professional experience before Honeywell includes diverse leading positions in marketing, product management and engineering in companies like Emerson, ABB and Mafrinsa.
              </p>
            </Col>
          </Row>
        </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;