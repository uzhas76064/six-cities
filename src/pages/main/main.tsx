import {Offer} from "../../types/Offer";
import Map from "../../components/map/map";
import TabsList from "../../components/tabs-list/tabs-list";
import CardsList from "../../components/cards-list/cards-list";
import {useAppSelector} from "../../hooks/hooks";
import PlacesSortingForm from "../../components/places-sorting/places-sorting-form";

type MainProps = {
  offers: Offer[],
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
            <PlacesSortingForm/>
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
