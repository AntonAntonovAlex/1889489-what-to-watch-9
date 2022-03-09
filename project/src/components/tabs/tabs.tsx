import {TabType} from '../../const';
import {Film} from '../../types/films';
import {reviews} from '../../mocks/reviews';

type TabsProps = {
  selectedFilm: Film;
  type: TabType;
}

function getTextRating(raiting: number) {
  if (0 <= raiting && raiting < 3) {return 'Bad';}
  if (3 <= raiting && raiting < 5) {return 'Normal';}
  if (5 <= raiting && raiting < 8) {return 'Good';}
  if (8 <= raiting && raiting < 10) {return 'Very good';}
  if (raiting === 10) {return 'Awesome';}
}

function Tabs({type, selectedFilm}: TabsProps): JSX.Element {
  switch (type) {
    case TabType.Overview:
      return (
        <>
          <div className="film-rating">
            <div className="film-rating__score">{selectedFilm.rating}</div>
            <p className="film-rating__meta">
              <span className="film-rating__level">{getTextRating(selectedFilm.rating)}</span>
              <span className="film-rating__count">{selectedFilm.scoresCount} ratings</span>
            </p>
          </div>
          <div className="film-card__text">
            <p>
              {selectedFilm.description}
            </p>
            <p>
            </p>
            <p className="film-card__director">
              <strong>Director: {selectedFilm.director}</strong>
            </p>
            <p className="film-card__starring">
              <strong>
                Starring: {selectedFilm.starring.join(', ')}
              </strong>
            </p>
          </div>
        </>
      );
    case TabType.Details:
      return (
        <div className="film-card__text film-card__row">
          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Director</strong>
              <span className="film-card__details-value">{selectedFilm.director}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Starring</strong>
              <span className="film-card__details-value">
                {selectedFilm.starring.map((starring, index) => <span key={starring}>{starring}{index === selectedFilm.starring.length-1 ? '' : ','}<br/></span>)}
              </span>
            </p>
          </div>
          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Run Time</strong>

              <span className="film-card__details-value">{Math.trunc(selectedFilm.runTime/60)}h {selectedFilm.runTime % 60}m</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Genre</strong>
              <span className="film-card__details-value">{selectedFilm.genre}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Released</strong>
              <span className="film-card__details-value">{selectedFilm.released}</span>
            </p>
          </div>
        </div>
      );
    case TabType.Reviews:
      return (
        <div className="film-card__reviews film-card__row">
          <div className="film-card__reviews-col">
            {reviews.slice(0, (reviews.length+1)/2).map((review) => (
              <div className="review" key={review.id} >
                <blockquote className="review__quote">
                  <p className="review__text">
                    {review.comment}
                  </p>
                  <footer className="review__details">
                    <cite className="review__author">{review.user.name}</cite>
                    <time className="review__date" dateTime="2016-12-24">
                      {new Date(review.date).toDateString()}
                    </time>
                  </footer>
                </blockquote>
                <div className="review__rating">{review.rating}</div>
              </div>
            ))}
          </div>
          {reviews.slice((reviews.length+1)/2).map((review) => (
            <div className="review" key={review.id} >
              <blockquote className="review__quote">
                <p className="review__text">
                  {review.comment}
                </p>
                <footer className="review__details">
                  <cite className="review__author">{review.user.name}</cite>
                  <time className="review__date" dateTime="2016-12-24">
                    {new Date(review.date).toDateString()}
                  </time>
                </footer>
              </blockquote>
              <div className="review__rating">{review.rating}</div>
            </div>
          ))}
        </div>
      );
  }
}

export default Tabs;