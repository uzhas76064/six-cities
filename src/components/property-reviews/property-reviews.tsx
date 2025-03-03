import { FormEvent, ChangeEvent, useState } from "react";

const PropertyReviews = () => {
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
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        <li className="reviews__item">
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width={54} height={54} alt="Reviews avatar" />
            </div>
            <span className="reviews__user-name">Max</span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{ width: '80%' }} />
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century.</p>
            <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
          </div>
        </li>
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
