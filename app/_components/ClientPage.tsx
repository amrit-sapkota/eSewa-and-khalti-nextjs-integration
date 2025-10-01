"use client";

import React, { useState } from "react";
import EsewaPayment from "./EsewaPayment";
import KhaltiPayment from "./KhaltiPayment";

const ClientPage = () => {
  const [active, setActive] = useState<"esewa" | "khalti">("esewa");

  return (
    <div className="container mx-auto">
      <div className="min-h-screen py-10 flex flex-col items-center">
        <h1 className="font-bold text-3xl text-gray-800 mb-10 text-center">
          Esewa and Khalti Payment Integration in Next.js
        </h1>

        {/* Toggle Buttons */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActive("esewa")}
            className={`px-6 py-2.5 rounded-lg font-medium transition cursor-pointer ${
              active === "esewa"
                ? "bg-green-500 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Pay with eSewa
          </button>
          <button
            onClick={() => setActive("khalti")}
            className={`px-6 py-2.5 rounded-lg font-medium transition cursor-pointer ${
              active === "khalti"
                ? "bg-purple-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Pay with Khalti
          </button>
        </div>

        {/* Content Section */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Payment Form */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border">
            {active === "esewa" && <EsewaPayment />}
            {active === "khalti" && <KhaltiPayment />}
          </div>

          {/* Test Credentials */}
          <div className="bg-gray-50 shadow-lg rounded-2xl p-6 border">
            {active === "esewa" && (
              <div>
                <h2 className="font-semibold text-xl text-green-600 mb-4">
                  eSewa Test Credentials
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    ✅ eSewa ID: <b>9806800001 / 2 / 3 / 4 / 5</b>
                  </li>
                  <li>
                    ✅ Password: <b>Nepal@123</b>
                  </li>
                  <li>
                    ✅ MPIN: <b>1122</b>
                  </li>
                  <li>
                    ✅ Token: <b>123456</b>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  For full documentation, visit{" "}
                  <a
                    href="https://developer.esewa.com.np/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 underline"
                  >
                    eSewa Developer Portal
                  </a>
                  .
                </p>
              </div>
            )}

            {active === "khalti" && (
              <div>
                <h2 className="font-semibold text-xl text-purple-600 mb-4">
                  Khalti Test Credentials
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    ✅ Test Khalti IDs:{" "}
                    <b>
                      9800000000, 9800000001, 9800000002, 9800000003,
                      9800000004, 9800000005
                    </b>
                  </li>
                  <li>
                    ✅ MPIN: <b>1111</b>
                  </li>
                  <li>
                    ✅ OTP: <b>987654</b>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  For full documentation, visit{" "}
                  <a
                    href="https://docs.khalti.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 underline"
                  >
                    Khalti Developer Docs
                  </a>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
