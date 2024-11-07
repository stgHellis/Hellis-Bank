"use client";

import React from "react";
import Link from "next/link";
// import Image from "next/image";
import { usePathname } from "next/navigation";
import { BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";
// import { NotificationBadge } from "@/components/layout/NotificationBadge";
import { NotificationBadge } from "@/components/layout/NotificationBadge";

const Header: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="flex items-center bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* <Image
            src="/images/hellisbanklogo2.jpg" // Assurez-vous que le chemin est correct
            alt="Hellis Bank Logo"
            width={40}
            height={40}
            className="mr-2"
          /> */}
          <Link href="/" className="text-2xl font-bold">
            Hellis Bank
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/accounts"
                className={`hover:text-blue-200 ${
                  isActive("/accounts") ? "font-bold" : ""
                }`}
              >
                Comptes
              </Link>
            </li>
            <li>
              <Link
                href="/transfers"
                className={`hover:text-blue-200 ${
                  isActive("/transfers") ? "font-bold" : ""
                }`}
              >
                Transferts
              </Link>
            </li>
            <li>
              <Link
                href="/analytics"
                className={`hover:text-blue-200 ${
                  isActive("/analytics") ? "font-bold" : ""
                }`}
              >
                Analytiques
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className={`hover:text-blue-200 ${
                  isActive("/settings") ? "font-bold" : ""
                }`}
              >
                Paramètres
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          {/* // Dans Header.tsx, modifie le bouton de notification */}
          <Link
            href="/notifications"
            className="hover:text-blue-200 relative inline-flex items-center justify-center"
          >
            <BellIcon className="h-6 w-6" />
            <NotificationBadge count={5} />
          </Link>
          <Link href="/profile" className="hover:text-blue-200">
            <UserCircleIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
