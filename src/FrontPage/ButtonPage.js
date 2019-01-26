import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIgloo,
  faCoffee,
  faCheckSquare,
  faSpinner,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

library.add(faIgloo, faCoffee, faCheckSquare, faSpinner, faEnvelope);

class ButtonPage extends Component {
  state = {
    mailNum: 75
  };
  render() {
    return (
      <div>
        Hello Resume Main Page: <FontAwesomeIcon icon="igloo" spin />
        <FontAwesomeIcon icon={faCoffee} className="fa-2x" />
        <FontAwesomeIcon icon={faCheckSquare} />
        <FontAwesomeIcon icon="spinner" pulse />
        <span className="fa-layers fa-fw fa-4x cursor-pointer" type="clickable">
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="fa-layers-counter" style={{ background: "Tomato" }}>
            {this.state.mailNum}
          </span>
        </span>
      </div>
    );
  }
}

export default ButtonPage;
