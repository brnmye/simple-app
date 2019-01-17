import React, { Component } from "react";

class BoxTest extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            One of three columns
            <br /> Supppp
            <br />
            HUHHh
            <br /> Keep it in the rowww
          </div>
          <div className="col-sm">
            One of three columns
            <br />
            In the second row bahhh. <br /> Still, aw yeaaa
          </div>
          <div className="col-sm sidebar-sticky border">Right Side Bar</div>
        </div>
      </div>
    );
  }
}

export default BoxTest;
