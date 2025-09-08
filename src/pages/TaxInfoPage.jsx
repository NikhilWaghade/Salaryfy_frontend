import TaxInfo from "../components/TaxInfo";

const TaxInfoPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-950 flex flex-col items-center py-16 px-6">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent drop-shadow-lg">
        Tax Information
      </h2>

      {/* Card Container */}
      <div className="w-full max-w-4xl bg-gradient-to-br from-green-900/90 to-black/90 border border-green-800 rounded-2xl p-8 backdrop-blur-md">
        <TaxInfo />
      </div>
    </div>
  );
};

export default TaxInfoPage;
