import { useState } from 'react';
import { Film } from '../../types/films';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Film[];
}

function Filmslist({films}: FilmListProps): JSX.Element {
  const [activeFilm, setActiveFilm] = useState(0);

  const filmChangeHandle = (evt: { currentTarget: any; }) => {
    setActiveFilm(activeFilm === evt.currentTarget.getAttribute('data-id') ? 0 : evt.currentTarget.getAttribute('data-id'));
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => (<FilmCard film={film} isActive={film.id === +activeFilm} key={film.id} onMouseEventCallback={filmChangeHandle}/>))}

    </div>
  );
}

export default Filmslist;
