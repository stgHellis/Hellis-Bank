"use client";

// import React from "react";
import {
  FaFileInvoiceDollar,
  FaFileContract,
  FaEllipsisH,
} from "react-icons/fa";
import Link from "next/link"; // Importer Link depuis Next.js
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

interface ProfileData {
  firstName: string;
  lastName: string;
  rib: string;
  iban: string;
  bic: string;
  bankName: string;
  bankAddress: string;
  accountBalance: number;
}

const ProfilePage: React.FC = () => {
  // Début des Ajouts

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
  //Fin des Ajouts

  // Ces données devraient être récupérées depuis une API ou un état global
  const profileData: ProfileData = {
    firstName: "Jean",
    lastName: "Dupont",
    rib: "30001 00064 1234567890J 21",
    iban: "FR76 3000 1000 6412 3456 7890 J21",
    bic: "HALLFR21XXX",
    bankName: "Hellis Bank",
    bankAddress: "123 Avenue des Champs-Élysées, 75008 Paris",
    accountBalance: 5000.75,
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="min-h-screen transition-colors duration-200 dark:bg-gray-900">
        <div>
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Gestion du profil</h1>
            {/* Nouveaux boutons ronds */}
            <div className="flex justify-center gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Link href="/releve-compte">
                  {/* Utiliser Link pour la navigation */}
                  <button className="w-16 h-16 rounded-full bg-blue-500 hover:bg-blue-700 flex items-center justify-center text-white shadow-lg transition-all duration-300">
                    <FaFileInvoiceDollar size={24} />
                  </button>
                </Link>
                <span className="mt-2 text-sm font-medium">
                  Relevé de compte
                </span>
              </div>

              <div className="flex flex-col items-center">
                <Link href="/rib">
                  <button className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-700 flex items-center justify-center text-white shadow-lg transition-all duration-300">
                    <FaFileContract size={24} />
                  </button>
                </Link>
                <span className="mt-2 text-sm font-medium">R.I.B</span>
              </div>

              <div className="flex flex-col items-center">
                <Link href="/plus-new">
                  <button className="w-16 h-16 rounded-full bg-purple-500 hover:bg-purple-700 flex items-center justify-center text-white shadow-lg transition-all duration-300">
                    <FaEllipsisH size={24} />
                  </button>
                </Link>
                <span className="mt-2 text-sm font-medium">Plus</span>
              </div>
            </div>

            {/* Modification de la page du Profile. Ajout des Informations de la page du Settings */}

            <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
              <button onClick={toggleTheme}>
                {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}{" "}
              </button>
              <div className="flex justify-between items-center mb-6">
                {/* <h1 className="text-2xl sm:text-3xl font-bold dark:text-white">
                  Paramètres
                </h1> */}
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

            {/* Fin des Ajouts */}

            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-colors duration-200">
              <h2 className="text-2xl font-semibold mb-4">
                Informations du Compte
              </h2>
              <p>
                <strong>Nom :</strong> {profileData.lastName}
              </p>
              <p>
                <strong>Prénom :</strong> {profileData.firstName}
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-4">
                Informations bancaires
              </h2>
              <p>
                <strong>RIB :</strong> {profileData.rib}
              </p>
              <p>
                <strong>IBAN :</strong> {profileData.iban}
              </p>
              <p>
                <strong>BIC :</strong> {profileData.bic}
              </p>
              <p>
                <strong>Banque :</strong> {profileData.bankName}
              </p>
              <p>
                <strong>Adresse de la banque :</strong>{" "}
                {profileData.bankAddress}
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-4">
                Solde du compte
              </h2>
              <p className="text-xl font-bold">
                {profileData.accountBalance.toFixed(2)} €
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
