import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "../Layout";
import routes from "../../routes";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
