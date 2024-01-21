import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container } from "@/components/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.FULL_NAME,
  description: "Powered Next.js, Tailwind CSS",
  openGraph: {
    // title: 'Next.js',
    // description: 'The React Framework for the Web',
    url: 'https://nextjs.org',
    siteName: `Kanokpit's profile`,
    images: [
      {
        url: 'https://kanokpit-yowaratch.github.io/images/cover.jpg',
        width: 800,
        height: 600,
      },
      {
        url: 'https://kanokpit-yowaratch.github.io/images/cover.jpg',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="m-0 h-full p-0 antialiased"
      suppressHydrationWarning
    >
      <body className="flex h-full flex-col">
        <div className="relative text-zinc-800 dark:text-zinc-200">
          <Container></Container>

          <main>{children}</main>

          <footer className="pb-1 pt-1"></footer>
        </div>
      </body>
    </html>
  );
}
