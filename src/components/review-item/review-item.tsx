import {FC} from "react";

type ReviewItemProps = {
  userAvatar: string,
  userName: string,
  rating: number,
  reviewText: string,
  reviewDate: string
}

export const ReviewItem: FC<ReviewItemProps> = ({userAvatar, reviewDate, userName, reviewText, rating}): JSX.Element => {
  return <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src={userAvatar} width={54} height={54}
             alt="Reviews avatar"/>
      </div>
      <span className="reviews__user-name">{userName}</span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{width: `${rating*20}%`}}/>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">A quiet cozy and picturesque that hides behind a river by the unique lightness of
        Amsterdam. The building is green and from 18th century.</p>
      <time className="reviews__time" dateTime={reviewDate}>April 2019</time>
    </div>
  </li>
}
