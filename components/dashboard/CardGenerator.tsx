"use client";

import React from "react";
import { Button } from "../shared/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shared/card";
import { CreditCard, Wallet } from "lucide-react";
import { useRouter } from "next/navigation";

type CardType = "virtual" | "physical";

const CardGenerator: React.FC = () => {
  const router = useRouter();

  const handleGenerateCard = (type: CardType): void => {
    // Génération d'un numéro de carte de 16 chiffres avec padding
    const cardNumber: string = String(
      Math.floor(Math.random() * 9000000000000000) + 1000000000000000
    ).padStart(16, "0");

    // Stocker la carte générée (vous pouvez utiliser un état global ou une API)

    // Rediriger vers la liste des cartes
    router.push("/generated-cards");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button
          onClick={() => handleGenerateCard("virtual")}
          className="w-full flex items-center justify-center space-x-2"
        >
          <Wallet size={16} />
          <span>Generate Virtual Card</span>
        </Button>
        <Button
          onClick={() => handleGenerateCard("physical")}
          className="w-full flex items-center justify-center space-x-2"
          variant="outline"
        >
          <CreditCard size={16} />
          <span>Order Physical Card</span>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardGenerator;
