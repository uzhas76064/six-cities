import {FavoritesCard} from "../favorites-card/favorites-card";
import {Offer} from "../../types/Offer";

type FavoritesPlacesProps = {
  favorites: Offer[]
}

export const FavoritesPlaces = ({favorites}: FavoritesPlacesProps) => {
  return <div className="favorites__places">
    <FavoritesCard favorites={favorites}/>
  </div>
}
