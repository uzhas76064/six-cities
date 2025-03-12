import {Offer} from "../../types/Offer";
import Map from "../../components/map/map";
import TabsList from "../../components/tabs-list/tabs-list";
import PlacesSorter from "../../components/places-sorter/places-sorter";
import CardsList from "../../components/cards-list/cards-list";
import {useAppSelector} from "../../hooks/hooks";

type MainProps = {
    offers: Offer[]
}

const Main = ({ offers }: MainProps): JSX.Element => {
  const activeCity = useAppSelector((state) => state.city);
  const filteredOffers = useAppSelector((state) => state.offers.filter((offer) => offer.city.name === state.city.name));

  const offersCount: number = filteredOffers.length;

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
            <b className="places__found">{offersCount} {offersCount > 1 ? "places" : "place"} to stay in {activeCity.name}</b>
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
            <CardsList offers={filteredOffers}/>
          </section>
          <div className="cities__right-section">
            <Map locations={filteredOffers.map(offer => offer.location)} city={activeCity}/>
          </div>
        </div>
      </div>
    </>
  );
}

export {Main};
