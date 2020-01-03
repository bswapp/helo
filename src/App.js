import React from "react";
import { Provider } from "react-redux";
import routes from "./routes";
import store from "./ducks/store";
import Nav from "./Components/Nav/Nav";
import "./App.css";
import { withRouter } from "react-router-dom";

function App(props) {
  return (
    <Provider store={store}>
      <div>
        {props.location.pathname === "/" ? null : <Nav />}
        {routes}
      </div>
    </Provider>
  );
}

export default withRouter(App);
