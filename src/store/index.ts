import {configureStore} from "@reduxjs/toolkit";
import {reducer} from "./reducer";
import {setOffers} from "./action";
import offers from "../mocks/offers";
import {createAPI} from "../services/api";

const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
})

store.dispatch(setOffers(offers))
