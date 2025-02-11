import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-white/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-white/50">
              <span className="inline-flex bg-gradient-to-r from-green-500 to-white bg-clip-text text-transparent">
              Alternative & Fundamental Data
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.green.200),theme(colors.gray.50),theme(colors.green.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Every Dataset You Actually Need
            </h2>
            <p className="text-lg text-white/65">
              StockFlow is built by traders, for traders. Our goal is to help every retail investor grow their knowledge and skills by providing them with crucial data and teaching them how to use it.
            </p>
          </div>
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <svg
                className="mb-3 fill-green-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm0 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10z"/>
                <path fillOpacity=".48" d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"/>
                <path d="M15.5 9.5L12 13l-3.5-3.5-1.4 1.4L12 15.8l4.9-4.9z"/>
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              AI-Powered Analytics
              </h3>
              <p className="text-white/65">
              Our AI models scan for unusual patterns, correlations, and market-moving trends.
              Get automated alerts when significant transactions occur.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-green-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M21 18h-2V6.5l-2.4 1.8-1.2-1.6L20 3v15zM4 3h2v11.5l2.4-1.8 1.2 1.6L5 18V3z"/>
                <path fillOpacity=".48" d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"/>
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              Off-Exchange & Dark Pool Activity
              </h3>
              <p className="text-white/65">
              Detect hidden trades executed in dark pools and
              analyze block trades by institutions before the market reacts.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-green-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M20 4h-8V2h-2v2H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-9 14H4v-2h7zm0-4H4v-2h7zm0-4H4V8h7zm9 8h-7v-2h7zm0-4h-7v-2h7zm0-4h-7V8h7z"/>
                <path fillOpacity=".48" d="M13 8h7v2h-7zm0 4h7v2h-7zm0 4h7v2h-7z"/>
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              Insider & Political Trading
              </h3>
              <p className="text-white/65">
              Analyze insider buying and selling activity by corporate executives and politicians.
              Identify patterns in political trading that could signal upcoming regulation changes.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-green-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 16H5V5h14v14z"/>
                <path fillOpacity=".48" d="M11 7h2v10h-2zm4 3h2v7h-2zm-8 3h2v4H7z"/>
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              Regulatory & Compliance Signals
              </h3>
              <p className="text-white/65">
              Stay ahead of policy shifts by tracking regulatory filings, compliance updates, and government actions that may impact market trends.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-green-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm0 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10z"/>
                <path fillOpacity=".48" d="M17 8.4L15.6 7l-3.6 3.6L8.4 7 7 8.4l3.6 3.6L7 15.6 8.4 17l3.6-3.6 3.6 3.6 1.4-1.4-3.6-3.6z"/>
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              Institutional & Hedge Fund Moves
              </h3>
              <p className="text-white/65">
              Monitor large-scale trades and portfolio adjustments made by hedge funds and institutions to identify emerging trends and investment opportunities.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-green-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M20.92 2.38A15.72 15.72 0 0 0 17.5 2a8.26 8.26 0 0 0-6 2.24Q9.81 6 9.66 8H8V6H6v2H4v2h2v2h2v-2h1.66a8.24 8.24 0 0 0 2.34 5.76A8.26 8.26 0 0 0 17.5 18a15.72 15.72 0 0 0 3.42-.38z"/>
                <path fillOpacity=".48" d="M17.5 4a13.75 13.75 0 0 1 2.87.32l-3.48 3.48A2.44 2.44 0 0 0 15.5 7a2.49 2.49 0 0 0-2.5 2.5A2.44 2.44 0 0 0 13.82 11l-3.48 3.48A13.75 13.75 0 0 1 10 11.66V10H8v1.66a6.27 6.27 0 0 0 1.76 4.42A6.28 6.28 0 0 0 17.5 16a13.75 13.75 0 0 0 2.87-.32l-3.48-3.48a2.44 2.44 0 0 0 .61-1.2 2.49 2.49 0 0 0-2.5-2.5 2.44 2.44 0 0 0-1.2.61l-3.48-3.48A13.75 13.75 0 0 1 17.5 4z"/>
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              Market Sentiment & Alternative Data
              </h3>
              <p className="text-white/65">
              Leverage sentiment analysis and alternative datasets—such as social media trends and financial news—to gauge market momentum before it moves.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
