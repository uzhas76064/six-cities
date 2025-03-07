import { ChangeEvent, useState } from "react";
import {ReviewItem} from "../review-item/review-item";
import {Comment} from "../../types/Comment";

type PropertyReviewsProps = {
  comments: Comment[]
}

const PropertyReviews = ({comments}: PropertyReviewsProps) => {
  const [formData, setFormData] = useState({
    reviewText: "",
    rating: 0,
  });

  const handleReviewField = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      reviewText: evt.target.value,
    }));
  };

  const handleReviewRating = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      rating: Number(evt.target.value),
    }));
  };

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((review) => {
          const {avatarUrl, name} = review.user;

          return <ReviewItem key={name+review.date} userAvatar={avatarUrl} userName={name} rating={review.rating} reviewText={review.comment} reviewDate={review.date}/>
        })}
      </ul>
      <form className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
            <input className="form__rating-input visually-hidden" name="rating" defaultValue={5} id="5-stars"
                   type="radio"/>
            <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
            <input className="form__rating-input visually-hidden" name="rating" defaultValue={4} id="4-stars"
                   type="radio"/>
            <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
            <input className="form__rating-input visually-hidden" name="rating" defaultValue={3} id="3-stars"
                   type="radio"/>
            <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
            <input className="form__rating-input visually-hidden" name="rating" defaultValue={2} id="2-stars"
                   type="radio"/>
            <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
            <input className="form__rating-input visually-hidden" name="rating" defaultValue={1} id="1-star"
                   type="radio"/>
            <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
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
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
            stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit"
                  disabled={formData.reviewText.length < 50 || formData.rating === 0}>Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default PropertyReviews;
