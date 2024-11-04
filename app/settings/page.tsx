import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/shared/card";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <Card className="w-full h-full">
    <CardHeader>
      <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
      <CardDescription className="text-sm sm:text-base">
        {description}
      </CardDescription>
    </CardHeader>
  </Card>
);

const features: FeatureCardProps[] = [
  {
    title: "Frais",
    description:
      "Beaucoup de néobanques se distinguent par des frais réduits ou inexistants pour les opérations courantes.",
  },
  {
    title: "Ouverture de compte rapide",
    description:
      "La procédure d'ouverture de compte est généralement simplifiée et peut se faire en ligne en quelques minutes.",
  },
  {
    title: "Accessibilité mobile",
    description:
      "Une application mobile intuitive est essentielle, permettant aux utilisateurs de gérer leurs finances facilement.",
  },
  {
    title: "Services de paiement",
    description:
      "Intégration de fonctionnalités de paiement, comme des cartes de débit, des virements instantanés, ou des paiements sans contact.",
  },
  {
    title: "Gestion budgétaire",
    description:
      "Outils d'analyse des dépenses et de gestion de budget pour aider les utilisateurs à mieux suivre leurs finances.",
  },
  {
    title: "Sécurité",
    description:
      "Protocoles de sécurité renforcés, comme l'authentification à deux facteurs et la protection des données.",
  },
  {
    title: "Assistance client",
    description:
      "Support client accessible, souvent via chat en ligne ou par message.",
  },
  {
    title: "Intégration avec d'autres services",
    description:
      "Possibilité de lier des comptes à des applications de gestion financière ou à des services de paiement tiers.",
  },
  {
    title: "Produits d'épargne et de crédit",
    description:
      "Certaines néobanques offrent des options d'épargne à taux d'intérêt ou des prêts.",
  },
  {
    title: "Transparence",
    description:
      "Information claire sur les conditions et les services, sans frais cachés.",
  },
];

const SettingsPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="min-h-screen transition-colors duration-200 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 shadow rounded-lg p-6 transition-colors duration-200">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-11 mt-11 text-center">
            Hellis Bank : Paramètres
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
