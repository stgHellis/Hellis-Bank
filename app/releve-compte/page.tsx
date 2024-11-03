"use client";

// pages/ReleveCompte.tsx

import React from "react";
import { FaDownload, FaPrint } from "react-icons/fa";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const ReleveCompte: React.FC = () => {
  const profileData = {
    bankName: "Hellis Bank",
    bankAddress: "123 Avenue des Champs-Élysées, 75008 Paris",
    bankPhone: "+33 1 23 45 67 89",
    rib: "30001 00064 1234567890J 21",
    iban: "FR76 3000 1000 6412 3456 7890 J21",
    bic: "HALLFR21XXX",
    firstName: "Jean",
    lastName: "Dupont",
  };

  const transactions = [
    { date: "01/10/2023", description: "Salaire", amount: 2500.0 },
    { date: "05/10/2023", description: "Loyer", amount: -800.0 },
    { date: "10/10/2023", description: "Courses", amount: -150.0 },
    { date: "15/10/2023", description: "Facture Électricité", amount: -100.0 },
    { date: "20/10/2023", description: "Vente", amount: 300.0 },
  ];

  // const handleDownload = () => {
  //   // Logique pour télécharger le relevé
  //   console.log("Télécharger le relevé");
  // };

  // const handlePrint = () => {
  //   window.print();
  // };

  const generatePDF = () => {
    // Créer une nouvelle instance de jsPDF
    const doc = new jsPDF();

    // Ajouter le titre
    doc.setFontSize(20);
    doc.text("Relevé de Compte", 105, 15, { align: "center" });

    // Informations de la banque
    doc.setFontSize(12);
    doc.text("Informations de la Banque", 20, 30);
    doc.setFontSize(10);
    doc.text(`${profileData.bankName}`, 20, 40);
    doc.text(`${profileData.bankAddress}`, 20, 45);
    doc.text(`${profileData.bankPhone}`, 20, 50);

    // Informations du client
    doc.setFontSize(12);
    doc.text("Informations du Client", 20, 65);
    doc.setFontSize(10);
    doc.text(`Nom: ${profileData.lastName}`, 20, 75);
    doc.text(`Prénom: ${profileData.firstName}`, 20, 80);
    doc.text(`RIB: ${profileData.rib}`, 20, 85);
    doc.text(`IBAN: ${profileData.iban}`, 20, 90);
    doc.text(`BIC: ${profileData.bic}`, 20, 95);

    // Pour ajouter un logo
    // doc.addImage("images/hellisbank-logo2", "PNG", 10, 10, 30, 30);

    // Pour ajouter un pied de page
    doc.setFontSize(8);
    doc.text("Document généré le " + new Date().toLocaleDateString(), 20, 280);

    // Tableau des transactions
    const tableData = transactions.map((transaction) => [
      transaction.date,
      transaction.description,
      `${transaction.amount.toFixed(2)} €`,
    ]);

    autoTable(doc, {
      head: [["Date", "Description", "Montant (€)"]],
      body: tableData,
      startY: 110,
      styles: { fontSize: 10 },
      headStyles: { fillColor: [41, 128, 185] },
      alternateRowStyles: { fillColor: [242, 242, 242] },
    });

    // Calculer le solde total
    const solde = transactions.reduce((acc, curr) => acc + curr.amount, 0);
    const yPosition = doc.lastAutoTable ? doc.lastAutoTable.finalY + 10 : 20;
    doc.text(`Solde total: ${solde.toFixed(2)} €`, 20, yPosition);

    return doc;
  };

  const handleDownload = () => {
    const doc = generatePDF();
    // Télécharger le PDF
    doc.save(
      `releve_compte_${profileData.lastName}_${new Date()
        .toISOString()
        .slice(0, 10)}.pdf`
    );
  };

  const handlePrint = () => {
    const doc = generatePDF();
    // Ouvrir le PDF dans une nouvelle fenêtre pour l'impression
    doc.output("dataurlnewwindow");
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="min-h-screen transition-colors duration-200 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Relevé de Compte</h1>

          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-colors duration-200 mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              Informations de la Banque
            </h2>
            <p>
              <strong>Nom de la Banque :</strong> {profileData.bankName}
            </p>
            <p>
              <strong>Adresse :</strong> {profileData.bankAddress}
            </p>
            <p>
              <strong>Téléphone :</strong> {profileData.bankPhone}
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">
              Informations du Client
            </h2>
            <p>
              <strong>Nom :</strong> {profileData.lastName}
            </p>
            <p>
              <strong>Prénom :</strong> {profileData.firstName}
            </p>
            <p>
              <strong>RIB :</strong> {profileData.rib}
            </p>
            <p>
              <strong>IBAN :</strong> {profileData.iban}
            </p>
            <p>
              <strong>BIC :</strong> {profileData.bic}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-colors duration-200 mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              Transactions du Mois
            </h2>
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Date</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Description
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Montant (€)
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">
                      {transaction.date}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {transaction.description}
                    </td>
                    <td
                      className={`border border-gray-300 px-4 py-2 ${
                        transaction.amount < 0
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {transaction.amount.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              onClick={handleDownload}
              className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
            >
              <FaDownload className="mr-2" />
              Télécharger
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center bg-green-500 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
            >
              <FaPrint className="mr-2" />
              Imprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReleveCompte;
