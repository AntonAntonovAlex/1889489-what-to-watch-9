import { useAppSelector } from '../../hooks';
import { Film } from '../../types/film';
import Filmslist from '../films-list/films-list';
import Genreslist from '../genres-list/genres-list';
import ShowMoreButton from '../show-more-button/show-more-button';

function Catalog(): JSX.Element {
  const filmsState: Film[] = useAppSelector((state) => state.films);
  const countFilmsState = useAppSelector((state) => state.countFilms);
  const genreState = useAppSelector((state) => state.genre);

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
