import { Card } from '../../components/card/card';
import {Offer} from "../../types/Offer";
import Map from "../../components/map/map";
import {City} from "../../types/City";
import TabsList from "../../components/tabs-list/tabs-list";
import PlacesSorter from "../../components/places-sorter/places-sorter";

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
          <TabsList/>
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
              <PlacesSorter/>
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
