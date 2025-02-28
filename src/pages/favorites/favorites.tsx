import {Outlet} from "react-router-dom";
import {FavoritesSection} from "../../components/favorites-section/favorites-section";
import {Offer} from "../../types/Offer";

type FavoritesProps = {
  favorites: Offer[];
}

const Favorites = ({favorites}: FavoritesProps): JSX.Element => {
  const filteredOffers = favorites.filter((offer: Offer) => {
    return offer.isFavorite
  })

  // console.log(filteredOffers)

  return (
    <div className="page">
      <Outlet/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <FavoritesSection favorites={filteredOffers}/>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33}/>
        </a>
      </footer>
    </div>
  )
}

export {Favorites};
