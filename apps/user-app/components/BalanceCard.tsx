import { Card } from "@repo/ui";

export const BalanceCard = ({
  amount,
  locked,
}: {
  amount: number;
  locked: number;
}) => {
  return (
    <Card title="Balance">
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b border-slate-700 pb-3">
          <div className="text-gray-300">Unlocked balance</div>
          <div className="text-white font-semibold">{amount / 100} INR</div>
        </div>

        <div className="flex justify-between items-center border-b border-slate-700 pb-3">
          <div className="text-gray-300">Total Locked Balance</div>
          <div className="text-white font-semibold">{locked / 100} INR</div>
        </div>

        <div className="flex justify-between items-center border-b border-slate-700 pb-3">
          <div className="text-gray-300">Total Balance</div>
          <div className="text-purple-400 font-bold text-lg">
            {(locked + amount) / 100} INR
          </div>
        </div>
      </div>
    </Card>
  );
};
