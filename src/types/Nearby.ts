import {City} from "./City";
import {Host} from "./Host";
import {Location} from "./Location";

export type Nearby = {
  bedrooms: number
  city: City
  description: string
  goods: string[]
  host: Host
  id: number
  images: [string]
  isFavorite: boolean
  isPremium: boolean
  location: Location
  maxAdults: number
  previewImage: string
  price: number
  rating: number
  title: string
  type: string
}
