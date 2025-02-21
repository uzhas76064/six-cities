import {User} from "../types/User";

export const mockUser1: User = {
  avatarUrl: "https://example.com/avatar1.jpg",
  email: "user1@example.com",
  id: 1,
  isPro: true,
  name: "John Doe",
  token: "token123"
};

export const mockUser2: User = {
  avatarUrl: "https://example.com/avatar2.jpg",
  email: "user2@example.com",
  id: 2,
  isPro: false,
  name: "Jane Smith",
  token: "token456"
};
