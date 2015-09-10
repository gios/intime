import { Route } from "react-router";
import React from "react";

import AppController from "./components/AppController";

export default (
  <Route>
    <Route path="/favicon.ico" />
    <Route path="/" handler={ AppController } />
  </Route>
);
