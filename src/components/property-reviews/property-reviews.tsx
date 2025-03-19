import {ReviewItem} from "../review-item/review-item";
import {Comment} from "../../types/Comment";
import ReviewsForm from "../reviews-form/reviews-form";

type PropertyReviewsProps = {
  comments: Comment[]
}

const PropertyReviews = ({comments}: PropertyReviewsProps) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((review) => {
          const {avatarUrl, name} = review.user;

          return <ReviewItem key={name+review.date} userAvatar={avatarUrl} userName={name} rating={review.rating} reviewText={review.comment} reviewDate={review.date}/>
        })}
      </ul>
      <ReviewsForm/>
    </section>
  );
};

export default PropertyReviews;
