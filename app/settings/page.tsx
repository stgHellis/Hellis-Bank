"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import { FaUser, FaEnvelope, FaPhone, FaCamera } from "react-icons/fa";

const SettingsPage = () => {
  const [name, setName] = useState("Votre Nom complet");
  const [email, setEmail] = useState("Votre Email");
  const [phone, setPhone] = useState("Votre Téléphone");

  // Générer un avatar dynamique avec les initiales de l'utilisateur
  const [avatarUrl, setAvatarUrl] = useState(
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      name
    )}&background=0D8ABC&color=fff`
  );

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    updateAvatarUrl(e.target.value);
  };

  const updateAvatarUrl = (newName: string) => {
    setAvatarUrl(
      `https://ui-avatars.com/api/?name=${encodeURIComponent(
        newName
      )}&background=0D8ABC&color=fff`
    );
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Paramètres</h1>
      <div className="bg-white shadow rounded-lg p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-center mb-6">
          <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 sm:mb-0 sm:mr-6 relative">
            <Image
              src={avatarUrl}
              alt="Profile"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full object-cover"
            />
            <button
              className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full"
              onClick={handleAvatarClick}
            >
              <FaCamera />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Informations Personnelles
            </h2>
            <p className="text-gray-600">
              Gérez vos informations personnelles et vos préférences
            </p>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              <FaUser className="inline mr-2" />
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              <FaEnvelope className="inline mr-2" />
              Adresse e-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              <FaPhone className="inline mr-2" />
              Numéro de téléphone
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Enregistrer les modifications
          </button>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
