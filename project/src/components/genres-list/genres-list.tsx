import { GenreType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilms } from '../../store/film-data/selectors';
import { changeGenre } from '../../store/film-process/film-process';
import { getGenre } from '../../store/film-process/selectors';

function Genreslist(): JSX.Element {
  const filmsList = useAppSelector(getFilms);
  const currentGenre = useAppSelector(getGenre);

  const filmsListAllGenres =filmsList.map((film) => film.genre).filter((element, index, genres) => genres.indexOf(element) === index).slice(0, 9);

  const dispatch = useAppDispatch();

  return (
    <ul className="catalog__genres-list">
      <li className={currentGenre === 'All genres' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}>
        <a href="#todo" className="catalog__genres-link"
          onClick={(evt: { currentTarget:  HTMLElement }) => {
            dispatch(changeGenre('All genres'));
          }}
        >
            All genres
        </a>
      </li>
      {filmsListAllGenres.map((genre) => (
        <li className={currentGenre === genre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} key={genre}>
          <a href="#todo" className="catalog__genres-link"
            onClick={(evt: { currentTarget:  HTMLElement }) => {
              dispatch(changeGenre(genre));
            }}
          >
            {GenreType[genre]}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Genreslist;
