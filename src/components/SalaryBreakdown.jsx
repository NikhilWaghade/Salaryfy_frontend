import { useState } from "react";

const SalaryBreakdown = () => {
  const [ctc, setCtc] = useState("");
  const [result, setResult] = useState(null);

  const calculateBreakdown = () => {
    if (!ctc || ctc <= 0) return;

    let basic = ctc * 0.4;
    let hra = ctc * 0.2;
    let allowances = ctc * 0.2;
    let deductions = ctc * 0.1;
    let takeHome = ctc - deductions;

    setResult({ basic, hra, allowances, deductions, takeHome });
  };

  return (
    <div className=" flex items-center justify-center  px-4">
      <div className="bg-white/10 backdrop-blur-md border border-green-500/30 shadow-lg p-8 rounded-2xl w-full max-w-lg text-center text-white">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
          Salary Breakdown
        </h2>

        {/* Input */}
        <input
          type="number"
          placeholder="Enter Annual CTC (₹)"
          value={ctc}
          onChange={(e) => setCtc(e.target.value)}
          className="border border-green-400/40 bg-black/40 text-white rounded-lg px-4 py-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Button */}
        <button
          onClick={calculateBreakdown}
          className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transform transition"
        >
          Calculate
        </button>

        {/* Results */}
        {result && (
          <div className="mt-6 text-left space-y-2 bg-black/30 rounded-lg p-4">
            <p>
              <span className="font-semibold text-green-300">Basic Salary:</span>{" "}
              ₹{result.basic.toFixed(2)}
            </p>
            <p>
              <span className="font-semibold text-green-300">HRA:</span> ₹
              {result.hra.toFixed(2)}
            </p>
            <p>
              <span className="font-semibold text-green-300">Allowances:</span>{" "}
              ₹{result.allowances.toFixed(2)}
            </p>
            <p>
              <span className="font-semibold text-green-300">Deductions:</span>{" "}
              ₹{result.deductions.toFixed(2)}
            </p>
            <p className="font-bold text-green-400 text-lg">
              ✅ Take-Home: ₹{result.takeHome.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SalaryBreakdown;
