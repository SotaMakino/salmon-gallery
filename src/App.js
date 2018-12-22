import  React from 'react';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import Benizake from './Benizake';
import Main from './Main';

export default class App extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>
            <Route path="/benizake/" component={Benizake} />
            <Route path="*" component={Main} />
          </Switch>
        </div>
      </Router>
    )
  }
}