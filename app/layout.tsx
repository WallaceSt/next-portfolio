import type { Metadata } from "next";
import "./globals.css";
import BodySection from "@/components/ui/BodySection";

export const metadata: Metadata = {
  title: "WallaceSt",
  description:
    "Amazing fullstack developer portfolio website built with NextJs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BodySection>{children}</BodySection>{" "}
      </body>
    </html>
  );
}
