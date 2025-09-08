import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BreakdownPage from "./pages/BreakdownPage";
import CalculatorPage from "./pages/CalculatorPage";
import TaxInfoPage from "./pages/TaxInfoPage";
import ResourcesPage from "./pages/ResourcesPage";



function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen ">
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/breakdown" element={<BreakdownPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/tax" element={<TaxInfoPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>          
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
