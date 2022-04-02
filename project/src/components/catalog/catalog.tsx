import { useAppSelector } from '../../hooks';
import { getFilms } from '../../store/film-data/selectors';
import { loadedFilmsNumber, getGenre } from '../../store/film-process/selectors';
import { Film } from '../../types/film';
import Filmslist from '../films-list/films-list';
import Genreslist from '../genres-list/genres-list';
import ShowMoreButton from '../show-more-button/show-more-button';

function Catalog(): JSX.Element {
  const filmsList: Film[] = useAppSelector(getFilms);
  const countfilmsList = useAppSelector(loadedFilmsNumber);
  const genreState = useAppSelector(getGenre);

  const sortedFilms = genreState === 'All genres'? filmsList : filmsList.filter((film) => film.genre === genreState);

  const sortedSlicedFilms = countfilmsList > sortedFilms.length ?
    sortedFilms :
    sortedFilms.slice(0, countfilmsList);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      {!!filmsList.length && <Genreslist/>}
      <Filmslist films={sortedSlicedFilms}/>
      {!(countfilmsList >= sortedFilms.length) && <ShowMoreButton/>}
    </section>
  );
}

export default Catalog;
