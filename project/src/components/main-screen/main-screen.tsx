import Logo from '../logo/logo';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import HeadUser from '../head-user/head-user';
import HeadGuest from '../head-guest/head-guest';
import Catalog from '../catalog/catalog';
import { getPromoFilm } from '../../store/film-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { useNavigate } from 'react-router-dom';
import FavoriteButton from '../favorite-button/favorite-button';

function MainScreen(): JSX.Element {
  const promoFilm = useAppSelector(getPromoFilm);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

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
                <button
                  onClick={() => navigate(`${'/player/'}${promoFilm?.id}`)}
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <FavoriteButton film={promoFilm} isPromo/>
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
