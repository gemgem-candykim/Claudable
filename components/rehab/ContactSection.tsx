"use client";

import { useState } from "react";

const contactInfo = [
  {
    icon: "📞",
    label: "24/7 Helpline",
    value: "1-800-555-1234",
    sub: "Free, confidential call",
    href: "tel:+18005551234",
  },
  {
    icon: "✉️",
    label: "Email Us",
    value: "help@serenitycarerehab.com",
    sub: "We reply within 24 hours",
    href: "mailto:help@serenitycarerehab.com",
  },
  {
    icon: "📍",
    label: "Our Location",
    value: "1250 Healing Springs Blvd",
    sub: "Asheville, NC 28801",
    href: "#",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 text-sm font-semibold rounded-full mb-4 border border-teal-100">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
            Take the First{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">
              Courageous Step
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Reaching out is the hardest — and most important — step. Our
            admissions team is available 24/7 to help you or a loved one.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-0.5">
                    {info.label}
                  </p>
                  <p className="font-bold text-gray-900">{info.value}</p>
                  <p className="text-gray-500 text-sm">{info.sub}</p>
                </div>
              </a>
            ))}

            {/* Insurance banner */}
            <div className="p-5 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl text-white">
              <p className="font-bold text-lg mb-2">💳 Insurance Accepted</p>
              <p className="text-white/80 text-sm leading-relaxed">
                We work with most major insurance providers including Aetna,
                BCBS, Cigna, United, and more. Our team can verify your benefits
                for free.
              </p>
              <button className="mt-4 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-semibold transition-colors">
                Verify My Insurance →
              </button>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 bg-slate-50 rounded-3xl p-8 border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                  ✅
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Message Received!
                </h3>
                <p className="text-gray-600 max-w-sm mx-auto">
                  Thank you for reaching out. Our admissions team will contact
                  you within 1 hour. You are not alone — help is on the way.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Request a Confidential Consultation
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent bg-white text-gray-900 placeholder-gray-400 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent bg-white text-gray-900 placeholder-gray-400 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent bg-white text-gray-900 placeholder-gray-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Program of Interest
                    </label>
                    <select
                      name="program"
                      value={form.program}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent bg-white text-gray-900 transition"
                    >
                      <option value="">Select a program...</option>
                      <option value="detox">Medical Detox</option>
                      <option value="residential">Residential Treatment</option>
                      <option value="php">Partial Hospitalization (PHP)</option>
                      <option value="iop">Intensive Outpatient (IOP)</option>
                      <option value="other">Not Sure Yet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      How Can We Help?
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us a little about what you're going through..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent bg-white text-gray-900 placeholder-gray-400 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-teal-200 hover:shadow-teal-300 hover:scale-[1.02] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="w-5 h-5 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send My Request →"
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    🔒 All information is confidential and HIPAA-compliant
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
