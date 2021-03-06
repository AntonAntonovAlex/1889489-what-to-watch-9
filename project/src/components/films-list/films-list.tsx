import { useState } from 'react';
import { Film } from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Film[];
}

function Filmslist({films}: FilmListProps): JSX.Element {

  const [activeFilm, setActiveFilm] = useState(0);

  const handleFilmStart = (evt: { currentTarget:  HTMLElement }) => {
    const currentId = Number(evt.currentTarget.getAttribute('data-id'));
    setActiveFilm(activeFilm === currentId ? 0 : currentId);
  };

  const handleFilmStop = () => {
    setActiveFilm(0);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => (<FilmCard film={film} isActive={film.id === +activeFilm} key={film.id} onEventStartCallback={handleFilmStart} onEventStopCallback={handleFilmStop}/>))}

    </div>
  );
}

export default Filmslist;
