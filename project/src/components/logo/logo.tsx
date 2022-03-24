import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { resetState } from '../../store/film-process/film-process';

function Logo(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="logo"
      onClick={(evt: { currentTarget:  HTMLElement }) => {
        dispatch(resetState());
      }}
    >
      <Link to={AppRoute.Main} className="logo__link logo__link--light">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
