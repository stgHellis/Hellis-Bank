"use client";

import {
  CreditCard,
  Home,
  PieChart,
  Send,
  Settings,
  UserCircle,
} from "lucide-react"; // Remplacer UserCircleIcon par UserCircle de Lucide
import Link from "next/link";

const navItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: CreditCard, label: "Accounts", href: "/accounts" },
  { icon: Send, label: "Transfers", href: "/transfers" },
  { icon: PieChart, label: "Analytics", href: "/analytics" },
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: UserCircle, label: "Profile", href: "/profile" }, // Utiliser UserCircle au lieu de UserCircleIcon
];

export default function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700"
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
