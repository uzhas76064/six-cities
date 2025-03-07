import {useParams} from "react-router-dom";
import {Offer} from "../../types/Offer";
import PropertyReviews from "../../components/property-reviews/property-reviews";
import Map from "../../components/map/map";
import city from "../../mocks/city";
import {Card} from "../../components/card/card";

type RoomProps = {
  offers: Offer[],
  nearbyOffers: Offer[];
}

export const Room = ({offers, nearbyOffers}: RoomProps): JSX.Element => {
  const {pageId} = useParams();
  const room = offers.find(offer => offer.id === Number(pageId));

  if (!room) {
    return <div className="page">Room not found</div>
  }

  return (<div className="page" style={{height: "auto"}}>
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {room ? room.images.map((image) => {
            return (
              <div key={image} className="property__image-wrapper">
                <img className="property__image" src={image} alt="Photo studio"/>
              </div>
            )
          }) : "No photos"}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
        <div className="property__mark">
            <span>{room.isPremium ? "Premium" : "Base"}</span>
          </div>
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {room.title}
            </h1>
            <button className="property__bookmark-button button" type="button">
              <svg className="property__bookmark-icon" width={31} height={33}>
                <use xlinkHref="#icon-bookmark"/>
              </svg>
              <span className="visually-hidden">{room.isFavorite ? "In bookmarks" : "To bookmarks"}</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{width: '80%'}}/>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{room.rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {room.type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {room.bedrooms} Bedrooms
            </li>
            <li className="property__feature property__feature--adults">
              Max {room.maxAdults} adults
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">€{room.price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What`&apos;s inside</h2>
            <ul className="property__inside-list">
              {room.goods.map((item, index) => {
                return <li key={item + String(index)} className="property__inside-item">{item}</li>
              })}
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className={room.host.isPro ? "property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper" : "property__avatar-wrapper user__avatar-wrapper"}>
                <img className="property__avatar user__avatar" src={room.host.avatarUrl} width={74} height={74}
                     alt="Host avatar"/>
              </div>
              <span className="property__user-name">
                {room.host.name}
                </span>
              <span className="property__user-status">
                {room.host.isPro ? "Pro" : "Base"}
                </span>
            </div>
            <div className="property__description">
              <p className="property__text">
                {room.description}
              </p>
            </div>
          </div>
          <PropertyReviews/>
        </div>
      </div>
      <Map city={city} locations={nearbyOffers.map((offer) => offer.location)} place="property" />
    </section>
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {nearbyOffers ? nearbyOffers.map((offer) => {return <Card offer={offer}/>}) : "There is no nearby offers"}
        </div>
      </section>
    </div>
  </div>)
}
