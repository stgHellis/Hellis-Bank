"use client";

import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface Notification {
  id: number;
  message: string;
  date: string;
  type: "info" | "warning" | "success";
}

export default function NotificationsPage() {
  // État initial avec quelques notifications d'exemple
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      message: "Votre virement de 50€ a été effectué avec succès",
      date: "2024-01-20",
      type: "success",
    },
    {
      id: 2,
      message:
        "Votre venez de recevoir le virement de votre salaire de 3500€ avec succès",
      date: "2024-01-20",
      type: "success",
    },
    {
      id: 3,
      message: "Nouveau relevé bancaire disponible",
      date: "2024-01-19",
      type: "info",
    },
    {
      id: 4,
      message: "Attention: Tentative de connexion inhabituelle détectée",
      date: "2024-01-18",
      type: "warning",
    },
    {
      id: 5,
      message:
        "Attention: Vous avez un prélèvement en  attente de validation d'un montant de  100€",
      date: "2024-01-18",
      type: "warning",
    },
  ]);

  // Fonction pour supprimer une notification
  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  // Fonction pour obtenir la couleur en fonction du type
  const getTypeColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-100 text-green-800";
      case "warning":
        return "bg-yellow-100 text-yellow-800";
      case "info":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="min-h-screen transition-colors duration-200 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">Notifications</h1>

          {notifications.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              Aucune notification
            </div>
          ) : (
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`flex items-center justify-between p-4 rounded-lg ${getTypeColor(
                    notification.type
                  )} transition-all duration-200 hover:shadow-md`}
                >
                  <div className="flex-1">
                    <p className="font-medium">{notification.message}</p>
                    <p className="text-sm opacity-75 mt-1">
                      {new Date(notification.date).toLocaleDateString()}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteNotification(notification.id)}
                    className="ml-4 p-2 rounded-full hover:bg-red-500 transition-colors duration-200"
                    aria-label="Supprimer la notification"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {notifications.length > 0 && (
            <button
              onClick={() => setNotifications([])}
              className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
            >
              Supprimer toutes les notifications
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
