import {createAction} from "@reduxjs/toolkit";
import {CityName} from "../types/Location";
import { Offer } from "../types/Offer";

export const chooseCity = createAction<CityName>("offers/chooseCity");
export const fillOffers = createAction<Offer[]>("offers/fillOffers");
