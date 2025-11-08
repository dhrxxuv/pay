"use client";

import { Card, Select, TextInput, Button } from "@repo/ui";
import { useState } from "react";
import createOnRampTransaction from "../lib/action/createOnrampTransaction";

const SUPPORTED_BANKS = [
  {
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com",
  },
  {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/",
  },
];

export const AddMoney = () => {
  const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
  const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");
  const [amount, setAmount] = useState<number>(0);

  return (
    <Card title="Add Money">
      <div className="w-full space-y-4">
        <TextInput
          label="Amount"
          placeholder="Enter amount"
          onChange={(value) => setAmount(Number(value))}
        />

        <div className="space-y-2">
          <div className="text-sm font-medium text-gray-300">Bank</div>
          <Select
            onSelect={(value) => {
              const bank = SUPPORTED_BANKS.find((x) => x.name === value);
              setRedirectUrl(bank?.redirectUrl || "");
              setProvider(bank?.name || "");
            }}
            options={SUPPORTED_BANKS.map((x) => ({
              key: x.name,
              value: x.name,
            }))}
          />
        </div>

        <div className="flex justify-center pt-4">
          <Button
            onClick={async () => {
              await createOnRampTransaction(amount, provider);
              if (redirectUrl) {
                window.location.href = redirectUrl;
              }
            }}
          >
            Add Money
          </Button>
        </div>
      </div>
    </Card>
  );
};
