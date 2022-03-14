import { useAppDispatch } from '../../hooks';
import { incrementCountFilms } from '../../store/action';

function ShowMoreButton(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button"
        onClick={(evt: { currentTarget:  HTMLElement }) => {
          dispatch(incrementCountFilms());
        }}
      >
          Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
