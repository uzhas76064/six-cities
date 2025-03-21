import {ReviewItem} from "../review-item/review-item";
import {Comment} from "../../types/Comment";
import {useAppSelector} from "../../hooks/hooks";
import {AuthorizationStatus} from "../../const";
import ReviewsForm from "../reviews-form/reviews-form";

type PropertyReviewsProps = {
  comments: Comment[],
  offerId: number,
}

const PropertyReviews = ({comments, offerId}: PropertyReviewsProps) => {
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((review) => {
          const {avatarUrl, name} = review.user;

          return <ReviewItem key={name+review.date} userAvatar={avatarUrl} userName={name} rating={review.rating} reviewText={review.comment} reviewDate={review.date}/>
        })}
      </ul>
      {authStatus === AuthorizationStatus.Authorized ? <ReviewsForm id={offerId}/> : null}
    </section>
  );
};

export default PropertyReviews;
