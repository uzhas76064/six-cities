import {createAction} from "@reduxjs/toolkit";
import {CityName} from "../types/Location";
import { Offer } from "../types/Offer";

export const setCity = createAction<CityName>("offers/chooseCity");
export const setOffers = createAction<Offer[]>("offers/fillOffers");
export const setSortingParam = createAction<number>("offers/setSortingParam");
