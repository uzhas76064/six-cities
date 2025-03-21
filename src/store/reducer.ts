import {createReducer} from "@reduxjs/toolkit";
import {
  setAuthorizationStatus,
  setCity,
  setOffers,
  setOffersLoading,
  setSortingParam, setUserData
} from "./action";
import {Offer} from "../types/Offer";
import {City} from "../types/Location";
import {AuthorizationStatus, cities, CityLocation} from "../const";
import {SortingParams} from "../types/SortingParams";
import {User, UserAuthData} from "../types/User";

export type State = {
  userData: User,
  userAuthData: UserAuthData,
  authorizationStatus: AuthorizationStatus;
  areOffersLoaded: boolean,
  city: City,
  offers: Offer[],
  sortingParams: SortingParams
}

const initialState: State = {
  userData: {
      avatarUrl: '',
      email: '',
      id: 0,
      isPro: false,
      name: '',
      token: ''
  },
  userAuthData: {
    login: '',
    password: '',
  },
  areOffersLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  city: {
    name: cities[0],
    location: CityLocation[cities[0]]
  },
  offers: [],
  sortingParams: {
    default: 0,
    chosenParam: 0,
    params: {
      0: "Popular",
      1: "Price: low to high",
      2: "Price: high to low",
      3: "Top rated first"
    }
  }
}

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = {
        name: action.payload,
        location: CityLocation[action.payload]
      }
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload
    })
    .addCase(setSortingParam, (state, action) => {
      state.sortingParams.chosenParam = action.payload
    })
    .addCase(setOffersLoading, (state, action) => {
      state.areOffersLoaded = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
})
