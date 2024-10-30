import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shared/card";

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
        <ul className="space-y-2">
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="flex justify-between items-center"
            >
              <div>
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
