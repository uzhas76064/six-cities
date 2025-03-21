import {createAction} from "@reduxjs/toolkit";
import {CityName} from "../types/Location";
import { Offer } from "../types/Offer";
import {AuthorizationStatus} from "../const";
import {User} from "../types/User";

const Actions = {
  SET_CITY: "offers/chooseCity",
  SET_OFFERS: "offers/fillOffers",
  SET_SORTING_PARAM: "sorting/setSortingParam",
  SET_ACTIVE_OFFER_ID: "offer/setActiveOfferId",
  SET_OFFERS_LOADING: "offer/setOffersLoading",
  SET_AUTHORIZATION_STATUS: "offer/setAuthorizationStatus",
  SET_USER_DATA: "user/setUserData",
}

export const setCity = createAction<CityName>(Actions.SET_CITY);

export const setOffers = createAction<Offer[]>(Actions.SET_OFFERS);

export const setSortingParam = createAction<number>(Actions.SET_SORTING_PARAM);

export const setOffersLoading = createAction<boolean>(Actions.SET_OFFERS_LOADING)

export const setAuthorizationStatus = createAction<AuthorizationStatus>(Actions.SET_AUTHORIZATION_STATUS);

export const setUserData = createAction<User>(Actions.SET_USER_DATA)
