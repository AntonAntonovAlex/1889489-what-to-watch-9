import { useParams } from 'react-router-dom';
import { Film } from '../../types/film';
import Logo from '../logo/logo';
import CommentForm from '../comment-form/comment-form';
import { useAppSelector } from '../../hooks';
import HeadUser from '../head-user/head-user';
import HeadGuest from '../head-guest/head-guest';
import { AuthorizationStatus } from '../../const';
import { getFilms } from '../../store/film-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function AddReview(): JSX.Element {
  const filmsList: Film[] = useAppSelector(getFilms);
  const params = useParams();
  const selectedFilm = filmsList.find((film) => film.id === Number(params.id));
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={selectedFilm?.backgroundImage}
            alt={selectedFilm?.name}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">
                  {selectedFilm?.name}
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a href="#todo" className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          { authorizationStatus === AuthorizationStatus.Auth ? <HeadUser/> : <HeadGuest/>}
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img
            src={selectedFilm?.posterImage}
            alt={selectedFilm?.name}
            width={218}
            height={327}
          />
        </div>
      </div>
      <div className="add-review">
        <CommentForm filmId={Number(params.id)}/>
      </div>
    </section>

  );
}

export default AddReview;
