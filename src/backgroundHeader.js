import React, { Component } from "react";
import "./background.css";

class BackgroundHeader extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <img src="./backgroundMe.jpg" alt="myface" className="bg-image" />{" "}
        <div className="bg-text">
          <h1>I am Kirby Campbell</h1>
          <p>FullStack Web Develope</p>
        </div>
      </div>
    );
  }
}

export default BackgroundHeader;
