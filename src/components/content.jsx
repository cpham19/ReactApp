import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Test from "./test";

class Content extends Component {
  render() {
    return (
      <div id="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/test" component={Test} />
        </Switch>
      </div>
    );
  }
}

export default Content;
