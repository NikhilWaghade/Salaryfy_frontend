import { Link } from "react-router-dom";
import taxImg from "../assets/tax.png";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import bg_img from "../assets/footer_bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 gap-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Take Control of Your{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Salary & Taxes
            </span>{" "}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Salaryfy.io helps you understand your salary structure, calculate
            taxes, and make smarter financial decisions with simple, easy-to-use
            tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* Animated Border Button */}
            <Link
              to="/calculator"
              className="relative px-6 py-3 rounded-lg font-semibold shadow text-white transition"
            >
              {/* Border Layer */}
              <span className="absolute inset-0 rounded-lg p-[3px] bg-gradient-to-r from-green-400 via-pink-500 to-blue-600 animate-border">
                <span className="block h-full w-full rounded-lg bg-transparent"></span>
              </span>

              {/* Button Text */}
              <span className="relative z-10">Get Started</span>
            </Link>

            {/* Normal Outline Button */}
            <Link
              to="/resources"
              className="relative px-6 py-3 rounded-lg font-semibold text-green-400 transition"
            >
              <span className="absolute inset-0 rounded-lg p-[3px] bg-gradient-to-r from-pink-400 via-pink-500 to-green-600 animate-border">
                <span className="block h-full w-full rounded-lg bg-black"></span>
              </span>

              <span className="relative z-10">Learn More</span>
            </Link>
          </div>
        </div>

        {/* Illustration */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={taxImg}
            alt="Salaryfy Illustration"
            className="w-80 md:w-[28rem] drop-shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3 text-center">
          <div className="p-8 rounded-xl bg-gray-800 border border-green-500/30 hover:shadow-xl hover:shadow-green-500/20 transition">
            <div className="text-5xl mb-4">💵</div>
            <h3 className="text-2xl font-bold mb-2 text-green-400">
              Salary Breakdown
            </h3>
            <p className="text-gray-300">
              See exactly how your salary is divided into Basic, HRA, Allowances
              & Deductions.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gray-800 border border-green-500/30 hover:shadow-xl hover:shadow-green-500/20 transition">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-2 text-green-400">
              Tax Calculator
            </h3>
            <p className="text-gray-300">
              Instantly calculate your tax based on salary, age & investments
              with simple inputs.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gray-800 border border-green-500/30 hover:shadow-xl hover:shadow-green-500/20 transition">
            <div className="text-5xl mb-4">📖</div>
            <h3 className="text-2xl font-bold mb-2 text-green-400">
              Learning Resources
            </h3>
            <p className="text-gray-300">
              Explore guides to financial literacy & build strong
              money-management skills.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-green-400">
          How Salaryfy Works 🚀
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          <div className="p-6 rounded-xl bg-gray-800 border border-green-500/30 hover:shadow-xl hover:shadow-green-500/20 transition">
            <h3 className="text-xl font-semibold mb-3">1. Enter Your Salary</h3>
            <p className="text-gray-400">
              Start by providing your monthly or yearly income details.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-gray-800 border border-green-500/30 hover:shadow-xl hover:shadow-green-500/20 transition">
            <h3 className="text-xl font-semibold mb-3">2. Breakdown & Taxes</h3>
            <p className="text-gray-400">
              Get a clear view of salary components and tax calculations.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-gray-800 border border-green-500/30 hover:shadow-xl hover:shadow-green-500/20 transition">
            <h3 className="text-xl font-semibold mb-3">3. Learn & Save</h3>
            <p className="text-gray-400">
              Explore resources to manage money and improve savings.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Teaser */}
      <section className="min-h-screen flex items-center bg-gradient-to-r from-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column - Text */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">
              What Our Users Say
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-md mx-auto md:mx-0">
              Thousands of students and employees use Salaryfy.io to improve
              their financial knowledge and save more money every month.
            </p>
            <Link
              to="/resources"
              className="relative px-6 py-3 rounded-lg font-semibold text-green-400 transition"
            >
              <span className="absolute inset-0 rounded-lg p-[3px] bg-gradient-to-r from-pink-400 via-pink-500 to-green-600 animate-border">
                <span className="block h-full w-full rounded-lg bg-black"></span>
              </span>

              <span className="relative z-10">Read More Stories</span>
            </Link>
          </div>

          {/* Right Column - Responsive Lottie Animation */}
          <div className="flex justify-center w-full">
            <DotLottieReact
              src="https://lottie.host/e054588f-ef73-4bf9-808f-1b33e214a563/CA3uLer1Ra.lottie"
              loop
              autoplay
              className="w-[300px] h-[300px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[400px] lg:w-[700px] lg:h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* Call to Action & bg Image */}

      <section className="h-[500px] relative  py-40">
        <section
          className="absolute inset-0 from-black/80 via-gray-900/80 to-green-900/80 text-white bg-cover bg-center grayscale "
          style={{
            backgroundImage: `url(${bg_img})`,
          }}
        />

        {/* Overlay for dark effect */}
        <div className="absolute inset-0  bg-gradient-to-b from-black via-black/70 to-green-900/70 "></div>

        <div className="relative max-w-5xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to take charge of your finances?
          </h2>
          <p className="text-lg mb-16 text-gray-300">
            Join thousands of learners using Salaryfy.io to understand their
            salaries and save more.
          </p>
          <Link
            to="/calculator"
            className="px-8 py-4 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-400 transition bg-gradient-to-r from-green-400 via-pink-500 to-blue-600 animate-border  "
          >
            Start Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
