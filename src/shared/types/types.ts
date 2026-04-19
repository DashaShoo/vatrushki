export interface Meme {
  id: number;
  title: string;
  description: string;
  owner: User;
  imageUrl: string;
  initialLikes: number;
}

export interface User {
  name: string;
  avatarUrl?: string;
  likedMemes?: number[];
  createdMemes?: number[];
}
