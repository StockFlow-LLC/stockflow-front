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
            About Us
          </h1>
          <p 
            className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.green.300),theme(colors.white),theme(colors.green.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text text-xl font-medium text-transparent"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Uncovering Market Insights with Alternative Data & Automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div 
            className="space-y-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.white),theme(colors.green.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text text-2xl font-bold text-transparent">Our Mission</h2>
            <p className="text-gray-200">
              At StockFlow, we empower investors by transforming complex financial data into actionable insights. We believe that alternative data—ranging from insider trades to government contracts—should be accessible, transparent, and easy to navigate for everyone.
            </p>
          </div>

          <div 
            className="space-y-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.white),theme(colors.green.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text text-2xl font-bold text-transparent">Our Vision</h2>
            <p className="text-gray-200">
              We envision a future where investors and traders can harness the power of cutting-edge analytics and automation to stay ahead of the market with confidence and clarity.
            </p>
          </div>
        </div>

        <div 
          className="mt-20 bg-gradient-to-br from-gray-950/90 via-gray-900/90 to-gray-950/90 backdrop-blur-xl rounded-2xl p-8 relative overflow-hidden border border-gray-800/50"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -z-10"></div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.white),theme(colors.green.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text text-3xl font-bold text-transparent mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Continuously pushing boundaries to deliver next-generation market intelligence."
              },
              {
                title: "Transparency",
                description: "Building trust through clear communication and honest practices"
              },
              {
                title: "User-Centric",
                description: "Designing tools that put investors first, ensuring clarity, usability, and performance."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/30"
                data-aos="fade-up"
                data-aos-delay={500 + (index * 100)}
              >
                <h3 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.green.300),theme(colors.white))] bg-[length:200%_auto] bg-clip-text text-xl font-semibold text-transparent mb-3">{value.title}</h3>
                <p className="text-gray-200">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div 
          className="mt-20 text-center"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.white),theme(colors.green.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text text-2xl font-bold text-transparent mb-6">Join Us on Our Journey</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            We're building the future of algorithmic trading, and we'd love for you to be part of it. Join our community of traders and start your journey towards smarter, more efficient trading.
          </p>
        </div>
      </div>
    </div>
  );
}