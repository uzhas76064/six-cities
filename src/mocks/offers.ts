import {Offer} from "../types/Offer";

export const mockOffers: Offer[] = [
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
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 16
    },
    isFavorite: true, // Избранное
    isPremium: true,
    rating: 4.8,
    previewImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "A luxurious apartment with a stunning view of the Eiffel Tower.",
    bedrooms: 2,
    maxAdults: 4,
    goods: ["Wi-Fi", "Air conditioning", "Kitchen", "Dishwasher", "Washing machine"],
    host: {
      id: 101,
      name: "Jean Dupont",
      isPro: true,
      avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: false, // Не в избранном
    isPremium: false,
    rating: 4.3,
    previewImage: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "A cozy studio located just a few blocks from Central Park.",
    bedrooms: 1,
    maxAdults: 2,
    goods: ["Wi-Fi", "Kitchen", "TV", "Hair dryer"],
    host: {
      id: 102,
      name: "Emily Smith",
      isPro: false,
      avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    images: [
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80"
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
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    },
    isFavorite: true, // Избранное
    isPremium: true,
    rating: 4.9,
    previewImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "A modern loft in the heart of Shibuya, close to shopping and nightlife.",
    bedrooms: 1,
    maxAdults: 3,
    goods: ["Wi-Fi", "Air conditioning", "Kitchen", "Washing machine", "Balcony"],
    host: {
      id: 103,
      name: "Yuki Tanaka",
      isPro: true,
      avatarUrl: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ]
  },
  {
    id: 4,
    title: "Charming Villa in Tuscany",
    type: "villa",
    price: 300,
    city: {
      name: "Florence",
      location: {
        latitude: 43.7696,
        longitude: 11.2558,
        zoom: 12
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    },
    isFavorite: true, // Избранное
    isPremium: false,
    rating: 4.7,
    previewImage: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "A charming villa surrounded by the beautiful hills of Tuscany.",
    bedrooms: 3,
    maxAdults: 6,
    goods: ["Wi-Fi", "Pool", "Kitchen", "Garden", "Parking"],
    host: {
      id: 104,
      name: "Giovanni Rossi",
      isPro: false,
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ]
  }
];

export default mockOffers;
