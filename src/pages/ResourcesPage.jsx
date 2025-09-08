import LearningResources from "../components/LearningResources";

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-950 flex flex-col items-center py-16 px-6">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent ">
        Learning Resources
      </h2>

      {/* Card Section */}
      <div className="w-full max-w-6xl">
        <LearningResources />
      </div>
    </div>
  );
};

export default ResourcesPage;
