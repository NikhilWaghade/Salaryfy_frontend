import { FaRupeeSign, FaShieldAlt, FaHeartbeat } from "react-icons/fa";

const TaxInfo = () => {
  return (
    <div className="bg-gradient-to-br from-green-950 via-black to-green-900 border border-green-700/40 shadow-lg p-6 rounded-xl text-white max-w-2xl mx-auto">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent drop-shadow-sm">
         Indian Tax Slabs (FY 2025)
      </h2>

      {/* Tax Slabs */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-black/40 p-4 rounded-lg border border-green-700/40 shadow-sm hover:scale-105 transition">
          <p className="text-base font-medium">Up to ₹2.5L</p>
          <p className="text-green-400 font-bold text-sm">✅ No Tax</p>
        </div>

        <div className="bg-black/40 p-4 rounded-lg border border-green-700/40 shadow-sm hover:scale-105 transition">
          <p className="text-base font-medium">₹2.5L – ₹5L</p>
          <p className="text-green-300 font-bold text-sm">5%</p>
        </div>

        <div className="bg-black/40 p-4 rounded-lg border border-green-700/40 shadow-sm hover:scale-105 transition">
          <p className="text-base font-medium">₹5L – ₹10L</p>
          <p className="text-green-300 font-bold text-sm">20%</p>
        </div>

        <div className="bg-black/40 p-4 rounded-lg border border-green-700/40 shadow-sm hover:scale-105 transition">
          <p className="text-base font-medium">Above ₹10L</p>
          <p className="text-green-300 font-bold text-sm">30%</p>
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-6 space-y-3 bg-black/30 rounded-lg p-4 border border-green-700/30 text-sm">
        <p className="flex items-center gap-2">
          <FaRupeeSign className="text-green-400" />
          <span>
            <span className="text-green-300 font-semibold">80C</span> (PF, LIC, ELSS, etc.) helps reduce taxable income.
          </span>
        </p>
        <p className="flex items-center gap-2">
          <FaShieldAlt className="text-green-400" />
          <span>
            Home Loan Interest (<span className="text-green-300 font-semibold">24(b)</span>) gives tax benefits.
          </span>
        </p>
        <p className="flex items-center gap-2">
          <FaHeartbeat className="text-green-400" />
          <span>
            Health Insurance (<span className="text-green-300 font-semibold">80D</span>) provides extra savings.
          </span>
        </p>
      </div>
    </div>
  );
};

export default TaxInfo;
