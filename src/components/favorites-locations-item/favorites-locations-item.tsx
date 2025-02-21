import {FavoritesPlaces} from "../favorites-places/favorites-places";
import {Offer} from "../../types/Offer";

type FavoritesLocationItemProps = {
  favorites: Offer[]
}

export const FavoritesLocationsItem = ({favorites}: FavoritesLocationItemProps) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </div>
      <FavoritesPlaces favorites={favorites}/>
    </li>
  )
}
