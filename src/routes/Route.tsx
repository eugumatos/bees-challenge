import { ComponentType } from 'react';
import {
  Route as ReactDOMRoute, 
  RouteProps as ReactDOMRouteProps,
  Redirect
} from 'react-router-dom';

import { useUser } from '../hooks/useUser';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

export function Route({ isPrivate = false, component: Component, ...rest }: RouteProps) {
  const { user } = useUser();

  return (
    <ReactDOMRoute 
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect to={{ 
            pathname: isPrivate ? '/' : '/home',
            state: { from: location } }} />
        );
      }}
    />
  )
};

