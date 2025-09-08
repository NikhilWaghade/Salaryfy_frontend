import { useState } from "react";
import { Calculator } from "lucide-react"; // optional icon

const SalaryCalculator = () => {
  const [salary, setSalary] = useState("");
  const [investment, setInvestment] = useState("");
  const [result, setResult] = useState(null);

  const calculateTax = () => {
    let taxableIncome = salary - investment;
    let tax = 0;

    if (taxableIncome <= 250000) tax = 0;
    else if (taxableIncome <= 500000) tax = (taxableIncome - 250000) * 0.05;
    else if (taxableIncome <= 1000000)
      tax = 12500 + (taxableIncome - 500000) * 0.2;
    else tax = 112500 + (taxableIncome - 1000000) * 0.3;

    setResult({ taxableIncome, tax });
  };

  return (
    <div className=" flex items-center justify-center  from-black via-gray-900 to-green-950 px-4">
      <div className="bg-white/10 from-green-900/90 to-black/90 backdrop-blur-md shadow-2xl p-8 rounded-2xl w-full max-w-lg border border-green-800">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="w-8 h-8 text-green-400" />
          <h2 className="text-2xl font-extrabold text-green-300">
            Tax Calculator
          </h2>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Enter Annual Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-black/50 text-white placeholder-gray-400 border border-green-800 focus:ring-2 focus:ring-green-400 outline-none"
          />
          <input
            type="number"
            placeholder="Enter Investments (80C)"
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-black/50 text-white placeholder-gray-400 border border-green-800 focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        {/* Button */}
        <button
          onClick={calculateTax}
          className="w-full mt-6 py-3 rounded-lg font-semibold text-lg text-black bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 transition-all duration-300 shadow-lg"
        >
          Calculate
        </button>

        {/* Results */}
        {result && (
          <div className="mt-8 bg-black/40 p-5 rounded-xl border border-green-700 text-white">
            <p className="text-gray-300">
              Taxable Income:{" "}
              <span className="text-green-400 font-semibold">
                ₹{result.taxableIncome.toLocaleString("en-IN")}
              </span>
            </p>
            <p className="text-lg mt-2 font-bold text-red-400">
              Tax Payable: ₹{result.tax.toLocaleString("en-IN")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SalaryCalculator;
