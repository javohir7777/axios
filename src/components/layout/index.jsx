import React, { Component, Fragment } from "react";
import Header from "../header";
import { Outlet } from "react-router-dom";

export class Layoute extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main className="container">
          <Outlet />
        </main>
      </Fragment>
    );
  }
}

export default Layoute;
