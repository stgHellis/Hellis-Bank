import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shared/card";
import Link from "next/link";

export default function AccountSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-2xl font-bold">$12,345.67</p>
          <p className="text-sm text-gray-500">Available Balance</p>
          <div className="mt-4 flex flex-col items-center">
            <Link href="/ajouter-argent">
              <button className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </Link>
            <p className="mt-2 text-sm text-gray-600">Ajouter de l'Argent</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
