import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import {Film} from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: Film;
  isActive: boolean;
  onMouseEventCallback: MouseEventHandler<HTMLElement>;
}

function FilmCard({film, isActive, onMouseEventCallback}: FilmCardProps): JSX.Element {

  return (
    <article className="small-film-card catalog__films-card" data-id={film.id} key={film.id} onMouseEnter={onMouseEventCallback} onMouseLeave={onMouseEventCallback}>
      <Link className="small-film-card__link" to={`${'/films/'}${film.id}`}>
        <div className="small-film-card__image">
          <VideoPlayer previewVideoLink={film.previewVideoLink} previewImage={film.previewImage} isActive={isActive}/>
        </div>
        <h3 className="small-film-card__title">
          {film.name}
        </h3>
      </Link>
    </article>
  );
}

export default FilmCard;
