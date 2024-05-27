import { Metadata } from "next";
import { getPost } from "../../../components/get-post";
import { API_URL } from "../../constants";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const post = await getPost(id);
  return {
    title: post.title,
  };
}

export default async function PostDetail({ params: { id } }: IParams) {
  const post = await getPost(id);
  return (
    <div>
      <h2>{post.title}</h2>
      <div>{post.category}</div>
      <div>{post.content}</div>
    </div>
  );
}
