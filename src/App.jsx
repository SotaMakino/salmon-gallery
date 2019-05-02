import React from "react";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import Benizake from "./Benizake.jsx";
import Sirozake from "./Sirozake.jsx";
import Karahuto from "./Karahuto.jsx";
import Sakura from "./Sakura.jsx";
import Masuno from "./Masuno.jsx";
import Ginzake from "./Ginzake.jsx";
import Main from "./Main.jsx";

export default class App extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>
            <Route path="/Sirozake" component={Sirozake} />
            <Route path="/Karahuto" component={Karahuto} />
            <Route path="/Sakura" component={Sakura} />
            <Route path="/Masuno" component={Masuno} />
            <Route path="/Ginzake" component={Ginzake} />
            <Route path="/Benizake" component={Benizake} />
            <Route path="*" component={Main} />
          </Switch>
        </div>
      </Router>
    );
  }
}
