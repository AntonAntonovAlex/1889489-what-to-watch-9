import { PropsWithChildren } from 'react';
import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type PrivateRouteProps = PropsWithChildren<{
  authorizationStatus: AuthorizationStatus;
  isSignIn: boolean;
}>;

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, isSignIn, children} = props;

  if (isSignIn) {
    return (
      (authorizationStatus === AuthorizationStatus.Auth)
        ? <Navigate to={AppRoute.Main}/>
        : children as JSX.Element
    );
  }

  return (
    (authorizationStatus === AuthorizationStatus.Auth)
      ? children as JSX.Element
      : <Navigate to={AppRoute.SignIn}/>
  );
}

export default PrivateRoute;
