import Logo from '../logo/logo';

function NotFoundScreen(): JSX.Element {
  return (
    <header className="page-header user-page__head">
      <Logo />
      <h1 className="page-title user-page__title">404 Not Foun</h1>
    </header>
  );
}

export default NotFoundScreen;
