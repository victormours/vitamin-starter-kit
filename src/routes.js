import { Router, Route, browserHistory } from 'react-router';
import Index from './Index';
import About from './About';

export default (
    <Router history={browserHistory}>
      <Route path="/" component={Index} />
      <Route path="/about" component={About} />
    </Router>
);
