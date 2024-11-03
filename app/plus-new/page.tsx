// app/plus-new/page.tsx
"use client";

import { Card } from "@/components/shared/card";
import { motion } from "framer-motion";
import { PlusCircle, Wallet, Palette, RefreshCw } from "lucide-react";

export default function PlusNewPage() {
  const cards = [
    {
      title: "Ajouter un nouveau Compte",
      icon: <PlusCircle className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Epargne et Placement",
      icon: <Wallet className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Thème",
      icon: <Palette className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Convertisseur de Monnaie",
      icon: <RefreshCw className="h-8 w-8" />,
      color: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="min-h-screen transition-colors duration-200 dark:bg-gray-900">
        <div className="min-h-screen dark:text-white bg-gray-100 dark:bg-gray-800 shadow rounded-lg p-8 transition-colors duration-200">
          <div className="mx-auto max-w-6xl">
            <h1 className="mb-8 text-3xl font-bold text-gray-800 dark:text-white">
              Plus d'options
            </h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="group cursor-pointer overflow-hidden">
                    <div
                      className={`relative h-48 bg-gradient-to-br ${card.color} p-6 transition-all duration-300 ease-in-out group-hover:shadow-lg`}
                    >
                      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
                      <div className="relative z-10 flex h-full flex-col justify-between text-white">
                        <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                          {card.icon}
                        </div>
                        <h2 className="text-xl font-semibold transform transition-transform duration-300 group-hover:translate-y-2">
                          {card.title}
                        </h2>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
