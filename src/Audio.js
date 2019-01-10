import React, { Component } from "react";
import ReactPlayer from "react-player";

class Audio extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container pt-3">
          <div className="row justify-content-md-center">
            <ReactPlayer url="https://soundcloud.com/yessiejamez/drown-you-out-you-saved-me-ft-serpentine-man" />
          </div>
        </div>
        <div className="container pt-3 ">
          <div className="row justify-content-md-center">
            <ReactPlayer url="https://youtu.be/7oa2KR7Ti5g" />
          </div>
        </div>
        <div className="container pt-3">
          <div className="row justify-content-md-center">
            <ReactPlayer url="https://soundcloud.com/13-dreams-779929900/kaleidoscopes-beach-scenes" />
          </div>
        </div>
        <div className="container pt-3">
          <div className="row justify-content-md-center">
            <ReactPlayer url="https://youtu.be/Ohlwj4TucBg" />
          </div>
        </div>
        <div className="container pt-3">
          <div className="row justify-content-md-center">
            <ReactPlayer url="https://soundcloud.com/13-dreams-779929900/youre-learning" />
          </div>
        </div>
      </div>
    );
  }
}
// Maybe Cut these down to little samples of each track and make nice visual playlist
export default Audio;
