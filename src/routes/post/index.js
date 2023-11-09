import React from "react";
import { Route, Switch } from "react-router-dom";
import Post from "./Post";
import ViewComments from "./ViewComments";
import NotFound from "containers/NotFound";

const PostRoutes = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/list`} component={Post} />
    <Route path={`${match.url}/comments/:id`} component={ViewComments} />
    <Route component={NotFound} />
  </Switch>
);

export default PostRoutes;
