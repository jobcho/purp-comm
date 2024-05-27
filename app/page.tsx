import Post from "../components/post";
import { getPosts } from "../components/get-posts";
import { API_URL } from "./constants";
import PostList from "../components/post-list";

export const metadata = {
  title: "커뮤니티",
};

export default async function Home() {
  return PostList("");
}
