"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav>
      <div>
        <Link href="/">Purplay.</Link> {path === "/" ? "here" : ""}
      </div>
      <ul>
        <li>
          <Link href="/">전체</Link> {path === "/" ? "here" : ""}
        </li>
        <li>
          <Link href="/tips">꿀팁</Link> {path === "/tips" ? "here" : ""}
        </li>
        <li>
          <Link href="/thumbs-up">추천/리뷰</Link>{" "}
          {path === "/thumbs-up" ? "here" : ""}
        </li>
        <li>
          <Link href="/free-talk">자유</Link>{" "}
          {path === "/free-talk" ? "here" : ""}
        </li>
      </ul>
    </nav>
  );
}
