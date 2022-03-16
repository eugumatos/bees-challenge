import { Switch } from 'react-router-dom';
import { Route } from './Route';

import { SignIn } from '../pages/SignIn';
import { Home } from '../pages/Home';


export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/home" component={Home} isPrivate />
    </Switch>
  );
}

