// src/features/posts/posts.types.ts
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string; // Görevde belirtilmemiş olsa da API'de mevcut olduğu için ekliyoruz
}