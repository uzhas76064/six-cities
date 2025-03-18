import {Offer} from "../../types/Offer";
import {useState} from "react";
import {Link} from "react-router-dom";

type CardProps = {
  offer: Offer;
}

const Card = ({offer}:CardProps): JSX.Element => {
  const {id, price, previewImage, type, rating, isPremium, title} = offer;
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleMouseOfferEnter = (id: number) => {
    setActiveId(id);
    // console.log(activeId)
  }

  return (
    <article className="cities__place-card place-card" onMouseEnter={() => handleMouseOfferEnter(id)}>
      <div className="place-card__mark">
        <span>{isPremium ? "Premium" : "Base"}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/hotels/${activeId}`}>
          <img
            className="place-card__image"
            src={`${previewImage}`}
            width="260"
            height="200"
            alt={title}
            style={{height: 200}}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating {rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${activeId}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  )
}

export {Card};
