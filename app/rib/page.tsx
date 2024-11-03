"use client";

// app/rib/page.tsx
import { FaDownload, FaPrint } from "react-icons/fa";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";

interface RibData {
  bankName: string;
  accountHolder: string;
  rib: string;
  iban: string;
  bic: string;
  bankAddress: string;
}

export default function RibPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  const ribData: RibData[] = Array(6).fill({
    bankName: "Hellis Bank",
    accountHolder: "Jean Dupont",
    rib: "30001 00064 1234567890J 21",
    iban: "FR76 3000 1000 6412 3456 7890 J21",
    bic: "HALLFR21XXX",
    bankAddress: "123 Avenue des Champs-Élysées, 75008 Paris",
  });

  const handleDownload = async () => {
    if (!contentRef.current) return;

    try {
      // Créer le canvas à partir du contenu
      const canvas = await html2canvas(contentRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      // Créer un nouveau PDF au format A4
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // Largeur A4 en mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Ajouter l'image au PDF
      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

      // Télécharger le PDF
      pdf.save("mes_rib.pdf");
    } catch (error) {
      console.error("Erreur lors de la création du PDF:", error);
      alert("Une erreur est survenue lors de la création du PDF");
    }
  };

  const handlePrint = async () => {
    if (!contentRef.current) return;

    try {
      const canvas = await html2canvas(contentRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("image/png");

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

      // Ouvrir le PDF dans une nouvelle fenêtre pour l'impression
      //   try {
      const pdfBlob = pdf.output("blob");
      const pdfUrl = URL.createObjectURL(pdfBlob);
      window.open(pdfUrl);
    } catch (error) {
      console.error("Erreur lors de la préparation de l'impression:", error);
      alert("Une erreur est survenue lors de la préparation de l'impression");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="min-h-screen transition-colors duration-200 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h1 className="text-3xl font-bold mb-10 sm:mb-0 justify-center">
              Mes Relevés d'Identité Bancaire
            </h1>
          </div>

          <div
            ref={contentRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {ribData.map((rib, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
              >
                <div className="border-b pb-4 mb-4">
                  <h2 className="text-xl font-bold text-blue-600">
                    {rib.bankName}
                  </h2>
                  <p className="text-gray-600">{rib.accountHolder}</p>
                </div>

                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-gray-500">RIB</p>
                    <p className="font-mono">{rib.rib}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">IBAN</p>
                    <p className="font-mono">{rib.iban}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">BIC</p>
                    <p className="font-mono">{rib.bic}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Adresse bancaire</p>
                    <p className="text-sm">{rib.bankAddress}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mt-5">
            <button
              onClick={handleDownload}
              className="flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 shadow-md w-full sm:w-auto"
            >
              <FaDownload className="mr-2" />
              Télécharger
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300 shadow-md w-full sm:w-auto"
            >
              <FaPrint className="mr-2" />
              Imprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
