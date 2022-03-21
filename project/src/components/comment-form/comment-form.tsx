import {ChangeEvent, FormEvent, useState} from 'react';
import { useAppDispatch } from '../../hooks';
import { sendReviewAction } from '../../store/api-actions';
import { ReviewData } from '../../types/review-data';

type CommentFormProps = {
  filmId: number;
}

function CommentForm({filmId}: CommentFormProps): JSX.Element {
  const [userComment, setUserComment] = useState('');
  const [userRating, setUserRating] = useState(8);

  const fieldChangeHandle = ({ target}: ChangeEvent<HTMLInputElement>) => {
    setUserRating(+target.value);
  };

  const dispatch = useAppDispatch();

  const onSubmit = (reviewData: ReviewData) => {
    dispatch(sendReviewAction(reviewData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (userRating !== null && userComment !== null && filmId !== undefined) {
      onSubmit({
        comment: userComment,
        rating: userRating,
        id: filmId,
      });
    }
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          <input
            className="rating__input"
            id="star-10"
            type="radio"
            name="rating"
            defaultValue={10}
            onChange={fieldChangeHandle}
          />
          <label className="rating__label" htmlFor="star-10">
            Rating 10
          </label>
          <input
            className="rating__input"
            id="star-9"
            type="radio"
            name="rating"
            defaultValue={9}
            onChange={fieldChangeHandle}
          />
          <label className="rating__label" htmlFor="star-9">
            Rating 9
          </label>
          <input
            className="rating__input"
            id="star-8"
            type="radio"
            name="rating"
            defaultValue={8}
            defaultChecked
            onChange={fieldChangeHandle}
          />
          <label className="rating__label" htmlFor="star-8">
            Rating 8
          </label>
          <input
            className="rating__input"
            id="star-7"
            type="radio"
            name="rating"
            defaultValue={7}
            onChange={fieldChangeHandle}
          />
          <label className="rating__label" htmlFor="star-7">
            Rating 7
          </label>
          <input
            className="rating__input"
            id="star-6"
            type="radio"
            name="rating"
            defaultValue={6}
            onChange={fieldChangeHandle}
          />
          <label className="rating__label" htmlFor="star-6">
            Rating 6
          </label>
          <input
            className="rating__input"
            id="star-5"
            type="radio"
            name="rating"
            defaultValue={5}
            onChange={fieldChangeHandle}
          />
          <label className="rating__label" htmlFor="star-5">
            Rating 5
          </label>
          <input
            className="rating__input"
            id="star-4"
            type="radio"
            name="rating"
            defaultValue={4}
            onChange={fieldChangeHandle}
          />
          <label className="rating__label" htmlFor="star-4">
            Rating 4
          </label>
          <input
            className="rating__input"
            id="star-3"
            type="radio"
            name="rating"
            defaultValue={3}
            onChange={fieldChangeHandle}
          />
          <label className="rating__label" htmlFor="star-3">
            Rating 3
          </label>
          <input
            className="rating__input"
            id="star-2"
            type="radio"
            name="rating"
            defaultValue={2}
            onChange={fieldChangeHandle}
          />
          <label className="rating__label" htmlFor="star-2">
            Rating 2
          </label>
          <input
            className="rating__input"
            id="star-1"
            type="radio"
            name="rating"
            defaultValue={1}
            onChange={fieldChangeHandle}
          />
          <label className="rating__label" htmlFor="star-1">
            Rating 1
          </label>
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
            const value = target.value;
            setUserComment(value);
          }}
          value={userComment}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default CommentForm;
