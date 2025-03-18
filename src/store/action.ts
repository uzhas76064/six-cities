import {createAction} from "@reduxjs/toolkit";
import {CityName} from "../types/Location";
import { Offer } from "../types/Offer";

const Actions = {
  SET_CITY: "offers/chooseCity",
  SET_OFFERS: "offers/fillOffers",
  SET_SORTING_PARAM: "sorting/setSortingParam",
  SET_SORTING_LOW_TO_HIGH: "sorting/setSortingLowToHigh",
  SET_SORTING_HIGH_TO_LOW: "sorting/setSortingHighToLow",
  SET_SORTING_POPULAR: "sorting/setSortingPopular",
  SET_SORTING_MOST_RATE: "sorting/setSortingMostRate",
  SET_ACTIVE_OFFER_ID: "offer/setActiveOfferId",
  SET_OFFERS_LOADING: "offer/setOffersLoading",
}

export const setCity = createAction<CityName>(Actions.SET_CITY);

export const setOffers = createAction<Offer[]>(Actions.SET_OFFERS);

export const setSortingParam = createAction<number>(Actions.SET_SORTING_PARAM);

export const setSortingLowToHigh = createAction(Actions.SET_SORTING_LOW_TO_HIGH);

export const setSortingHighToLow = createAction(Actions.SET_SORTING_HIGH_TO_LOW);

export const setSortingMostRate = createAction(Actions.SET_SORTING_MOST_RATE);

export const setOffersLoading = createAction<boolean>(Actions.SET_OFFERS_LOADING)

