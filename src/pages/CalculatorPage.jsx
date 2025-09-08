import SalaryCalculator from "../components/SalaryCalculator";

const CalculatorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6 bg-gradient-to-br from-black via-gray-900 to-green-900">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent ">Tax Calculator</h2>
      <SalaryCalculator />
    </div>
  );
};

export default CalculatorPage;
