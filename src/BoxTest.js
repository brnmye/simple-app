import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";

class BoxTest extends Component {
  state = {};
  render() {
    let responsive = {
      width: "91%",
      height: "auto"
    };
    return (
      <div>
        <div>
          <Row>
            <Col xs={12} sm={3} md={3} lg={3} className="border">
              Column 1
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
              Column 2<br />
              <img
                src="./Backyard.jpg"
                alt="tart"
                style={responsive}
                className="border"
              />
            </Col>
            <Col xs={12} sm={3} md={3} lg={3} className="border">
              Column 3
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default BoxTest;
