export const ROUTES = {
  HOME: "/",
  MEMES: "/memes",
  MEME_DETAIL_PATTERN: "/memes/:id",
  MEME_DETAIL: (id: string | number) => `/memes/${id}`,
  ADD_MEME: "/add-meme",
  PROFILE: "/profile",
} as const;
