import { AuthorizationStatus } from './const';

export const isAuthorizationStatusUnknown = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;
