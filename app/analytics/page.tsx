import React from "react";

const AnalyticsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Analytiques</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Dépenses par Catégorie</h2>
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">Graphique des dépenses ici</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Évolution du Solde</h2>
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">
              Graphique de l&apos;évolution du solde ici
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
