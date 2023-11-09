import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./Dashboard";
import NotFound from "containers/NotFound";

const MainRoutes = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/dashboard`} component={Dashboard} />
    <Route component={NotFound} />
  </Switch>
);

export default MainRoutes;
