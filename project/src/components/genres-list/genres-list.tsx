import { GenreType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre } from '../../store/action';


function Genreslist(): JSX.Element {
  const filmsState = useAppSelector((state) => state.films);
  const genreState = useAppSelector((state) => state.genre);
  const filmsStateAllGenres =Array.from(new Set(filmsState.map((film) => film.genre)));

  const dispatch = useAppDispatch();

  return (
    <ul className="catalog__genres-list">
      <li className={genreState === 'All genres' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}>
        <a href="#todo" className="catalog__genres-link"
          onClick={(evt: { currentTarget:  HTMLElement }) => {
            dispatch(changeGenre('All genres'));
          }}
        >
            All genres
        </a>
      </li>
      {filmsStateAllGenres.map((genre) => (
        <li className={genreState === genre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} key={genre}>
          <a href="#todo" className="catalog__genres-link"
            onClick={(evt: { currentTarget:  HTMLElement }) => {
              dispatch(changeGenre(genre));
            }}
          >
            {GenreType.get(genre)}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Genreslist;
