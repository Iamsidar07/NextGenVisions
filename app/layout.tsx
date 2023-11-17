import { Navbar } from "@/components";
import Banner from "@/components/Banner";
import "@/styles/globals.css";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "NexGenVisions",
  description: "Super charge your imagination with nextgenvisions.",
  creator: "Manoj Kumar",
  other: {
    "theme-color": "#fffff",
    "color-scheme": "light",
    "twitter:card": "summary_large_image",
    "twitter:image": "/image.png",
    "og:image": "/image.png",
    "og:type": "website",
    "og:url": "https://next-gen-visions.vercel.app/",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="custom-scroll-bar">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main>
          <Banner />
          <Navbar />
          <div className="app">{children}</div>
        </main>
      </body>
    </html>
  );
}
