import {Offer} from "../../types/Offer";
import {useState} from "react";
import {Link} from "react-router-dom";

type FavoriteCardProps = {
  place: Offer
}

export const FavoritesCard = ({place}: FavoriteCardProps) => {
  // console.log(place)
  const {price, title, type, id, previewImage} = place;
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleMouseOfferEnter = (id: number | null) => {
    setActiveId(id);
    // console.log(activeId)
  }

  return (
    <article onMouseEnter={() => handleMouseOfferEnter(id)} className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width={150} height={110}
               alt="Place image"/>
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button"
                  type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${activeId}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type} room</p>
      </div>
    </article>
  )
}
