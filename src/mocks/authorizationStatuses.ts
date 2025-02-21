import { mockUser1, mockUser2 } from "./users";
import {AuthorizationStatus} from "../types/AuthorizationStatus";

export const mockAuthorizationStatus1: AuthorizationStatus = {
  ...mockUser1
};

export const mockAuthorizationStatus2: AuthorizationStatus = {
  ...mockUser2
};
