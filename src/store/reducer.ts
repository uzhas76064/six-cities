import mockOffers from "../mocks/offers";
import {createReducer} from "@reduxjs/toolkit";
import {chooseCity, fillOffers} from "./action";
import {Offer} from "../types/Offer";
import {City} from "../types/Location";
import {cities, CityLocation} from "../const";

type State = {
  city: City,
  offers: Offer[]
}

const initialState: State = {
  city: {
    name: cities[0],
    location: CityLocation[cities[0]]
  },
  offers: []
}

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(chooseCity, (state, action) => {
      state.city = {
        name: action.payload,
        location: CityLocation[action.payload]
      }
    })
    .addCase(fillOffers, (state, action) => {
      state.offers =action.payload
    })
})
