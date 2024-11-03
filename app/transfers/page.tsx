import React from "react";

const TransfersPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Transferts</h1>
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 transition-colors duration-200">
          <h2 className="text-xl font-semibold mb-4">Nouveau Transfert</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="fromAccount"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Compte source
              </label>
              <select
                id="fromAccount"
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:ring-opacity-50 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-700"
              >
                <option>Compte Courant</option>
                <option>Compte Épargne</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="toAccount"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Bénéficiaire
              </label>
              <input
                type="text"
                id="toAccount"
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:ring-opacity-50 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-700"
                placeholder="IBAN du bénéficiaire"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Montant
              </label>
              <input
                type="number"
                id="amount"
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:ring-opacity-50 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-700"
                placeholder="0.00"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Effectuer le transfert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TransfersPage;
