import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section>
  <div className="mx-auto max-w-6xl px-4 sm:px-6">
    <div className="py-12 md:py-20">
      <div className="pb-12 text-center md:pb-20">
        <h1
          className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.white),theme(colors.green.300),theme(colors.gray.200),theme(colors.green.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl max-w-4xl mx-auto"
          data-aos="fade-up"
        >
          Democratizing Wall Street One Dataset at a Time
        </h1>
        <div className="mx-auto max-w-3xl">
          <p
            className="mb-8 text-xl text-white/65"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            We are a team of Wall Street professionals who are passionate about democratizing access to financial data.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div data-aos="fade-up" data-aos-delay={400} className="w-full sm:w-auto">
              <a href="#waitlist-form" className="block w-full sm:w-auto text-center relative font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-cyan-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-cyan-600 group">
                <span className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-600 group-hover:opacity-100" />
                <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950 border border-transparent group-hover:border-cyan-300">
                  <span className="transition-all duration-500 group-hover:text-cyan-300">Join Waitlist</span>
                </span>
              </a>
            </div>
            <div data-aos="fade-up" data-aos-delay={600} className="w-full sm:w-auto">
              <a href="articles" className="block w-full sm:w-auto text-center relative font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600 group">
                <span className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 group-hover:opacity-100" />
                <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950 border border-transparent group-hover:border-emerald-300">
                  <div className="relative z-10 flex items-center justify-center space-x-3">
                    <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300">See Articles</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300">
                      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                    </svg>
                  </div>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
