import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer class="footer mt-auto py">
      <div class="container">
      <div class="row">
      <p></p>
      </div>
        <div class="row">
          <div class="col-8">
            <h5>follow me on social media</h5>
          </div>
          <div class="col-1" >
            <a href="https://www.linkedin.com/in/raulalarcon/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size= "lg"/>
            </a>
          </div>
          <div class="col-1">
            <a href="https://twitter.com/raulalarcon" target="_blank">
            <FontAwesomeIcon icon={faTwitterSquare} size= "lg"/>
            </a>
          </div>
          <div class="col-1">
            <a href="https://www.facebook.com/raul.ae" target="blank">
            <FontAwesomeIcon icon={faFacebookSquare} size= "lg"/>
            </a>
          </div>
          <div class="col-1">
            <a href="https://www.instagram.com/raulalarcon/" target="blank">
            <FontAwesomeIcon icon={faInstagramSquare} size= "lg"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
    
  );
}

export default Footer;
