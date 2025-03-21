import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {postComment} from "../../services/api";
import {useAppSelector} from "../../hooks";

type ReviewsFormProps = {
  id: number
}

const ReviewsForm = ({id}: ReviewsFormProps) => {
  const [formData, setFormData] = useState({
    reviewText: "",
    rating: 0,
  });

  const userData = useAppSelector(state => state.userData);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
  }, [])

  const handleReviewField = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      reviewText: evt.target.value,
    }));
  };

  const handleReviewRating = (rating: number) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleReviewSubmit = (evt: FormEvent<HTMLFormElement>) => {

    postComment(id, {
      comment: formData.reviewText,
      date: new Date().getDate().toString(),
      id: new Date().getDate(),
      rating: formData.rating,
      user: {
        avatarUrl: userData.avatarUrl,
        email: userData.email,
        id: userData.id,
        isPro: userData.isPro,
        name: userData.name,
        token: userData.token
      }
    })
      .then((response) => console.log(response))
  }

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleReviewSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((star) => (
          <label
            key={star}
            htmlFor={`${star}-stars`}
            className="reviews__rating-label form__rating-label"
            title={
              star === 5
                ? "perfect"
                : star === 4
                  ? "good"
                  : star === 3
                    ? "not bad"
                    : star === 2
                      ? "badly"
                      : "terribly"
            }
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => handleReviewRating(star)}
          >
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={star}
              id={`${star}-stars`}
              type="radio"
              checked={formData.rating === star}
              readOnly
            />
            <svg
              className="form__star-image"
              width={37}
              height={33}
              fill={star <= (hoverRating || formData.rating) ? "#ffcc00" : "#e4e4e4"}
            >
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        ))}
      </div>
      <textarea
        onChange={handleReviewField}
        value={formData.reviewText}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{" "}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={formData.reviewText.length < 50 || formData.rating === 0}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReviewsForm;
