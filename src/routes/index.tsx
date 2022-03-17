import { Switch, Route } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { Home } from '../pages/Home';

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/home" component={Home} />
    </Switch>
  );
}

