import { mockUser1, mockUser2 } from "./users";
import {Comment} from "../types/Comment";

export const comments: Comment[] = [
  {
    comment: "Amazing place, highly recommend!",
    date: "2025-02-21T12:00:00Z",
    id: 101,
    rating: 5,
    user: mockUser1
  },
  {
    comment: "Not bad, but could be better.",
    date: "2025-02-22T14:30:00Z",
    id: 102,
    rating: 3,
    user: mockUser2
  }
]
