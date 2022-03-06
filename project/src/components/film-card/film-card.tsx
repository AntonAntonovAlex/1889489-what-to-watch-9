import { Link } from 'react-router-dom';
import {Film} from '../../types/films';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: Film;
  isActive: boolean;
  onMouseEventCallback: any;
}

function FilmCard({film, isActive, onMouseEventCallback}: FilmCardProps): JSX.Element {

  // const [activeFilm, setActiveFilm] = useState(isActive);


  return (
    <article className="small-film-card catalog__films-card" data-id={film.id} key={film.id} onMouseEnter={onMouseEventCallback} onMouseLeave={onMouseEventCallback}>
      <div className="small-film-card__image">
        <VideoPlayer previewVideoLink={film.previewVideoLink} previewImage={film.previewImage} isActive={isActive}/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${'/films/'}${film.id}`}>
          {film.name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
