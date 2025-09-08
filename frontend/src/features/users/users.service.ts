// src/features/users/users.service.ts
import { User } from "./users.types";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Kullanıcı verileri çekilirken bir hata oluştu.");
    }
    const data: User[] = await response.json();
    return data;
  } catch (error) {
    console.error("Hata:", error);
    return [];
  }
};

export const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (!response.ok) {
    throw new Error('Kullanıcı oluşturulurken bir hata oluştu.');
  }
  return response.json();
};

export const updateUser = async (user: User): Promise<User> => {
  const response = await fetch(`${API_URL}/${user.id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (!response.ok) {
    throw new Error('Kullanıcı güncellenirken bir hata oluştu.');
  }
  return response.json();
};

export const deleteUser = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Kullanıcı silinirken bir hata oluştu.');
  }
};