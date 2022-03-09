import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { TabType } from '../../const';
import { Film } from '../../types/films';
import Filmslist from '../films-list/films-list';
import Logo from '../logo/logo';
import Tabs from '../tabs/tabs';

type MoviePageProps = {
  films: Film[];
}

function MoviePage({films}: MoviePageProps): JSX.Element {
  const params = useParams();
  const selectedFilm = films.find((film) => film.id === Number(params.id));
  const similarFilms = films.filter((film) => film.genre === selectedFilm?.genre && film.id !== selectedFilm.id).slice(0,4);
  const [typeTabs, setTypeTabs] = useState(TabType.Overview);
  const [activeClassFilm, setActiveClassFilm] = useState([true, false, false]);

  return (
    <>
      <div className="visually-hidden">
        {/* inject:svg */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <symbol id="add" viewBox="0 0 19 20">
            {/* Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch */}
            <title>+</title>
            <desc>Created with Sketch.</desc>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth={1}
              fill="none"
              fillRule="evenodd"
            >
              <polygon
                id="+"
                fill="#EEE5B5"
                points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859"
              />
            </g>
          </symbol>
          <symbol id="full-screen" viewBox="0 0 27 27">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z"
              fill="#FFF9D9"
              fillOpacity="0.7"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z"
              fill="#FFF9D9"
              fillOpacity="0.7"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z"
              fill="#FFF9D9"
              fillOpacity="0.7"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z"
              fill="#FFF9D9"
              fillOpacity="0.7"
            />
          </symbol>
          <symbol id="in-list" viewBox="0 0 18 14">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z"
              fill="#EEE5B5"
            />
          </symbol>
          <symbol id="pause" viewBox="0 0 14 21">
            <symbol id="play-s" viewBox="0 0 19 19">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0L19 9.5L0 19V0Z"
                fill="#EEE5B5"
              />
            </symbol>
            {/* Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch */}
            <title>Artboard</title>
            <desc>Created with Sketch.</desc>
            <g
              id="Artboard"
              stroke="none"
              strokeWidth={1}
              fill="none"
              fillRule="evenodd"
            >
              <polygon
                id="Line"
                fill="#EEE5B5"
                fillRule="nonzero"
                points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21"
              />
              <polygon
                id="Line"
                fill="#EEE5B5"
                fillRule="nonzero"
                points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21"
              />
            </g>
          </symbol>
        </svg>
        {/* endinject */}
      </div>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={selectedFilm?.backgroundImage}
              alt={selectedFilm?.name}
            />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <Logo />
            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img
                    src="img/avatar.jpg"
                    alt="User avatar"
                    width={63}
                    height={63}
                  />
                </div>
              </li>
              <li className="user-block__item">
                <a href="#todo" className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{selectedFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{selectedFilm?.genre}</span>
                <span className="film-card__year">{selectedFilm?.released}</span>
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
                <Link to={`${'/films/'}${selectedFilm?.id}${'/review'}`} className="btn film-card__button">
              Add review
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={selectedFilm?.posterImage}
                alt={selectedFilm?.name}
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className={`film-nav__item ${activeClassFilm[0] ? 'film-nav__item--active' : ''}`}>
                    <a href="#todo" className="film-nav__link"
                      onClick={(evt: React.MouseEvent<HTMLAnchorElement>) => {
                        evt.preventDefault();
                        setTypeTabs(TabType.Overview);
                        setActiveClassFilm([true, false, false]);
                      }}
                    >
                  Overview
                    </a>
                  </li>
                  <li className={`film-nav__item ${activeClassFilm[1] ? 'film-nav__item--active' : ''}`} >
                    <a href="#todo" className="film-nav__link"
                      onClick={(evt: React.MouseEvent<HTMLAnchorElement>) => {
                        evt.preventDefault();
                        setTypeTabs(TabType.Details);
                        setActiveClassFilm([false, true, false]);
                      }}
                    >
                  Details
                    </a>
                  </li>
                  <li className={`film-nav__item ${activeClassFilm[2] ? 'film-nav__item--active' : ''}`} >
                    <a href="#todo" className="film-nav__link"
                      onClick={(evt: React.MouseEvent<HTMLAnchorElement>) => {
                        evt.preventDefault();
                        setTypeTabs(TabType.Reviews);
                        setActiveClassFilm([false, false, true]);
                      }}
                    >
                  Reviews
                    </a>
                  </li>
                </ul>
              </nav>
              {selectedFilm && <Tabs type={typeTabs} selectedFilm={selectedFilm}/>}
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">{similarFilms? '' : 'More like this'}</h2>
          {<Filmslist films={similarFilms}/>}
        </section>
        <footer className="page-footer">
          <Logo />
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>

  );
}

export default MoviePage;
