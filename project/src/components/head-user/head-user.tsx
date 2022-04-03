import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { store } from '../../store';
import { checkAuthAction, fetchFilmsAction, fetchPromoFilmAction, fetchUserFilmsAction, logoutAction } from '../../store/api-actions';
import { getAvatarUrl } from '../../store/film-data/selectors';

function HeadUser(): JSX.Element {
  const avatarUrl = useAppSelector(getAvatarUrl);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div
          className="user-block__avatar"
          onClick={() => {
            store.dispatch(fetchUserFilmsAction());
            navigate(AppRoute.MyList);
          }}
        >
          <img
            src={avatarUrl}
            alt="User avatar"
            width={63}
            height={63}
          />
        </div>
      </li>
      <li className="user-block__item">
        <Link
          className="user-block__link"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
            store.dispatch(fetchFilmsAction());
            store.dispatch(fetchPromoFilmAction());
            store.dispatch(checkAuthAction());
          }}
          to={AppRoute.Main}
        >
          Sign out
        </Link>
      </li>
    </ul>
  );
}

export default HeadUser;
