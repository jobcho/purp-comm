"use client";
import { useParams, useRouter } from "next/navigation";
import { API_URL } from "../app/constants";
import Category from "./category";

interface IPostProps {
  title: string;
  id: string;
  content: string;
  category: string;
  write_date: string;
  view_count: string;
}

export default function Post({
  title,
  id,
  content,
  category,
  write_date,
  view_count,
}: IPostProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/post/${id}`);
  };
  return (
    <div onClick={onClick}>
      <h3>{title}</h3>
      <p>{content}</p>
      <Category category={category} />
      <span>{write_date}</span>
      <span>{view_count}</span>
    </div>
  );
}
