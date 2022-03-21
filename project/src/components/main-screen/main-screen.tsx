//import {Film} from '../../types/film';
import Logo from '../logo/logo';
//import Filmslist from '../films-list/films-list';
//import Genreslist from '../genres-list/genres-list';
import { useAppSelector } from '../../hooks';
//import ShowMoreButton from '../show-more-button/show-more-button';
import { AuthorizationStatus } from '../../const';
import HeadUser from '../head-user/head-user';
import HeadGuest from '../head-guest/head-guest';
import Catalog from '../catalog/catalog';

function MainScreen(): JSX.Element {
  //const filmsState: Film[] = useAppSelector((state) => state.films);
  const promoFilm = useAppSelector((state) => state.promoFilm);
  //const genreState = useAppSelector((state) => state.genre);
  //const countFilmsState = useAppSelector((state) => state.countFilms);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  //const sortedFilms = genreState === 'All genres'? filmsState : filmsState.filter((film) => film.genre === genreState);

  /*const sortedSlicedFilms = countFilmsState > sortedFilms.length ?
    sortedFilms :
    sortedFilms.slice(0, countFilmsState);*/

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
          {authorizationStatus === AuthorizationStatus.Auth ? <HeadUser/> : <HeadGuest/>}
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
        <Catalog/>
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
