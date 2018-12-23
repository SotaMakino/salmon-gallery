import  React from 'react';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import Benizake from './Benizake';
import Sirozake from './Sirozake';
import Karahuto from './Karahuto';
import Sakura from './Sakura';
import Masuno from './Masuno';
import Ginzake from './Ginzake';
import Main from './Main';

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
    )
  }
}