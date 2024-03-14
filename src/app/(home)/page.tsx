import { Main } from "@/components/home/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cinema",
  description: "Welcome to the cinema that will blow your mind",
  keywords: ["cinema"],
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Main />
    </main>
  );
}
