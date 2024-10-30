import React from "react";

const AccountsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Mes Comptes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Compte Courant</h2>
          <p className="text-2xl font-bold text-green-600">€2,500.00</p>
          <p className="text-sm text-gray-600 mt-2">
            IBAN: FR76 1234 5678 9012 3456 7890 123
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Compte Épargne</h2>
          <p className="text-2xl font-bold text-blue-600">€10,000.00</p>
          <p className="text-sm text-gray-600 mt-2">
            IBAN: FR76 9876 5432 1098 7654 3210 987
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountsPage;
