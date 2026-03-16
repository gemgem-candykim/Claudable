"use client";

import { useState } from "react";

const programs = [
  {
    id: "detox",
    tag: "Step 1",
    title: "Medical Detox",
    duration: "3–10 Days",
    icon: "🏥",
    color: "teal",
    description:
      "A medically supervised detoxification program ensures your safety and comfort as your body clears substances under the care of our clinical team.",
    features: [
      "24/7 medical monitoring",
      "Withdrawal symptom management",
      "Medication-assisted comfort",
      "Nutritional support",
    ],
  },
  {
    id: "residential",
    tag: "Step 2",
    title: "Residential Treatment",
    duration: "30–90 Days",
    icon: "🏡",
    color: "emerald",
    description:
      "Immersive, live-in treatment providing intensive therapy, skill-building, and peer support in a structured, healing environment.",
    features: [
      "Individual & group therapy",
      "Psychiatric care",
      "Life skills development",
      "Recreational activities",
    ],
  },
  {
    id: "php",
    tag: "Step 3",
    title: "Partial Hospitalization",
    duration: "2–4 Weeks",
    icon: "🌅",
    color: "blue",
    description:
      "Intensive daytime programming with the flexibility to return home each evening, bridging the gap between inpatient and outpatient care.",
    features: [
      "6 hours/day of therapy",
      "Medical oversight",
      "Transition planning",
      "Family involvement",
    ],
  },
  {
    id: "iop",
    tag: "Step 4",
    title: "Intensive Outpatient",
    duration: "8–12 Weeks",
    icon: "🔄",
    color: "violet",
    description:
      "Flexible scheduling that allows you to maintain work or school commitments while receiving robust treatment and support.",
    features: [
      "3–5 days/week sessions",
      "Relapse prevention",
      "Career counseling",
      "Community support",
    ],
  },
];

const colorMap: Record<string, { badge: string; dot: string; btn: string; ring: string }> = {
  teal: {
    badge: "bg-teal-100 text-teal-700",
    dot: "bg-teal-500",
    btn: "bg-teal-500 hover:bg-teal-600",
    ring: "ring-teal-500",
  },
  emerald: {
    badge: "bg-emerald-100 text-emerald-700",
    dot: "bg-emerald-500",
    btn: "bg-emerald-500 hover:bg-emerald-600",
    ring: "ring-emerald-500",
  },
  blue: {
    badge: "bg-blue-100 text-blue-700",
    dot: "bg-blue-500",
    btn: "bg-blue-500 hover:bg-blue-600",
    ring: "ring-blue-500",
  },
  violet: {
    badge: "bg-violet-100 text-violet-700",
    dot: "bg-violet-500",
    btn: "bg-violet-500 hover:bg-violet-600",
    ring: "ring-violet-500",
  },
};

export default function ProgramsSection() {
  const [active, setActive] = useState("detox");
  const program = programs.find((p) => p.id === active)!;
  const colors = colorMap[program.color];

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 text-sm font-semibold rounded-full mb-4 border border-teal-100">
            Treatment Programs
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
            Your Recovery{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">
              Continuum
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            We guide you through every level of care — from detox to lifelong
            aftercare support.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {programs.map((p) => {
            const c = colorMap[p.color];
            return (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  active === p.id
                    ? `${c.btn} text-white shadow-lg ring-2 ${c.ring} ring-offset-2`
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <span>{p.icon}</span>
                {p.title}
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl">
                {program.icon}
              </div>
              <div>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${colors.badge}`}
                >
                  {program.tag}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">
                  {program.title}
                </h3>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              {program.description}
            </p>

            <div className="flex items-center gap-2 mb-6">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-gray-500 text-sm">
                Typical duration:{" "}
                <strong className="text-gray-800">{program.duration}</strong>
              </span>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`inline-flex items-center gap-2 px-6 py-3 ${colors.btn} text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg`}
            >
              Learn More
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 text-lg mb-4">
              What&apos;s Included:
            </h4>
            {program.features.map((feature, i) => (
              <div
                key={feature}
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-gray-100 hover:border-teal-200 transition-colors"
              >
                <div
                  className={`w-8 h-8 ${colors.dot} rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {i + 1}
                </div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}

            {/* Step tracker */}
            <div className="mt-8 p-5 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl border border-teal-100">
              <p className="text-sm font-semibold text-teal-700 mb-3">
                Recovery Journey Steps
              </p>
              <div className="flex items-center gap-2">
                {programs.map((p, i) => (
                  <div key={p.id} className="flex items-center gap-2 flex-1">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        p.id === active
                          ? `${colorMap[p.color].dot} text-white scale-110`
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {i + 1}
                    </div>
                    {i < programs.length - 1 && (
                      <div className="flex-1 h-0.5 bg-gray-200 rounded" />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2">
                {programs.map((p) => (
                  <span key={p.id} className="text-xs text-gray-400 text-center" style={{ width: "25%" }}>
                    {p.title.split(" ")[0]}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
