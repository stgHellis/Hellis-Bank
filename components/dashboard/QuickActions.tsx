import { Button } from "@/components/shared/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shared/card";
import { CreditCard, PiggyBank, Send } from "lucide-react";

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button className="w-full flex items-center justify-center space-x-2">
          <Send size={16} />
          <span>Send Money</span>
        </Button>
        <Button
          className="w-full flex items-center justify-center space-x-2"
          variant="outline"
        >
          <CreditCard size={16} />
          <span>Pay Bills</span>
        </Button>
        <Button
          className="w-full flex items-center justify-center space-x-2"
          variant="outline"
        >
          <PiggyBank size={16} />
          <span>Save Money</span>
        </Button>
      </CardContent>
    </Card>
  );
}
