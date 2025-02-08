"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useLayoutEffect } from "react";
import stockflowpng from "@/public/images/stockflow.png";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useLayoutEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/articles", label: "Articles" },
    { href: "/about", label: "About Us" },
    { href: "/#workflows", label: "Features" },
  ];

  const handleWaitlistClick = () => {
    if (isOpen) setIsOpen(false);

    if (pathname !== "/") {
      router.push("/#waitlist-form");
    } else {
      document
        .getElementById("waitlist-form")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="bg-transparent px-4 lg:px-6 py-2.5">
      <nav className="mx-auto max-w-screen-xl">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="relative z-[60]">
            <Image
              src={stockflowpng}
              alt="StockFlow Logo"
              width={40}
              height={50}
              className="h-[50px] w-auto lg:h-[60px]"
              priority
            />
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-[60] p-2"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gray-600 transition-all duration-300 transform ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-600 transition-all duration-300 transform ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>

          {/* Mobile Drawer */}
          {isOpen && (
            <div className="fixed inset-0 z-[50] lg:hidden">
              {/* Backdrop with forced stacking context */}
              <div 
                className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl [transform:translateZ(0)] will-change-transform"
                onClick={() => setIsOpen(false)}
                style={{ 
                  isolation: 'isolate',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden'
                }}
              />
              
              {/* Menu Content */}
              <div 
                className="relative h-full flex flex-col"
                style={{ 
                  isolation: 'isolate',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden'
                }}
              >
                <div className="flex flex-col h-full pt-20 px-6">
                  <ul className="space-y-4">
                    {links.map(({ href, label }) => (
                      <li key={href}>
                        <Link
                          href={href}
                          onClick={() => setIsOpen(false)}
                          className={`block py-2 text-lg transition-colors ${
                            pathname === href ||
                            (href === "/articles" && pathname.startsWith("/articles"))
                              ? "text-white font-bold"
                              : "text-gray-400 hover:text-white"
                          }`}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <button
                      onClick={handleWaitlistClick}
                      className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0%,#00ff88_50%,#FFFFFF_100%)]" />
                      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Join Waitlist
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center justify-center flex-grow">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`py-2 mx-4 transition-colors ${
                  pathname === href ||
                  (href === "/articles" && pathname.startsWith("/articles"))
                    ? "text-white font-bold"
                    : "text-gray-700 hover:text-green-700 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop Waitlist Button */}
          <div className="hidden lg:block">
            <button
              onClick={handleWaitlistClick}
              className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0%,#00ff88_50%,#FFFFFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Join Waitlist
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}