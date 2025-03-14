import {createReducer} from "@reduxjs/toolkit";
import {setCity, setOffers} from "./action";
import {Offer} from "../types/Offer";
import {City} from "../types/Location";
import {cities, CityLocation, sortingParams} from "../const";
import {SortingParams} from "../types/SortingParams";

export type State = {
  city: City,
  offers: Offer[],
  sortingParams: SortingParams
}

const initialState: State = {
  city: {
    name: cities[0],
    location: CityLocation[cities[0]]
  },
  offers: [],
  sortingParams: {
    default: 0,
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
      state.offers =action.payload
    })
})
