//TODO: Удалить моковые данные полностью и вынести логику сортировки в отдельный хук
import {setOffers, setSortingHighToLow, setSortingLowToHigh, setSortingMostRate} from "../store/action";
import offers from "../mocks/offers";
import {store} from "../store";

export const sortOffers = (param: number) => {
  switch (param) {
    case 0:
      store.dispatch(setOffers(offers))
      break;
    case 1:
      store.dispatch(setSortingLowToHigh());
      break;
    case 2:
      store.dispatch(setSortingHighToLow());
      break;
    case 3:
      store.dispatch(setSortingMostRate());
      break;
    default:
      store.dispatch(setOffers(offers));
      break;
  }
}
