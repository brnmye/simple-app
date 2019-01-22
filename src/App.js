import React, { Component } from "react";
import aws_exports from "./aws-exports";
import NavBarPage from "./NavBar";
//import { withAuthenticator } from "aws-amplify-react";
import "./App.css";
import Amplify from "aws-amplify";
import TodoList from "./Todos/TodoList";
import { Route } from "react-router-dom";
import Home from "./Home";
import Audio from "./Audio";
import PersonForm from "./Person/PersonForm";
import IndividualPerson from "./Person/IndividualPerson";
import BoxTest from "./BoxTest";
import BackgroundHeader from "./backgroundHeader";
import Footer from "./Footer";
import DrumMachine2 from "./DrumMachine/DrumMachine2";

Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <div>
            <NavBarPage className="navbar" />
            <BackgroundHeader />
          </div>

          <Route exact path="/" component={Home} />
          <Route exact path="/TodoList" component={TodoList} />
          <Route exact path="/Audio" component={Audio} />
          <Route exact path="/Person" component={PersonForm} />
          <Route exact path={"/Person/:id"} component={IndividualPerson} />
          <Route exact path={"/BoxTest"} component={BoxTest} />
          <Route exact path={"/DrumMachine2"} component={DrumMachine2} />
          <div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

//export default withAuthenticator(App, true);
export default App;
