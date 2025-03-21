import {Offer} from "../../types/Offer";
import {Card} from "../card/card";
import {useAppSelector} from "../../hooks";
import {useSorting} from "../../hooks/useSorting";

type CardsListProps = {
  offers: Offer[]
}

const CardsList = ({offers}: CardsListProps) => {
  const chosenSorting = useAppSelector(state => state.sortingParams.chosenParam);
  const sortedOffers = useSorting(chosenSorting, offers); // Вызываем хук сортировки

  return (
    <div className="cities__places-list places__list tabs__content">
      {sortedOffers.map((offer: Offer) => {
        return <Card offer={offer} key={offer.id}/>
      })}
    </div>
  )
}

export default CardsList
