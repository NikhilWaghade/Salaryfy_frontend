const LearningResources = () => {
  const resources = [
    {
      title: " How to Save 20% of Your Salary",
      desc: "Learn smart techniques to manage monthly expenses and grow savings.",
    },
    {
      title: " Best Investment Options for Beginners",
      desc: "Understand SIPs, mutual funds, and safe investment strategies.",
    },
    {
      title: " Understanding PF & Gratuity",
      desc: "Know how provident fund and gratuity impact your long-term wealth.",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mt-10">
      {resources.map((res, i) => (
        <div
          key={i}
          className="bg-gradient-to-br from-green-900/90 to-black/90 border border-green-700 p-6 rounded-xl text-white shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          {/* Title */}
          <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            {res.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed">{res.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default LearningResources;
