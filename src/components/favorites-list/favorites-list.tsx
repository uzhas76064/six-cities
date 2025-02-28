import {FavoritesLocationsItem} from "../favorites-locations-item/favorites-locations-item";
import {Offer} from "../../types/Offer";

type FavoritesListProps = {
  favorites: Offer[]
}

export const FavoritesList = ({favorites}: FavoritesListProps) => {
  const groupByCity = (data: Offer[]): Offer[] => {
    // @ts-ignore
    return data.reduce((newObj, currentObj) => {
      // @ts-ignore
      if (!newObj[currentObj.city.name]) {
        // @ts-ignore
        newObj[currentObj.city.name] = []
      }
      // @ts-ignore
      newObj[currentObj.city.name].push(favorites)
      return newObj;
    }, {})
  }

  const groupedFavorites = groupByCity(favorites)
  // console.log(groupedFavorites)

  return (
    <ul className="favorites__list">
      <FavoritesLocationsItem favorites={groupedFavorites} />
    </ul>
  )
};
