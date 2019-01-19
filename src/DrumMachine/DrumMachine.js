import React, { Component } from "react";
import "./DrumMachine.css";
import simpleSFX from "simple-sfx";
const sfx = new simpleSFX([
  "/DrumMachineSounds/808BD_Med-R8_C2S.wav",
  "/DrumMachineSounds/808SD_Med-R8_C2S.wav",
  "/DrumMachineSounds/808TomHi-Kult_C2S.wav"
]);

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pad1: [0, 1, 1, 1]
    };
    this.escFunction = this.escFunction.bind(this);
  }
  handleClick = event => {
    let pad = event.target.name;
    switch (pad) {
      case "1":
        sfx.play("808BD_Med-R8_C2S");
        break;
      case "2":
        sfx.play("808SD_Med-R8_C2S");
        break;
      case "3":
        sfx.play("808TomHi-Kult_C2S");
        break;
    }
  };
  escFunction(event) {
    let pad = event.keyCode;
    switch (pad) {
      case 77:
        sfx.play("808BD_Med-R8_C2S");
        break;
      case 188:
        sfx.play("808SD_Med-R8_C2S");
        break;
      case 190:
        sfx.play("808TomHi-Kult_C2S");
        break;
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }

  render() {
    return (
      <div>
        <div className="grid-container">
          <div className="grid-item">
            <button className="button1" name="1" onClick={this.handleClick} />
          </div>
          <div className="grid-item">
            <button className="button1" name="2" onClick={this.handleClick} />
          </div>
          <div className="grid-item">
            <button className="button1" name="3" onClick={this.handleClick} />
          </div>
          <div className="grid-item">
            <button className="button1" />
          </div>
          <div className="grid-item">
            <button className="button1" />
          </div>
          <div className="grid-item">
            <button className="button1" />
          </div>
          <div className="grid-item">
            <button className="button1" />
          </div>
          <div className="grid-item">
            <button className="button1" />
          </div>
          <div className="grid-item">
            <button className="button1" />
          </div>
          <div className="grid-item">
            <button className="button1" />
          </div>
          <div className="grid-item">
            <button className="button1" />
          </div>
          <div className="grid-item">
            <button className="button1" />
          </div>
          <div className="grid-item">
            <button className="button1" />
          </div>
          <div className="grid-item">
            <button className="button1" />
          </div>
          <div className="grid-item">
            <button className="button1" />
          </div>
          <div className="grid-item">
            <button className="button1" />
          </div>
        </div>
      </div>
    );
  }
}

export default DrumMachine;
