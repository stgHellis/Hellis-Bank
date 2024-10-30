import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
// import ReleveCompte from "@/components/layout/ReleveCompte";
//import NotificationBadge from "@/components/layout/NotificationBadge";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hellis Bank",
  description: "Your trusted neobanking partner",
  // icon: 'hellisbanklogo.ico', // Si le fichier est dans le dossier app
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1">
            <Header />
            <main className="container mx-auto px-4 py-8">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
