import {FavoritesPlaces} from "../favorites-places/favorites-places";
import {Offer} from "../../types/Offer";

type FavoritesLocationItemProps = {
  favorites: Offer[]
}

export const FavoritesLocationsItem = ({ favorites }: FavoritesLocationItemProps) => {
  return (
    <ul>
      {Object.keys(favorites).map((cityName: string) => (
        <li key={cityName} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{cityName}</span>
              </a>
            </div>
          </div>
          {  // @ts-ignore
            favorites[cityName].map((location: Offer[]) => {
              return <FavoritesPlaces key={cityName} favorites={location} cityName={cityName}/>
          })}
        </li>
      ))}
    </ul>
  );
};

