import {FavoritesLocationsItem} from "../favorites-locations-item/favorites-locations-item";
import {Offer} from "../../types/Offer";

type FavoritesListProps = {
  favorites: Offer[]
}

export const FavoritesList = ({favorites}: FavoritesListProps) => {
  return (
    <ul className="favorites__list">
      <FavoritesLocationsItem favorites={favorites} />
    </ul>
  )
};
