import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./Components/Auth";
import Dashboard from "./Components/Dasboard/Dashboard";
import Form from "./Components/Form/Form";
import Post from "./Components/Post/Post";

export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route component={Dashboard} path="/dashboard" />
    <Route component={Post} path="/post/:postid" />
    <Route component={Form} path="/new" />
  </Switch>
);
