"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/shared/card";
import Image from "next/image";
import { Plus, X } from "lucide-react";

interface BankCard {
  id: string;
  type: "virtual" | "physical";
  cardNumber: string;
  expiryDate: string;
  status: "Active" | "Pending";
  cvv: string;
}

// Au début du fichier, ajoutez ces styles CSS
<style jsx global>{`
  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 85mm);
    gap: 2rem;
    justify-content: center;
    padding: 2rem;
  }

  @media screen and (max-width: 600px) {
    .card-container {
      grid-template-columns: 1fr;
    }
  }
`}</style>;

const GeneratedCardList = () => {
  // État initial avec un tableau vide pour les cartes
  const [cards, setCards] = useState<BankCard[]>([]);
  const [selectedType, setSelectedType] = useState<
    "all" | "virtual" | "physical"
  >("all");

  // Au début du composant
  useEffect(() => {
    const savedCards = localStorage.getItem("cards");
    if (savedCards) {
      setCards(JSON.parse(savedCards));
    }
  }, []);

  // À chaque modification des cartes
  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  // Fonction pour générer un numéro de carte aléatoire
  const generateCardNumber = () => {
    return Array.from({ length: 16 }, () =>
      Math.floor(Math.random() * 10)
    ).join("");
  };

  // Fonction pour générer une date d'expiration valide
  const generateExpiryDate = () => {
    const currentDate = new Date();
    const month = Math.floor(Math.random() * 12) + 1;
    const year = currentDate.getFullYear() + Math.floor(Math.random() * 5) + 1;
    return `${month.toString().padStart(2, "0")}/${year.toString().slice(-2)}`;
  };

  // Fonction pour générer un CVV aléatoire
  const generateCVV = () => {
    return Array.from({ length: 3 }, () => Math.floor(Math.random() * 10)).join(
      ""
    );
  };

  // Fonction pour générer une nouvelle carte
  const handleGenerateCard = (cardType: "virtual" | "physical") => {
    const newCard: BankCard = {
      id: Date.now().toString(),
      type: cardType,
      cardNumber: generateCardNumber(),
      expiryDate: generateExpiryDate(),
      status: cardType === "physical" ? "Pending" : "Active", // Les cartes physiques commencent en "Pending"
      cvv: generateCVV(),
    };
    setCards((prevCards) => [...prevCards, newCard]);
  };

  // Filtrer les cartes selon le type sélectionné
  const filteredCards = cards.filter((card) =>
    selectedType === "all" ? true : card.type === selectedType
  );

  const handleDeleteCard = (id: string) => {
    if (window.confirm("Are you sure you want to delete this card?")) {
      setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="min-h-screen transition-colors duration-200 dark:bg-gray-900">
        <div className="container mx-auto p-6 relative min-h-screen max-w-[1400px]">
          {/* Bouton de génération de carte */}
          <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-10">
            {/* Bouton pour carte virtuelle */}
            <button
              onClick={() => handleGenerateCard("virtual")}
              className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 
            flex items-center justify-center shadow-lg transition-all duration-300 
            hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              title="Generate Virtual Card"
            >
              <Plus className="w-8 h-8 text-white" />
            </button>
            {/* Bouton pour carte physique */}
            <button
              onClick={() => handleGenerateCard("physical")}
              className="w-16 h-16 rounded-full bg-green-600 hover:bg-green-700 
            flex items-center justify-center shadow-lg transition-all duration-300 
            hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
              title="Order Physical Card"
            >
              <svg
                className="w-8 h-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <path d="M2 10h20" />
              </svg>
            </button>
          </div>

          {/* Filtres de type de carte */}
          <div className="flex gap-4 mb-6">
            <button
              className={`px-4 py-2 rounded transition-colors dark:bg-gray-700 dark:text-white ${
                selectedType === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setSelectedType("all")}
            >
              All Cards
            </button>
            <button
              className={`px-4 py-2 rounded transition-colors dark:bg-gray-700 dark:text-white  ${
                selectedType === "virtual"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setSelectedType("virtual")}
            >
              Virtual Cards
            </button>
            <button
              className={`px-4 py-2 rounded transition-colors dark:bg-gray-700 dark:text-white ${
                selectedType === "physical"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setSelectedType("physical")}
            >
              Physical Cards
            </button>
          </div>

          {/* Liste des cartes */}
          <div
            className="grid grid-cols-1 gap-8 p-4"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, 85mm)",
              gap: "3rem", // Augmentation de l'espacement
              justifyContent: "center",
              padding: "2rem",
            }}
          >
            {filteredCards.map((card) => (
              <Card
                key={card.id}
                className={`relative ${
                  card.type === "physical"
                    ? "bg-gradient-to-r from-green-600 to-green-800"
                    : "bg-gradient-to-r from-blue-600 to-blue-800"
                } text-white animate-slideIn`}
                style={{
                  width: "85mm",
                  height: "54mm",
                  minWidth: "85mm",
                  minHeight: "54mm",
                  margin: "0.5rem", // Ajout d'une marge de sécurité
                }}
              >
                {/* Indicateur de statut pour les cartes physiques */}
                {card.type === "physical" && (
                  <div
                    className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs ${
                      card.status === "Pending"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                  >
                    {card.status}
                  </div>
                )}
                <button
                  onClick={() => handleDeleteCard(card.id)}
                  className="absolute top-2 right-2 p-2 rounded-full hover:bg-red-600 transition-colors z-10"
                  aria-label="Delete card"
                >
                  <X className="w-4 h-4" />
                </button>
                <CardContent className="p-6 h-full flex flex-col justify-between">
                  <div className="flex flex-col h-full justify-between">
                    <div className="flex justify-between items-center">
                      <div className="w-16 h-8 relative">
                        <Image
                          src="/images/visa-logo.png"
                          alt="Visa"
                          fill
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                      <div className="text-sm">
                        {card.type.charAt(0).toUpperCase() + card.type.slice(1)}{" "}
                        Card
                      </div>
                    </div>

                    <div className="w-12 h-10 bg-yellow-400 rounded-md" />

                    <div className="text-xl tracking-wider">
                      {card.cardNumber.match(/.{1,4}/g)?.join(" ")}
                    </div>

                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-xs opacity-75">VALID THRU</div>
                        <div>{card.expiryDate}</div>
                      </div>
                      <div>
                        <div className="text-xs opacity-75">CVV</div>
                        <div>{card.cvv}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {filteredCards.length === 0 && (
              <div className="text-center text-gray-500 mt-8">
                No cards found. Click the + or card button to generate a new
                card.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedCardList;
