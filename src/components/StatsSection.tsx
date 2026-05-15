import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Building, Globe, GitBranch, Users } from 'lucide-react';

const stats = [
  { icon: Building, value: 100, suffix: '+', label: 'Partner Universities', color: 'from-red-500 to-red-600' },
  { icon: Globe, value: 3, suffix: '+', label: 'Countries', color: 'from-blue-600 to-blue-700' },
  { icon: GitBranch, value: 8, suffix: '+', label: 'Branches', color: 'from-red-600 to-red-700' },
  { icon: Users, value: 2500, suffix: '+', label: 'Global Admissions', color: 'from-blue-700 to-blue-800' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-r from-red-600 via-red-700 to-blue-800 rounded-3xl p-10 md:p-14 shadow-2xl shadow-red-500/20 relative overflow-hidden">
          {/* Pattern */}
          <div className="absolute inset-0 opacity-[0.05]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="2" fill="white"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>
          
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <stat.icon size={26} className="text-white" />
                </div>
                <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-red-200 font-semibold text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
