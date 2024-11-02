"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCamera,
  FaSun,
  FaMoon,
} from "react-icons/fa";

const SettingsPage = () => {
  const [name, setName] = useState("Votre Nom complet");
  const [email, setEmail] = useState("Votre Email");
  const [phone, setPhone] = useState("Votre Téléphone");
  const [darkMode, setDarkMode] = useState(false);

  const [avatarUrl, setAvatarUrl] = useState(
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      name
    )}&background=0D8ABC&color=fff`
  );

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

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
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="min-h-screen transition-colors duration-200 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <button onClick={toggleTheme}>
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}{" "}
          </button>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold dark:text-white">
              Paramètres
            </h1>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? (
                <FaSun className="text-yellow-500" />
              ) : (
                <FaMoon className="text-gray-700" />
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card Profil */}
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 transition-colors duration-200">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full relative">
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
                <h2 className="text-xl font-semibold mt-4 dark:text-white">
                  {name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">{email}</p>
              </div>
            </div>

            {/* Card Informations Personnelles */}
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 transition-colors duration-200">
              <h2 className="text-xl font-semibold mb-4 dark:text-white">
                Informations Personnelles
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    <FaUser className="inline mr-2" />
                    Nom complet
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    <FaEnvelope className="inline mr-2" />
                    Adresse e-mail
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    <FaPhone className="inline mr-2" />
                    Numéro de téléphone
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-700"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  Enregistrer les modifications
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
