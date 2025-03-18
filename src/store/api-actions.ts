import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch} from "../hooks/hooks";
import {State} from "../hooks/hooks";
import {AxiosInstance} from "axios";
import {Offer} from "../types/Offer";
import {Routes} from "../const";
import {setOffers} from "./action";

const AsyncActions= {
  FETCH_OFFERS: "offers/fetchOffers",
}

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  AsyncActions.FETCH_OFFERS,
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(Routes.HOTELS);
    dispatch(setOffers(data));
  }
)
