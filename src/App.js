import "./App.css";

import { Navbar, CreateNomination, ViewNomination } from "./components";

import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Layout className="layout">
        <Navbar></Navbar>
        <div className="layout__content">
          <Router>
            <Switch>
              <Route exact path="/" children={<CreateNomination />} />
              <Route path="/:id" children={<ViewNomination />} />
            </Switch>
          </Router>
        </div>
      </Layout>
    </div>
  );
}

export default App;
