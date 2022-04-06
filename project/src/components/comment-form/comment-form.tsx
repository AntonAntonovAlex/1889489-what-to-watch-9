import {ChangeEvent, FormEvent, useState} from 'react';
import { MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH } from '../../const';
import { useAppDispatch } from '../../hooks';
import { sendReviewAction } from '../../store/api-actions';
import { ReviewData } from '../../types/review-data';

type CommentFormProps = {
  filmId: number;
}

function CommentForm({filmId}: CommentFormProps): JSX.Element {
  const [userComment, setUserComment] = useState('');
  const [userRating, setUserRating] = useState(0);
  const [isDisabledForm, setIsDisabledForm] = useState(false);

  const handleRatingChange = ({ target}: ChangeEvent<HTMLInputElement>) => {
    setUserRating(+target.value);
  };

  const dispatch = useAppDispatch();

  const sendReview = (reviewData: ReviewData) => {
    dispatch(sendReviewAction(reviewData));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsDisabledForm(true);

    if (userRating !== null && userComment !== null && filmId !== undefined) {
      sendReview({
        comment: userComment,
        rating: userRating,
        id: filmId,
        sendReviewCallback: () => setIsDisabledForm(false),
      });
    }
  };

  function getRatingStars() {
    const raitingStarsItems = [];

    for (let i = 10; i > 0; i--) {
      raitingStarsItems.push(
        <input
          key={`input_star-${i}`}
          disabled={isDisabledForm}
          className="rating__input"
          id={`star-${i}`}
          type="radio"
          name="rating"
          defaultValue={i}
          onChange={handleRatingChange}
        />,
      );
      raitingStarsItems.push(
        <label key={`label_star-${i}`} className="rating__label" htmlFor={`star-${i}`}>
    Rating {i}
        </label>,
      );
    }

    return (
      raitingStarsItems
    );
  }

  return (
    <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {getRatingStars()}
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          disabled={isDisabledForm}
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
          <button className="add-review__btn"
            type="submit"
            disabled={!(userComment.length >= MIN_COMMENT_LENGTH && userComment.length < MAX_COMMENT_LENGTH && !isDisabledForm && userRating !== 0)}
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default CommentForm;
