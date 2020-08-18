import React, { Component } from "react";
import "./DashboardFooter.css";
// import {final} from '../images/final.jpg';
import { Container } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
class DashboardFooter extends Component {
  render() {
    return (
      <div className="DashboardFooter">
         <Container Fixed>
          <p id="footerText">
          Create Once Post Twice!!
            Made    with 
             <FontAwesomeIcon icon={faHeart} color="red" />
             @Socio
          </p>
        </Container>
      </div>
    );
  }
}

export default DashboardFooter;
