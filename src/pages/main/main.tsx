import { Card } from '../../components/card/card';
import {NavLink} from "react-router-dom";
import {Offer} from "../../types/Offer";
import Map from "../../components/map/map";
import {City} from "../../types/City";

type MainProps = {
    city: City
    offers: Offer[]
}

const Main = ({ city, offers }: MainProps): JSX.Element => {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <NavLink className="locations__item-link tabs__item" to="#">
                <span>Paris</span>
              </NavLink>
            </li>
            <li className="locations__item">
              <NavLink className="locations__item-link tabs__item" to="#">
                <span>Cologne</span>
              </NavLink>
            </li>
            <li className="locations__item">
              <NavLink className="locations__item-link tabs__item" to="#">
                <span>Brussels</span>
              </NavLink>
            </li>
            <li className="locations__item">
              <NavLink className="locations__item-link tabs__item tabs__item--active" to="#">
                <span>Amsterdam</span>
              </NavLink>
            </li>
            <li className="locations__item">
              <NavLink className="locations__item-link tabs__item" to="#">
                <span>Hamburg</span>
              </NavLink>
            </li>
            <li className="locations__item">
              <NavLink className="locations__item-link tabs__item" to="#">
                <span>Dusseldorf</span>
              </NavLink>
            </li>
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li
                  className="places__option places__option--active"
                  tabIndex={0}
                >
                  Popular
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: low to high
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: high to low
                </li>
                <li className="places__option" tabIndex={0}>
                  Top rated first
                </li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              {offers.map((offer: Offer) => {
                return <Card offer={offer} key={offer.id}/>
              })}
            </div>
          </section>
          <div className="cities__right-section">
            <Map locations={offers.map(offer => offer.location)} city={city}/>
          </div>
        </div>
      </div>
    </>
  );
}

export {Main};
