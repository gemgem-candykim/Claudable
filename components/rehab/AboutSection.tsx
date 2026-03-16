const highlights = [
  {
    icon: "🏥",
    title: "Accredited Facility",
    desc: "CARF-accredited and state-licensed, meeting the highest standards of care.",
  },
  {
    icon: "🔬",
    title: "Evidence-Based Methods",
    desc: "Treatments grounded in the latest clinical research and best practices.",
  },
  {
    icon: "🤝",
    title: "Individualized Plans",
    desc: "Every recovery plan is tailored to your unique needs, history, and goals.",
  },
  {
    icon: "🌿",
    title: "Serene Environment",
    desc: "A peaceful, nature-surrounded campus designed to promote healing and calm.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image / Visual */}
          <div className="relative">
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-teal-600 to-emerald-700 aspect-[4/3] flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 60%)",
                  }}
                />
              </div>
              <div className="relative z-10 text-center px-8">
                <div className="text-8xl mb-4">🌿</div>
                <p className="text-white/90 text-2xl font-bold">
                  Healing in a place
                </p>
                <p className="text-teal-200 text-xl">of peace & safety</p>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-3">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-2xl">
                🏆
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">
                  CARF Accredited
                </p>
                <p className="text-gray-500 text-xs">Since 1998</p>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-2xl">
                💚
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">5,000+ Helped</p>
                <p className="text-gray-500 text-xs">and counting</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 text-sm font-semibold rounded-full mb-4 border border-teal-100">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              More Than a Clinic —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">
                A Community
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 1998, SerennityCare has been a beacon of hope for
              individuals and families facing the challenges of addiction and
              mental health. Our multidisciplinary team of physicians,
              therapists, and wellness coaches work together to create
              personalized treatment experiences.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We believe recovery is not just about stopping harmful behaviors —
              it&apos;s about rediscovering purpose, rebuilding relationships, and
              creating a life worth living.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">
                      {item.title}
                    </p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
