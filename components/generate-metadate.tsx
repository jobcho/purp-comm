import { getPost } from "./get-post";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const post = await getPost(id);
  return {
    title: post.title,
  };
}
