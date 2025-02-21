import {Offer} from "../types/Offer";

const mockOffers: Offer[] = [
  {
    id: 1,
    title: "Luxury Apartment in Downtown",
    type: "apartment",
    price: 200,
    city: {
      name: "Paris",
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
        zoom: 12
      }
    },
    location: {
      latitude: 48.8584,
      longitude: 2.2945,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    previewImage: "https://example.com/images/1.jpg",
    description: "A luxurious apartment with a stunning view of the Eiffel Tower.",
    bedrooms: 2,
    maxAdults: 4,
    goods: ["Wi-Fi", "Air conditioning", "Kitchen", "Dishwasher", "Washing machine"],
    host: {
      id: 101,
      name: "Jean Dupont",
      isPro: true,
      avatarUrl: "https://example.com/avatars/jean.jpg"
    },
    images: [
      "https://example.com/images/1_1.jpg",
      "https://example.com/images/1_2.jpg",
      "https://example.com/images/1_3.jpg"
    ]
  },
  {
    id: 2,
    title: "Cozy Studio near Central Park",
    type: "studio",
    price: 120,
    city: {
      name: "New York",
      location: {
        latitude: 40.7128,
        longitude: -74.0060,
        zoom: 12
      }
    },
    location: {
      latitude: 40.7851,
      longitude: -73.9683,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.3,
    previewImage: "https://example.com/images/2.jpg",
    description: "A cozy studio located just a few blocks from Central Park.",
    bedrooms: 1,
    maxAdults: 2,
    goods: ["Wi-Fi", "Kitchen", "TV", "Hair dryer"],
    host: {
      id: 102,
      name: "Emily Smith",
      isPro: false,
      avatarUrl: "https://example.com/avatars/emily.jpg"
    },
    images: [
      "https://example.com/images/2_1.jpg",
      "https://example.com/images/2_2.jpg",
      "https://example.com/images/2_3.jpg"
    ]
  },
  {
    id: 3,
    title: "Modern Loft in Shibuya",
    type: "loft",
    price: 150,
    city: {
      name: "Tokyo",
      location: {
        latitude: 35.6895,
        longitude: 139.6917,
        zoom: 12
      }
    },
    location: {
      latitude: 35.6586,
      longitude: 139.7017,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.9,
    previewImage: "https://example.com/images/3.jpg",
    description: "A modern loft in the heart of Shibuya, close to shopping and nightlife.",
    bedrooms: 1,
    maxAdults: 3,
    goods: ["Wi-Fi", "Air conditioning", "Kitchen", "Washing machine", "Balcony"],
    host: {
      id: 103,
      name: "Yuki Tanaka",
      isPro: true,
      avatarUrl: "https://example.com/avatars/yuki.jpg"
    },
    images: [
      "https://example.com/images/3_1.jpg",
      "https://example.com/images/3_2.jpg",
      "https://example.com/images/3_3.jpg"
    ]
  }
];

export default mockOffers;
