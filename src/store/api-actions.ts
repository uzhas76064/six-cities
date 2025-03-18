import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch} from "../hooks/hooks";
import {State} from "../hooks/hooks";
// @ts-ignore
import {AxiosInstance} from "axios";
import {Offer} from "../types/Offer";
import {AuthorizationStatus, Routes} from "../const";
import {setAuthorizationStatus, setOffers, setOffersLoading} from "./action";

const AsyncActions= {
  FETCH_OFFERS: "offers/fetchOffers",
  LOGIN: "auth/login"
}

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  AsyncActions.FETCH_OFFERS,
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(Routes.HOTELS);
    dispatch(setOffersLoading(false));
    dispatch(setOffers(data));
    dispatch(setOffersLoading(true));
  }
)

export const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
}>(
    'user/checkAuth',
    async (_arg, {dispatch, extra: api}) => {
        try {
            await api.get(Routes.LOGIN);
            dispatch(setAuthorizationStatus(AuthorizationStatus.Authorized));
        } catch {
            dispatch(setAuthorizationStatus(AuthorizationStatus.NotAuthorized));
        }
    },
);
