const services = [
  {
    icon: "🧠",
    title: "Mental Health Support",
    description:
      "Dual-diagnosis treatment integrating psychiatric care with addiction therapy for comprehensive healing.",
    color: "from-purple-500 to-violet-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    icon: "💊",
    title: "Medication-Assisted Treatment",
    description:
      "FDA-approved medications combined with counseling to reduce cravings and prevent relapse.",
    color: "from-blue-500 to-cyan-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: "🫂",
    title: "Group Therapy",
    description:
      "Facilitated peer support sessions that build community, accountability, and shared strength.",
    color: "from-teal-500 to-emerald-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
  },
  {
    icon: "🧘",
    title: "Holistic Wellness",
    description:
      "Yoga, meditation, nutrition, and mindfulness practices to rebuild a balanced, healthy lifestyle.",
    color: "from-green-500 to-lime-600",
    bg: "bg-green-50",
    border: "border-green-100",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Therapy",
    description:
      "Healing relationships through structured family counseling and education programs.",
    color: "from-orange-500 to-amber-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    icon: "🔄",
    title: "Aftercare & Relapse Prevention",
    description:
      "Ongoing support, alumni programs, and coping strategies to sustain long-term sobriety.",
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 text-sm font-semibold rounded-full mb-4 border border-teal-100">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
            Comprehensive Care,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">
              Every Step
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            We provide a full continuum of care tailored to your unique journey
            toward lasting recovery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group p-7 rounded-2xl border ${service.bg} ${service.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl mb-5 text-2xl shadow-md group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
