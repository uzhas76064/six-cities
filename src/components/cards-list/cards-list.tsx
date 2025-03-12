import {Offer} from "../../types/Offer";
import {Card} from "../card/card";

type CardsListProps = {
  offers: Offer[]
}

const CardsList = ({offers}: CardsListProps) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer) => {
        return <Card offer={offer} key={offer.id}/>
      })}
    </div>
  )
}

export default CardsList
