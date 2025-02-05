import React from 'react';
import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

const Form = () => {
  return (
    <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-900 p-6 rounded-lg shadow-lg 
      before:w-20 before:h-20 before:absolute before:bg-green-600/25 before:rounded-full before:-z-10 before:blur-2xl 
      after:w-28 after:h-28 after:absolute after:bg-green-400/25 after:rounded-full after:-z-10 after:blur-lg after:top-20 after:-right-10">
      <form method="post" action="#">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300" htmlFor="name">Name</label>
          <input className="mt-1 p-2 w-full bg-gray-800 border border-gray-700 rounded-md text-white" type="text" id="name" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300" htmlFor="email">Email Address</label>
          <input className="mt-1 p-2 w-full bg-gray-800 border border-gray-700 rounded-md text-white" type="email" id="email" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300" htmlFor="bio">Message</label>
          <textarea className="mt-1 p-2 w-full bg-gray-800 border border-gray-700 rounded-md text-white" rows={3} id="bio" />
        </div>
        <div className="flex justify-end">
          <button className="bg-gradient-to-r from-green-700 to-green-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80" type="submit">
            Join Waitlist
          </button>
        </div>
      </form>
    </div>
  );
};

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-transparent via-gray-900/50 py-5 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.green.300),theme(colors.gray.50),theme(colors.green.400),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Join the Waitlist
            </h2>
          </div>
          {/* Integrated Form */}
          <div className="mt-12">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
