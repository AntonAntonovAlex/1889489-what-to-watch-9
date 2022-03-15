import { GenreType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre } from '../../store/action';


function Genreslist(): JSX.Element {
  const filmsState = useAppSelector((state) => state.films);
  const currentGenre = useAppSelector((state) => state.genre);
  const filmsStateAllGenres =filmsState.map((film) => film.genre).filter((element, index, genres) => genres.indexOf(element) === index);

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
      {filmsStateAllGenres.map((genre) => (
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
