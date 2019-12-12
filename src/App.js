import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import Home from "./components/home";
import Test from "./components/test";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faBars
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee, faBars);

class App extends Component {
  state = {};

  constructor() {
    super();
    //console.log("App - CREATED");
  }

  componentDidMount() {
    //console.log("App - MOUNTED");
  }

  // constructor(props) {
  //   super(props);
  // }

  render() {
    //console.log("App - RENDERED");
    return (
      <React.Fragment>
        <Header />
        <main className="container-fluid">
          <Sidebar />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/test" component={Test} />
            </Switch>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
