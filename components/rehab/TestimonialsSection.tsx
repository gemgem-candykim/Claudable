"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Michael R.",
    age: 34,
    program: "Residential Treatment",
    quote:
      "SerennityCare gave me back my life. The compassionate staff, the structured environment, and the genuine care I received changed everything. I've been sober for 2 years now and couldn't be more grateful.",
    rating: 5,
    avatar: "M",
    color: "bg-teal-500",
  },
  {
    name: "Sarah T.",
    age: 28,
    program: "Partial Hospitalization",
    quote:
      "I was skeptical at first, but the team here truly understood my dual diagnosis. The integrated mental health and addiction treatment made all the difference. I finally feel like myself again.",
    rating: 5,
    avatar: "S",
    color: "bg-emerald-500",
  },
  {
    name: "James L.",
    age: 45,
    program: "Medical Detox + IOP",
    quote:
      "After 20 years of struggling, I finally found a place that treated me with dignity. The medical detox team made the process as comfortable as possible, and the outpatient program fit perfectly with my work schedule.",
    rating: 5,
    avatar: "J",
    color: "bg-blue-500",
  },
  {
    name: "Emily K.",
    age: 31,
    program: "Family Therapy",
    quote:
      "Watching my daughter go through treatment was heartbreaking, but the family therapy program helped our whole family heal together. The counselors gave us tools we still use every day.",
    rating: 5,
    avatar: "E",
    color: "bg-violet-500",
  },
  {
    name: "David C.",
    age: 52,
    program: "Residential Treatment",
    quote:
      "I tried 3 other rehab centers before SerennityCare. The difference here is the individualized approach — they actually listened to me and built a program around my specific needs. Game changer.",
    rating: 5,
    avatar: "D",
    color: "bg-rose-500",
  },
  {
    name: "Maria G.",
    age: 39,
    program: "Intensive Outpatient",
    quote:
      "The holistic wellness program — yoga, nutrition, mindfulness — transformed not just my sobriety but my entire well-being. I'm healthier and happier than I've ever been in my adult life.",
    rating: 5,
    avatar: "M",
    color: "bg-amber-500",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const visible = [
    testimonials[active],
    testimonials[(active + 1) % testimonials.length],
    testimonials[(active + 2) % testimonials.length],
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-teal-500/20 text-teal-300 text-sm font-semibold rounded-full mb-4 border border-teal-400/30">
            Patient Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Real People,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-400">
              Real Recovery
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Hear from the courageous individuals who chose to transform their
            lives with SerennityCare.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {visible.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className={`bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-7 transition-all duration-300 ${
                i === 0 ? "scale-100 opacity-100" : "scale-95 opacity-70"
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg
                    key={j}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 leading-relaxed mb-6 text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-white/50 text-xs">
                    Age {t.age} · {t.program}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active ? "w-6 h-2 bg-teal-400" : "w-2 h-2 bg-white/30"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
