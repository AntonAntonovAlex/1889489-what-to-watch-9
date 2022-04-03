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

  const {id, previewImage, previewVideoLink, name} = film;

  return (
    <article className="small-film-card catalog__films-card" data-id={id} key={id} onMouseEnter={onMouseEventCallback} onMouseLeave={onMouseEventCallback}>
      <Link className="small-film-card__link" to={`${'/films/'}${id}`}>
        <div className="small-film-card__image">
          <VideoPlayer previewVideoLink={previewVideoLink} previewImage={previewImage} isActive={isActive}/>
        </div>
        <h3 className="small-film-card__title">
          {name}
        </h3>
      </Link>
    </article>
  );
}

export default FilmCard;
