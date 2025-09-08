const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-green-950 border-t border-green-800 py-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-300 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Salaryfy.io
          </span>{" "}
          | Financial Awareness Platform
        </p>
      </div>
    </footer>
  );
};

export default Footer;
