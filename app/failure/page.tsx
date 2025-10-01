import Link from "next/link";

export default function FailurePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center border border-red-200">
        <div className="text-red-500 text-6xl mb-4">❌</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Failed
        </h1>
        <p className="text-gray-600 mb-6">
          Oops! Something went wrong while processing your payment. Please try
          again.
        </p>

        <Link
          href="/"
          className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 px-6 rounded-lg transition duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
