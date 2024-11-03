import AccountSummary from "@/components/dashboard/AccountSummary";
import CardGenerator from "@/components/dashboard/CardGenerator";
import QuickActions from "@/components/dashboard/QuickActions";
import TransactionList from "@/components/dashboard/TransactionList";
import Widgets from "@/components/dashboard/Widgets";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="min-h-screen transition-colors duration-200 dark:bg-gray-900">
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
          <h1 className="text-4xl font-bold mb-20">Dashboard</h1>
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 dark:bg-gray-800 shadow rounded-lg p-6 transition-colors duration-200">
            <AccountSummary />
            <QuickActions />
            <CardGenerator />
            <TransactionList />
            <Widgets />
          </div>
        </main>
      </div>
    </div>
  );
}
