import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "FrostFoe | Web Designer & Developer",
  description:
    "A design & technology artisan, crafting digital experiences that feel right and work better.",
};

export default function Home() {
  return <HomePageClient />;
}
