import {createAsyncThunk} from "@reduxjs/toolkit";
// @ts-ignore
import {AxiosInstance} from "axios";
import {Offer} from "../types/Offer";
import {AuthorizationStatus, Routes} from "../const";
import {setAuthorizationStatus, setOffers, setOffersLoading, setUserData} from "./action";
import {UserAuthData} from "../types/User";
import {saveToken} from "../services/token";
import {AppDispatch} from "../hooks";
import {State} from "./reducer";

const AsyncActions = {
  FETCH_OFFERS: "offers/fetchOffers",
  LOGIN: "auth/login",
  CHECK_AUTH: 'user/checkAuth'
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
    AsyncActions.CHECK_AUTH,
    async (_arg, {dispatch, extra: api}) => {
        try {
            await api.get(Routes.LOGIN);
            dispatch(setAuthorizationStatus(AuthorizationStatus.Authorized));
        } catch {
            dispatch(setAuthorizationStatus(AuthorizationStatus.NotAuthorized));
        }
    },
);

export const loginAction = createAsyncThunk<void, UserAuthData, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
}>(
    AsyncActions.LOGIN,
    async ({login: email, password}, {dispatch, extra: api}) => {
        try {
            //TODO: проверить наличие пробелов и обработать ситуацию, когда они есть
            const {data: {token}, data} = await api.post(Routes.LOGIN, {email, password});
          console.log(data)
            saveToken(token);
            dispatch(setAuthorizationStatus(AuthorizationStatus.Authorized));
            dispatch(setUserData(data));
        } catch {
            dispatch(setAuthorizationStatus(AuthorizationStatus.NotAuthorized));
        }
    }
)
