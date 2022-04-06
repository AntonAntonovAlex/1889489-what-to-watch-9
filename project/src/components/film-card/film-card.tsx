import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import {Film} from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: Film;
  isActive: boolean;
  onEventStartCallback: MouseEventHandler<HTMLElement>;
  onEventStopCallback: MouseEventHandler<HTMLElement>;
}

function FilmCard({film, isActive, onEventStartCallback, onEventStopCallback}: FilmCardProps): JSX.Element {

  const {id, previewImage, previewVideoLink, name} = film;
  return (
    <article className="small-film-card catalog__films-card" data-id={id} key={id} onMouseEnter={onEventStartCallback} onMouseLeave={onEventStopCallback}>
      <Link className="small-film-card__link" to={`${'/films/'}${id}`} onClick={onEventStopCallback}>
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
