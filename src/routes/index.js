import React from "react";
import { Switch, Route } from "react-router-dom";

import MainRouts from "./main";
import UserRoutes from "./user";
import PostRoutes from "./post";
import JobRoutes from "./job";
import CompanyRoutes from "./company";
import DataRoutes from "./data";
import AbuseReport from "./abuseReport";
import NotFound from "containers/NotFound";

const BeApp = ({ match }) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}main`} component={MainRouts} />
      <Route path={`${match.url}user`} component={UserRoutes} />
      <Route path={`${match.url}post`} component={PostRoutes} />
      <Route path={`${match.url}job`} component={JobRoutes} />
      <Route path={`${match.url}company`} component={CompanyRoutes} />
      <Route path={`${match.url}data`} component={DataRoutes} />
      <Route path={`${match.url}abuseReport`} component={AbuseReport} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default BeApp;
