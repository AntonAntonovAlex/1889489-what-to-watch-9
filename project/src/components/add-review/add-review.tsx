import { useParams } from 'react-router-dom';
import { Film } from '../../types/films';
import Logo from '../logo/logo';
import CommentForm from '../comment-form/comment-form';
import { useAppSelector } from '../../hooks';

function AddReview(): JSX.Element {
  const filmsState: Film[] = useAppSelector((state) => state.films);
  const params = useParams();
  const selectedFilm = filmsState.find((film) => film.id === Number(params.id));
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
        <CommentForm/>
      </div>
    </section>

  );
}

export default AddReview;
