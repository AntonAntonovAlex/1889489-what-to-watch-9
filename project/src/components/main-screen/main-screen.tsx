import {Film} from '../../types/films';
import Logo from '../logo/logo';
import Filmslist from '../films-list/films-list';
import Genreslist from '../genres-list/genres-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ShowMoreButton from '../show-more-button/show-more-button';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../store/api-actions';

function MainScreen(): JSX.Element {
  const filmsState: Film[] = useAppSelector((state) => state.films);
  const promoFilm = useAppSelector((state) => state.promoFilm);
  const genreState = useAppSelector((state) => state.genre);
  const countFilmsState = useAppSelector((state) => state.countFilms);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const avatarUrl = useAppSelector((state) => state.avatarUrl);

  const dispatch = useAppDispatch();

  const sortedFilms = genreState === 'All genres'? filmsState : filmsState.filter((film) => film.genre === genreState);

  const sortedSlicedFilms = countFilmsState > sortedFilms.length ?
    sortedFilms :
    sortedFilms.slice(0, countFilmsState);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={promoFilm?.backgroundImage}
            alt={promoFilm?.name}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo />
          { authorizationStatus === AuthorizationStatus.Auth ?
            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
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
                  }}
                  to={AppRoute.Main}
                >
                  Sign out
                </Link>
              </li>
            </ul> :
            <div className="user-block">
              <Link
                className="user-block__link"
                to={AppRoute.SignIn}
              >
          Sign in
              </Link>
            </div>}
        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={promoFilm?.posterImage}
                alt={promoFilm?.name}
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm?.genre}</span>
                <span className="film-card__year">{promoFilm?.released}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          {!!filmsState.length && <Genreslist/>}
          <Filmslist films={sortedSlicedFilms}/>
          {!(countFilmsState >= sortedFilms.length) && <ShowMoreButton/>}
        </section>
        <footer className="page-footer">
          <div className="logo">
            <a href="#todo" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>

  );
}

export default MainScreen;
