import { API_URL } from "../app/constants";

export async function getPosts(category: string) {
  const response = await fetch(`${API_URL}/posts`, {
    next: { revalidate: 10 },
  });
  const json = await response.json();
  let filterPosts = json;
  if (category !== "") {
    filterPosts = json.filter((data) => data["category"] === category);
  }
  return filterPosts;
}
