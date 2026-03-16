const team = [
  {
    name: "Dr. Sarah Chen, MD",
    role: "Medical Director",
    specialty: "Addiction Medicine & Psychiatry",
    avatar: "SC",
    color: "from-teal-400 to-emerald-500",
    bio: "Board-certified in Addiction Medicine with 18+ years of experience helping patients achieve lasting recovery.",
  },
  {
    name: "Dr. Marcus Williams",
    role: "Clinical Psychologist",
    specialty: "Trauma & Dual Diagnosis",
    avatar: "MW",
    color: "from-blue-400 to-cyan-500",
    bio: "Specializes in PTSD and co-occurring disorders, with expertise in EMDR and CBT therapies.",
  },
  {
    name: "Lisa Gomez, LCSW",
    role: "Lead Therapist",
    specialty: "Family Systems & CBT",
    avatar: "LG",
    color: "from-violet-400 to-purple-500",
    bio: "Brings warmth and clinical excellence to individual and family therapy, supporting healing relationships.",
  },
  {
    name: "James Park, RN",
    role: "Nursing Supervisor",
    specialty: "Detox & Medical Care",
    avatar: "JP",
    color: "from-rose-400 to-pink-500",
    bio: "Compassionate nursing leader with 12 years specializing in safe, comfortable medical detoxification.",
  },
  {
    name: "Amanda Foster, CADC",
    role: "Certified Counselor",
    specialty: "Substance Use & Aftercare",
    avatar: "AF",
    color: "from-amber-400 to-orange-500",
    bio: "Personal recovery journey fuels her passion for guiding others through addiction treatment and aftercare.",
  },
  {
    name: "Dr. Kevin Osei",
    role: "Wellness Director",
    specialty: "Holistic & Integrative Health",
    avatar: "KO",
    color: "from-green-400 to-lime-500",
    bio: "Leads our holistic programming including yoga, nutrition counseling, and mindfulness-based therapies.",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 text-sm font-semibold rounded-full mb-4 border border-teal-100">
            Our Specialists
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
            Meet Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">
              Care Team
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Our multidisciplinary team of licensed professionals is dedicated to
            your recovery and well-being.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-teal-100 transition-all duration-300 group"
            >
              {/* Card top */}
              <div
                className={`bg-gradient-to-br ${member.color} p-8 flex items-center justify-center`}
              >
                <div className="w-20 h-20 bg-white/30 rounded-2xl flex items-center justify-center text-white text-2xl font-bold backdrop-blur-sm shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {member.avatar}
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-0.5">
                  {member.name}
                </h3>
                <p className="text-teal-600 font-semibold text-sm mb-1">
                  {member.role}
                </p>
                <p className="text-gray-400 text-xs mb-4 pb-4 border-b border-gray-100">
                  {member.specialty}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Join team CTA */}
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-3xl border border-teal-100">
          <p className="text-gray-700 font-semibold text-lg mb-2">
            Are you a healthcare professional passionate about addiction recovery?
          </p>
          <p className="text-gray-500 mb-5">
            We&apos;re always looking for compassionate clinicians to join our team.
          </p>
          <a
            href="mailto:careers@serenitycarerehab.com"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-teal-500 text-teal-600 font-semibold rounded-xl hover:bg-teal-500 hover:text-white transition-all duration-200"
          >
            View Career Opportunities
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
