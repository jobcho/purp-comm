import { Metadata } from "next";
import Navigation from "../components/navigation";
import WriteButton from "../components/write-button";

export const metadata: Metadata = {
  title: { template: "%s | 퍼플레이", default: "Loading..." },
  description: "퍼플레이 커뮤니티 게시판",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <WriteButton />
      </body>
    </html>
  );
}
