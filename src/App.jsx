import React from "react";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import Main from "./Main.jsx";
import Loadable from "react-loadable";

const LoadableSirozake = Loadable({
  loader: () => import("./Sirozake.jsx"),
  loading() {
    return <h1>loading split out code...</h1>;
  }
});

const LoadableKarahuto = Loadable({
  loader: () => import("./Karahuto.jsx"),
  loading() {
    return <h1>loading split out code...</h1>;
  }
});

const LoadableSakura = Loadable({
  loader: () => import("./Sakura.jsx"),
  loading() {
    return <h1>loading split out code...</h1>;
  }
});

const LoadableMasuno = Loadable({
  loader: () => import("./Masuno.jsx"),
  loading() {
    return <h1>loading split out code...</h1>;
  }
});

const LoadableGinzake = Loadable({
  loader: () => import("./Ginzake.jsx"),
  loading() {
    return <h1>loading split out code...</h1>;
  }
});

const LoadableBenizake = Loadable({
  loader: () => import("./Benizake.jsx"),
  loading() {
    return <h1>loading split out code...</h1>;
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>
            <Route path="/Sirozake" component={LoadableSirozake} />
            <Route path="/Karahuto" component={LoadableKarahuto} />
            <Route path="/Sakura" component={LoadableSakura} />
            <Route path="/Masuno" component={LoadableMasuno} />
            <Route path="/Ginzake" component={LoadableGinzake} />
            <Route path="/Benizake" component={LoadableBenizake} />
            <Route path="*" component={Main} />
          </Switch>
        </div>
      </Router>
    );
  }
}
