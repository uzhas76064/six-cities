import {Offer} from "../types/Offer";
import {useMemo} from "react";

export const useSorting = (paramId: number, offers: Offer[]): Offer[] => {
  return useMemo(() => {
    const sortedOffers = [...offers]; // Создаем новый массив, чтобы избежать мутации

    switch (paramId) {
      case 1:
        return sortedOffers.sort((a, b) => a.price - b.price);
      case 2:
        return sortedOffers.sort((a, b) => b.price - a.price);
      case 3:
        return sortedOffers.sort((a, b) => b.rating - a.rating);
      default:
        return offers; // Возвращаем исходный массив без изменений
    }
  }, [offers, paramId]);
};
