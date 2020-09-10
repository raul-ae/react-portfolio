import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Portfolio () {
  return (
    <div>
      <Hero backgroundImage="https://scontent.fpbc1-2.fna.fbcdn.net/v/t1.0-9/79923857_10218143099242308_3744317299985743872_n.jpg?_nc_cat=101&_nc_sid=110474&_nc_eui2=AeEnUMQQs_PMfWvKC_VUI_QxZRuvvsQtOhxlG6--xC06HDBUiT0UlmZGKwMwLitMyCc&_nc_ohc=AtRCnXnMdOQAX8mjPHx&_nc_ht=scontent.fpbc1-2.fna&oh=5552caecab9cbf4eecd1d1230695755d&oe=5F7FAB9F">
        <h1>Hi</h1>
        <h2>I'm Raul</h2>
      </Hero>
      <Container style={{ marginTop: 30}}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To My Portfolio!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              A site where you can see more about me, visit my different social media profile and see some of the cool fullstack web app I have been developing in the last months.
              Feel free to reach out to me via social media.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
