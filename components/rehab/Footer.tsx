const footerLinks = {
  Programs: [
    "Medical Detox",
    "Residential Treatment",
    "Partial Hospitalization",
    "Intensive Outpatient",
    "Aftercare Support",
  ],
  Services: [
    "Mental Health Care",
    "Medication-Assisted Treatment",
    "Family Therapy",
    "Holistic Wellness",
    "Dual Diagnosis",
  ],
  Resources: [
    "Patient FAQ",
    "Insurance Verification",
    "Blog & Articles",
    "Recovery Stories",
    "Refer a Patient",
  ],
  Company: [
    "About SerennityCare",
    "Our Team",
    "Accreditations",
    "Careers",
    "Contact Us",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">
              Ready to Start Your Recovery?
            </h3>
            <p className="text-teal-100">
              Our team is available 24/7 — no judgment, just support.
            </p>
          </div>
          <a
            href="tel:+18005551234"
            className="flex-shrink-0 px-8 py-4 bg-white text-teal-600 font-bold text-lg rounded-2xl hover:scale-105 transition-transform shadow-lg"
          >
            📞 Call 1-800-555-1234
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold">
                Serennity<span className="text-teal-400">Care</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Compassionate, evidence-based rehabilitation since 1998. Your new
              chapter starts here.
            </p>
            <div className="flex gap-3">
              {["Facebook", "Instagram", "LinkedIn", "YouTube"].map((s) => (
                <button
                  key={s}
                  title={s}
                  className="w-9 h-9 bg-white/10 hover:bg-teal-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 text-xs font-bold"
                >
                  {s[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-teal-400 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2026 SerennityCare Rehabilitation Center. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-teal-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              HIPAA Notice
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-center text-xs text-gray-600 max-w-3xl mx-auto">
          SerennityCare is not a crisis service. If you or someone you know is
          in immediate danger, please call 911 or the National Suicide Prevention
          Lifeline at 988. For addiction help, call SAMHSA&apos;s helpline at
          1-800-662-4357.
        </p>
      </div>
    </footer>
  );
}
