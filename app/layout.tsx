import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import { NeonAuthUIProvider } from "@neondatabase/auth/react";
// import { authClient } from "@/lib/auth/client";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manna BR - O Duolingo para Estudos Bíblicos",
  description: "Aprenda a Bíblia de forma divertida e gamificada, sem pressão. Lições interativas, progresso personalizado e muito mais.",
  manifest: "/manifest.json",
  themeColor: "#FEF7E9",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Manna BR",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* TODO: Configurar Neon Auth quando tiver as credenciais */}
        {/* <NeonAuthUIProvider authClient={authClient}> */}
        {children}
        {/* </NeonAuthUIProvider> */}
      </body>
    </html>
  );
}
