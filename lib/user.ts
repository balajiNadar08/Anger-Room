export interface AnonymousUser {
  id: string;
  username: string;
  age: number;
  gender: string;
  profilePicUrl: string;
  createdAt: Date | number;
}

export const getAnonymousUser = (): AnonymousUser | null => {
  const existing = localStorage.getItem("anon_user");
  if (existing) {
    return JSON.parse(existing);
  }
  return null;
};

export const hasUserProfile = (): boolean => {
  return localStorage.getItem("anon_user") !== null;
};