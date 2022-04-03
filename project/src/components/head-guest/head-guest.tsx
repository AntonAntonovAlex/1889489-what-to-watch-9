import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function HeadGuest(): JSX.Element {

  return (
    <div className="user-block">
      <Link
        className="user-block__link"
        to={AppRoute.SignIn}
      >
        Sign in
      </Link>
    </div>
  );
}

export default HeadGuest;
