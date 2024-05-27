import { API_URL } from "../app/constants";

export async function getPost(id: string) {
  const response = await fetch(`${API_URL}/post/${id}`);
  return response.json();
}
