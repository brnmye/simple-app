import React, { Component } from "react";
import simpleSFX from "simple-sfx";
const sfx = new simpleSFX([
  "/DrumMachineSounds/808BD_Med-R8_C2S.wav",
  "/DrumMachineSounds/808SD_Med-R8_C2S.wav",
  "/DrumMachineSounds/808TomHi-Kult_C2S.wav"
]);

const color1 = "flex-1 bg-grey h-12";
const color2 = "flex-1 bg-grey-light h-12";
class DrumMachine2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pad1: [0, 1, 1, 1],
      beat: 0,
      color: "flex-1 bg-grey h-12",
      color2: "flex-1 bg-grey-light h-12",
      tempo: 500
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
    this.huh();
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }
  handleClick = event => {
    if (event.target.className === color1) {
      event.target.className = this.state.color2;
    } else {
      event.target.className = this.state.color;
    }
  };

  huh = () => {
    setTimeout(sfx.play("808BD_Med-R8_C2S"), this.state.tempo);
    this.setState({ beat: this.state.beat + 1 });
  };

  render() {
    return (
      <div className="flex mb-4">
        <button className="flex-1 bg-grey-light h-12">Kick</button>

        <button className={this.state.color} onClick={this.handleClick}>
          Kick2
        </button>
        <button className={this.state.color} onClick={this.handleClick}>
          Kick 3
        </button>
        <button className={this.state.color} onClick={this.handleClick} />
        <button className={this.state.color} onClick={this.handleClick} />
        <button className={this.state.color} onClick={this.handleClick} />
        <button className={this.state.color} onClick={this.handleClick} />
        <button className={this.state.color} onClick={this.handleClick} />
        <div className="flex-1 bg-grey-light h-12" />
        <div className="flex-1 bg-grey h-12" />
        <div className="flex-1 bg-grey-light h-12" />
      </div>
    );
  }
}

export default DrumMachine2;
