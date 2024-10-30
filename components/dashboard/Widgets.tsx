"use client";

// app/components/dashboard/Widgets.tsx
import React from "react";
import styled from "styled-components";
import Link from "next/link"; // Importation du composant Link de Next.js
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shared/card";

// Exemple de données pour les widgets
const widgetData = [
  {
    id: 1,
    title: "Votre Mobilité",
    image: "https://via.placeholder.com/150",
    link: "/offre-1",
  },
  {
    id: 2,
    title: "Carte Visa Premier",
    image: "https://via.placeholder.com/150",
    link: "/offre-2",
  },
  {
    id: 3,
    title: "Assurance Voyage",
    image: "https://via.placeholder.com/150",
    link: "/offre-3",
  },
  {
    id: 4,
    title: "Assurance Habitation",
    image: "https://via.placeholder.com/150",
    link: "/offre-4",
  },
];

const WidgetContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const WidgetCard = styled(Card)`
  width: 150px;
  margin: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const WidgetImage = styled.img`
  width: 100%;
  border-radius: 8px 8px 0 0;
`;

const Widgets: React.FC = () => {
  //console.log("Widgets component is rendering");
  return (
    <WidgetContainer>
      {widgetData.map((widget) => (
        <Link key={widget.id} href={widget.link} passHref>
          <WidgetCard>
            <WidgetImage src={widget.image} alt={widget.title} />
            <CardHeader>
              <CardTitle>{widget.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Vous pouvez ajouter du contenu supplémentaire ici si nécessaire */}
            </CardContent>
          </WidgetCard>
        </Link>
      ))}
    </WidgetContainer>
  );
};

export default Widgets;
