import {Offer} from "../../types/Offer";
import {FavoritesList} from "../favorites-list/favorites-list";

type FavoritesSectionProps = {
  favorites: Offer[]
}

export const FavoritesSection = ({favorites}: FavoritesSectionProps) => {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <FavoritesList favorites={favorites}/>
    </section>
  )
}
