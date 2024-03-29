import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Layout } from "@/components/layout";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import PlausibleProvider from "next-plausible";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ryanvs | Frontend Developer",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const GAID = process.env.GaID || '';
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <GoogleAnalytics gaId="G-M7QWT8CMKQ" />
      <PlausibleProvider domain="ryanvs.dev">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />

            <Layout>
              <span className="rounded-full bg-gradient-to-r dark:from-rose-700 dark:via-pink-700 dark:to-purple-700 dark:opacity-60 from-blue-300 via-cyan-300 to-green-300 opacity-70 -z-50 aspect-square w-full max-w-screen-lg blur-3xl filter bottom-[calc(100%-200px)] dark:bottom-[calc(100%-180px)] fixed"></span>
              {children}
            </Layout>
          </ThemeProvider>
        </body>
      </PlausibleProvider>
    </html>
  );
}
