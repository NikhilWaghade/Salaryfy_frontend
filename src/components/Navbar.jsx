import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger + close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-green-950 sticky top-0 z-50 border-b border-green-800 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent"
        >
          Salaryfy<span className="text-gray-200">.io</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-gray-200 font-medium">
          <Link to="/" className="hover:text-green-400 transition">Home</Link>
          <Link to="/breakdown" className="hover:text-green-400 transition">Breakdown</Link>
          <Link to="/calculator" className="hover:text-green-400 transition">Calculator</Link>
          <Link to="/tax" className="hover:text-green-400 transition">Tax Info</Link>
          <Link to="/resources" className="hover:text-green-400 transition">Resources</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-200 hover:text-green-400 transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/95 text-gray-200 font-medium px-6 pb-4 space-y-4">
          <Link to="/" className="block hover:text-green-400 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/breakdown" className="block hover:text-green-400 transition" onClick={() => setIsOpen(false)}>Breakdown</Link>
          <Link to="/calculator" className="block hover:text-green-400 transition" onClick={() => setIsOpen(false)}>Calculator</Link>
          <Link to="/tax" className="block hover:text-green-400 transition" onClick={() => setIsOpen(false)}>Tax Info</Link>
          <Link to="/resources" className="block hover:text-green-400 transition" onClick={() => setIsOpen(false)}>Resources</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
