import { useState } from 'react';
import { Film } from '../../types/films';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Film[];
}

function Filmslist({films}: FilmListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeFilm, setActiveFilm] = useState();

  const filmChangeHandle = (evt: { currentTarget: any; }) => {
    setActiveFilm(evt.currentTarget.getAttribute('data-id'));
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => (<FilmCard film={film} key={film.id} onMouseEnterCallback={filmChangeHandle}/>))}

    </div>
  );
}

export default Filmslist;
