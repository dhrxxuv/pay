import { Card } from "@repo/ui";

export const OnRampTransactions = ({
  transactions,
}: {
  transactions: {
    time: Date;
    amount: number;
    status: string;
    provider: string;
  }[];
}) => {
  if (!transactions.length) {
    return (
      <Card title="Recent Transactions">
        <div className="text-center py-8 text-gray-400">
          No Recent transactions
        </div>
      </Card>
    );
  }

  return (
    <Card title="Recent Transactions">
      <div className="space-y-4 pt-2">
        {transactions.map((t, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-slate-700 pb-3 last:border-0"
          >
            <div>
              <div className="text-sm font-medium text-white">
                Received INR
              </div>
              <div className="text-gray-400 text-xs">
                {t.time.toDateString()}
              </div>
            </div>
            <div className="text-green-400 font-semibold">
              + Rs {t.amount / 100}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};