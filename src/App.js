import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import TodoApp from "./components/TodoApp";
import Login from "./components/Login";

export default class App extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Route path="/" exact component={Login} />
        <Route path="/todoapp" component={TodoApp} />
      </Fragment>
    );
  }
}
