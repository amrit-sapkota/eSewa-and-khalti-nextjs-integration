"use client";
import { useState } from "react";

export default function KhaltiPayment() {
  const [amount, setAmount] = useState("100");
  const [productName, setProductName] = useState("Test Product");
  const [transactionId, setTransactionId] = useState("txn-456");

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/initiate-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        method: "khalti",
        amount,
        productName,
        transactionId,
      }),
    });

    const data = await res.json();
    if (data.khaltiPaymentUrl) {
      window.location.href = data.khaltiPaymentUrl;
    }
  };

  return (
    <form
      onSubmit={handlePayment}
      className="w-full max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-4 border border-gray-200"
    >
      <h2 className="text-xl font-semibold text-gray-800 text-center">
        Pay with Khalti
      </h2>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">Product Name</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Enter product name"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">Transaction ID</label>
        <input
          type="text"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          placeholder="Enter transaction ID"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 rounded-lg transition duration-200 cursor-pointer"
      >
        Pay with Khalti
      </button>
    </form>
  );
}
