import type { UserModel } from "./models";

export function getUserName(user: UserModel): string {
  return user.name;
}
