export interface AnonymousUser {
  id: string;
  name?: string;
  avatar?: string;
  createdAt: number;
}

export const getAnonymousUser = (): AnonymousUser => {
  const existing = localStorage.getItem("anon_user");
  if (existing) {
    return JSON.parse(existing);
  }

  const newUser: AnonymousUser = {
    id: crypto.randomUUID(), 
    name: `Guest-${Math.floor(Math.random() * 10000)}`,
    avatar: "",
    createdAt: Date.now(),
  };

  localStorage.setItem("anon_user", JSON.stringify(newUser));
  return newUser;
};
