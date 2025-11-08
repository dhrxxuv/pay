"use client";

import { Card, Select, TextInput, Button } from "@repo/ui";
import { useState } from "react";

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
  const [redirectUrl, setRedirectUrl] = useState(
    SUPPORTED_BANKS[0]?.redirectUrl
  );
  const [amount, setAmount] = useState("");

  return (
    <Card title="Add Money">
      <div className="w-full space-y-4">
        <TextInput
          label="Amount"
          placeholder="Enter amount"
          onChange={(value) => setAmount(value)}
        />

        <div className="space-y-2">
          <div className="text-sm font-medium text-gray-300">Bank</div>
          <Select
            onSelect={(value) => {
              const bank = SUPPORTED_BANKS.find((x) => x.name === value);
              setRedirectUrl(bank?.redirectUrl || "");
            }}
            options={SUPPORTED_BANKS.map((x) => ({
              key: x.name,
              value: x.name,
            }))}
          />
        </div>

        <div className="flex justify-center pt-4">
          <Button
            onClick={() => {
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