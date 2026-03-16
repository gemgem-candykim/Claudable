"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900" />

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-300/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 border border-teal-400/30 rounded-full text-teal-300 text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
          Nationally Accredited Rehabilitation Center
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          A New Chapter{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-400">
            Starts Here
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">
          Compassionate, evidence-based addiction recovery and rehabilitation
          programs designed to help you heal — body, mind, and spirit.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#contact"
            onClick={(e) => handleNav(e, "#contact")}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300"
          >
            Start Your Recovery Today
          </a>
          <a
            href="#programs"
            onClick={(e) => handleNav(e, "#programs")}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold text-lg rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
          >
            Explore Our Programs
          </a>
        </div>

        {/* Quick Trust Signals */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
          {[
            { icon: "🛡️", text: "Insurance Accepted" },
            { icon: "🕐", text: "24/7 Admissions" },
            { icon: "🔒", text: "Confidential & Safe" },
            { icon: "⭐", text: "4.9/5 Patient Rating" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L60 72C120 64 240 48 360 44C480 40 600 48 720 52C840 56 960 56 1080 52C1200 48 1320 40 1380 36L1440 32V80H0Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </section>
  );
}
