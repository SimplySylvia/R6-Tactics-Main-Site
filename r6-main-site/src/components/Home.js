import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home">
      <div className="fullscreen-video-wrap">
      <video src="http://localhost:8000/images/homecovervid.mp4" autoPlay="true" loop="true" muted="true">
      </video>
        </div>
        <div className="overlay">
        </div>
        <div className="overlayContent">

          <article className="homeheader"><h1>Welcome to R6 META</h1></article>

          <div className="home1">
          <article><img src="http://localhost:8000/images/home1.png"/></article>
          <article><h2>Experience your favorite Rainbow Six Siege operators in a whole new way.</h2>
          <Link to={'/AttackOps'}><Button className="atkbut" as='a' floated="right" primary> Attack Operators </Button></Link>
          <Link to={'/DefenseOps'}><Button className="defbut" as='a' floated="right" primary> Defense Operators </Button></Link>
          </article>
          </div>

          <div className="home2">
          <article>
            <h2>Get an edge on the competition by being prepared. Grow your map knowledge and aim for Diamond this next season!</h2>
            <Link to={'/Maps'}><Button as='a' floated="left" primary> Plan Your Next Game </Button></Link>
            <img className="rankimg" src="http://localhost:8000/images/diamond.png"/>
          </article>
          <article><img src="http://localhost:8000/images/home2.png"/></article>
          </div>

        </div>

        </div>
    );
  }
}

export default Home;