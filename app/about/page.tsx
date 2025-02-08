"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-20">
          <h1 
            className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.white),theme(colors.green.300),theme(colors.gray.200),theme(colors.green.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
            data-aos="fade-up"
          >
            About StockFlow
          </h1>
          <p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Empowering traders with intelligent automation and data-driven insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div 
            className="space-y-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-2xl font-bold text-green-500">Our Mission</h2>
            <p className="text-gray-400">
              At StockFlow, we're on a mission to democratize algorithmic trading by making it accessible to traders of all experience levels. We believe that powerful trading tools should be intuitive and available to everyone.
            </p>
          </div>

          <div 
            className="space-y-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="text-2xl font-bold text-green-500">Our Vision</h2>
            <p className="text-gray-400">
              We envision a future where every trader can harness the power of automation and data analytics to make informed decisions and achieve their financial goals.
            </p>
          </div>
        </div>

        <div 
          className="mt-20 bg-gray-800 rounded-2xl p-8 relative overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -z-10"></div>
          <h2 className="text-2xl font-bold text-green-500 mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Constantly pushing boundaries to create cutting-edge trading solutions"
              },
              {
                title: "Transparency",
                description: "Building trust through clear communication and honest practices"
              },
              {
                title: "User-Centric",
                description: "Putting our users' needs and success at the heart of everything we do"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-gray-700/50 p-6 rounded-xl"
                data-aos="fade-up"
                data-aos-delay={500 + (index * 100)}
              >
                <h3 className="text-xl font-semibold mb-3 text-green-400">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div 
          className="mt-20 text-center"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <h2 className="text-2xl font-bold text-green-500 mb-6">Join Us on Our Journey</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're building the future of algorithmic trading, and we'd love for you to be part of it. Join our community of traders and start your journey towards smarter, more efficient trading.
          </p>
        </div>
      </div>
    </div>
  );
}