import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Content from "./components/content";
import Footer from "./components/footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faBars,
  faHome
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee, faBars, faHome);

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
          <div className="wrapper">
            <Sidebar />
            <Content />
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
