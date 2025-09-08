import SalaryBreakdown from "../components/SalaryBreakdown";

const BreakdownPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-green-900 px-6 py-16">
      {/* Page Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-green-400 to-white  text-transparent bg-clip-text drop-shadow-lg">
        Salary Breakdown Calculator  
      </h2>

      {/* Salary Breakdown Component */}
      <SalaryBreakdown />

      {/* Extra Note */}
      <p className="mt-8 text-green-300/80 text-center max-w-2xl">
        Enter your <span className="font-semibold text-green-400">annual CTC</span> 
        to see a clear breakdown of <span className="text-green-400">Basic, HRA, Allowances, Deductions</span> 
        and your final <span className="font-bold text-green-500">Take-Home Salary</span>.
      </p>
    </div>
  );
};

export default BreakdownPage;
