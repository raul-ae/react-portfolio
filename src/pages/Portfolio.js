import React from "react";
import Card from 'react-bootstrap/Card';
import Container from "../components/Container";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import Weather from "./images/weather.PNG"
import DogeShop from "./images/dogeshop.PNG"
import Wiki from "./images/WikiDrinks.PNG"
import Scheduler from "./images/scheduler.PNG"
import Quiz from "./images/quiz.PNG"
import Passw from "./images/passw.PNG"
// import "./style.css";


function Portfolio () {

  const projects = [{
    picture: DogeShop,
    title: "DogeSHop",
    description: "Dog eShop Everything for your best buddy! 🐶 This app allows user to buy products from our online store and keeps track of deliveries.",
    link: "https://github.com/villanew96/project-2",
    app: "https://serene-ocean-57048.herokuapp.com/"
  },
  {
    picture: Wiki,
    title: "WikiDrinks",
    description: "WikiDrinks is a modern website that provide users the possibility to search for drinks, in order to obtain the indredients, measures, and preparation instructions. All within a funny and engaging user experience with gifs and drinks related articles.",
    app: "https://raul-ae.github.io/project-1/",
    link: "https://github.com/raul-ae/project-1"
  },
  {
    picture: Weather,
    title: "Weather Dashboard",
    description: " Get the weather of any city, by a simple search you will get the current information as temperature, humidity, wind speed and UV index. as well as the next 5 days forecast.",
    app: "https://raul-ae.github.io/6th-homework/",
    link: "https://github.com/raul-ae/6th-homework"
  },
  {
    picture: Scheduler,
    title: "Work day scheduler",
    description: "Keep your day under control, having control of each activity in your agenda with this scheduler that will help you to save important days activities.",
    link: "https://github.com/raul-ae/5th-homework",
    app: "https://raul-ae.github.io/5th-homework/"
  },
  {
    picture: Quiz,
    title: "Quick Quiz Challenge",
    description: "Try your knowledge answering this quick quiz and have a fun time while answering",
    app: "https://raul-ae.github.io/4th_homework/",
    link: "https://github.com/raul-ae/4th_homework"
  },
  {
    picture: Passw,
    title: "Password Generator",
    description: "If you runned out of ideas to create your passwords, try this password generator",
    app: "https://raul-ae.github.io/3rd-homework/",
    link: "https://github.com/raul-ae/3rd-homework"
  },
  ]

  return (
    <Container>
    <h1>
        All Projects
    </h1>
      <div className="row row-cols-1 row-cols-md-4">
        {projects.map(project => {
          return (
            <div className="col mb-4">
            <div className="card card-hgt" style={{height: "500px", marginTop:"20px", marginBottom:"100px"}}>
              <Card.Img src={project.picture} className="img-hgt" />
              <Card.Body>
                <h5 className="card-title prd-tle">{project.title}</h5>
                <Card.Text className="sub-crd-height">{project.description}</Card.Text>
                <a href={project.app} target="_blank"> 
                <FontAwesomeIcon icon={faGlobe} size= "lg" style={{marginRight: "10px"}}/>
                see the App    
                </a>
                <a href={project.link} target="_blank"> 
                <FontAwesomeIcon icon={faGithubSquare} size= "lg" style={{marginLeft: "30px", marginRight: "10px"}}/>
                see the repo    
                </a>
              </Card.Body>
              </div>
            </div>
          );
        })
        }
      </div>
    </Container>
  );
}

export default Portfolio;
