import {FavoritesPlaces} from "../favorites-places/favorites-places";

export const FavoritesLocationsItem = () => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </div>
      <FavoritesPlaces/>
    </li>
  )
}
