import {FavoritesCard} from "../favorites-card/favorites-card";
import {Offer} from "../../types/Offer";

type FavoritesPlacesProps = {
  favorites: Offer[],
  cityName: string
}

export const FavoritesPlaces = ({favorites, cityName}: FavoritesPlacesProps): JSX.Element => {
  return <div className="favorites__places">
    {favorites.map((place: Offer) => {
      // console.log(place)
      return (<FavoritesCard key={place.title} place={place}/>)
    })}
  </div>
}
