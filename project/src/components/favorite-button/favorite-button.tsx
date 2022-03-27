import { useAppDispatch } from '../../hooks';
import { changeStatusFilmAction } from '../../store/api-actions';
import { Film } from '../../types/film';

type FavoriteButtonProps = {
  film: Film | null;
  isPromo: boolean
}

function FavoriteButton({film, isPromo }: FavoriteButtonProps): JSX.Element {
  const dispatch = useAppDispatch();

  function onFavoriteButtonClick() {
    if (film) {
      const statusFilm = film.isFavorite ? 0 : 1;
      dispatch(changeStatusFilmAction({
        status: statusFilm,
        id: film.id,
        isPromo: isPromo}));
    }
  }

  return (
    <button
      onClick={onFavoriteButtonClick}
      className="btn btn--list film-card__button"
      type="button"
    >
      <svg viewBox="0 0 19 20" width={19} height={20}>
        <use xlinkHref={film?.isFavorite ? '#in-list' : '#add'}/>
      </svg>
      <span>My list</span>
    </button>
  );
}

export default FavoriteButton;
