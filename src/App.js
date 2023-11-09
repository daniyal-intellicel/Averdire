import React from "react";
import { Provider } from "react-redux";

import "./styles/App.css";
import "./assets/vendors/style";
import "./styles/wieldy.less";

import store from "./redux/store";
import Averdire from "./containers/Averdire";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={Averdire} />
      </Router>
    </Provider>
  );
}

export default App;
