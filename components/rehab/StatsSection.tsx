"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5000, suffix: "+", label: "Lives Transformed", icon: "🌱" },
  { value: 94, suffix: "%", label: "Recovery Success Rate", icon: "📈" },
  { value: 25, suffix: "+", label: "Years of Excellence", icon: "🏆" },
  { value: 120, suffix: "+", label: "Expert Specialists", icon: "👩‍⚕️" },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({
  value,
  suffix,
  label,
  icon,
  delay,
  visible,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: string;
  delay: number;
  visible: boolean;
}) {
  const count = useCountUp(value, 2000, visible);

  return (
    <div
      className="text-center group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
        <span className="text-3xl">{icon}</span>
      </div>
      <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
        {visible ? count : 0}
        <span className="text-teal-500">{suffix}</span>
      </div>
      <p className="text-gray-500 font-medium">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-100 p-10 sm:p-16 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              {...stat}
              delay={i * 100}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
