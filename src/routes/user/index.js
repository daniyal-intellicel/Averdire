import React from "react";
import { Route, Switch } from "react-router-dom";
import ManageUser from "./ManageUser";
import ViewUser from "./ViewUser";
import NotFound from "containers/NotFound";

const UserRoutes = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/manage`} component={ManageUser} />
    <Route path={`${match.url}/view/:id`} component={ViewUser} />
    <Route component={NotFound} />
  </Switch>
);

export default UserRoutes;
