import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "./components/main-layout";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "mn" }];
}

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<Props>) {
  return (
    <ClerkProvider>
      <html className="h-full" lang={locale} suppressHydrationWarning>
        <body className={`${inter.className} h-full`}>
          <MainLayout locale={locale}>{children}</MainLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}
