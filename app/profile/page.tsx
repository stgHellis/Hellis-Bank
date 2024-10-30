"use client";

import React from "react";
import {
  FaFileInvoiceDollar,
  FaFileContract,
  FaEllipsisH,
} from "react-icons/fa";
import Link from "next/link"; // Importer Link depuis Next.js

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
            <span className="mt-2 text-sm font-medium">Relevé de compte</span>
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

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Informations personnelles
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
            <strong>Adresse de la banque :</strong> {profileData.bankAddress}
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Solde du compte</h2>
          <p className="text-xl font-bold">
            {profileData.accountBalance.toFixed(2)} €
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
