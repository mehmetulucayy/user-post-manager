// src/features/posts/posts.service.ts
import { Post } from "./posts.types";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Gönderi verileri çekilirken bir hata oluştu.");
    }
    const data: Post[] = await response.json();
    return data;
  } catch (error) {
    console.error("Hata:", error);
    return [];
  }
};

export const createPost = async (post: Omit<Post, 'id'>): Promise<Post> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (!response.ok) {
    throw new Error('Gönderi oluşturulurken bir hata oluştu.');
  }
  return response.json();
};

export const updatePost = async (post: Post): Promise<Post> => {
  const response = await fetch(`${API_URL}/${post.id}`, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (!response.ok) {
    throw new Error('Gönderi güncellenirken bir hata oluştu.');
  }
  return response.json();
};

export const deletePost = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Gönderi silinirken bir hata oluştu.');
  }
};