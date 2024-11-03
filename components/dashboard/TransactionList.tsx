import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shared/card";

// Fonction fictive pour obtenir l'URL de l'image du commerce
function getStoreImageUrl(storeName: string): string {
  // Cette fonction devrait retourner l'URL de l'image correspondant au commerce
  // Pour l'exemple, nous utiliserons une URL factice
  return `https://example.com/store-images/${storeName
    .toLowerCase()
    .replace(" ", "-")}.jpg`;
}

const transactions = [
  { id: 1, description: "Grocery Store", amount: -50.25, date: "2024-03-15" },
  { id: 2, description: "Salary Deposit", amount: 2500, date: "2024-03-14" },
  { id: 3, description: "Restaurant", amount: -35.5, date: "2024-03-13" },
];

export default function TransactionList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {transactions.map((transaction) => (
            <li key={transaction.id} className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  src={getStoreImageUrl(transaction.description)}
                  alt={transaction.description}
                  width={40}
                  height={40}
                  className="rounded-full object-cover" // Ajoute la forme ronde et assure que l'image couvre bien l'espace
                  style={{
                    minWidth: "40px", // Assure une largeur minimale
                    minHeight: "40px", // Assure une hauteur minimale
                  }}
                />
              </div>
              <div className="flex-grow">
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
              <span
                className={
                  transaction.amount > 0 ? "text-green-600" : "text-red-600"
                }
              >
                ${Math.abs(transaction.amount).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
