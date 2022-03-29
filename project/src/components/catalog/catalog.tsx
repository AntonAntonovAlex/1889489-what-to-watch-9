import { useAppSelector } from '../../hooks';
import { getFilms } from '../../store/film-data/selectors';
import { getCountFilms, getGenre } from '../../store/film-process/selectors';
import { Film } from '../../types/film';
import Filmslist from '../films-list/films-list';
import Genreslist from '../genres-list/genres-list';
import ShowMoreButton from '../show-more-button/show-more-button';

function Catalog(): JSX.Element {
  const filmsState: Film[] = useAppSelector(getFilms);
  const countFilmsState = useAppSelector(getCountFilms);
  const genreState = useAppSelector(getGenre);

  const sortedFilms = genreState === 'All genres'? filmsState : filmsState.filter((film) => film.genre === genreState);

  const sortedSlicedFilms = countFilmsState > sortedFilms.length ?
    sortedFilms :
    sortedFilms.slice(0, countFilmsState);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      {!!filmsState.length && <Genreslist/>}
      <Filmslist films={sortedSlicedFilms}/>
      {!(countFilmsState >= sortedFilms.length) && <ShowMoreButton/>}
    </section>
  );
}

export default Catalog;
