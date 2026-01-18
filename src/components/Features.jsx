import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Sparkles } from "lucide-react";

const features = [
  {
    title: "Technologie Hybride",
    description:
      "Une efficacité énergétique sans compromis sur la performance.",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Sécurité Avancée",
    description:
      "Des systèmes d'aide à la conduite pour votre tranquillité d'esprit.",
    icon: Shield,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Design Japonais",
    description: "L'harmonie parfaite entre fonctionnalité et esthétique.",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
  },
];

const Features = () => {
  return (
    <section
      id="innovation"
      className="py-32 bg-gradient-to-b from-black via-neutral-900 to-black text-white relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-600/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-600/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Innovation
            <span className="text-red-600">.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez les technologies qui font de Suzuki un leader de l'innovation automobile
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative p-8 h-full border border-white/10 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-red-600/10">
                  {/* Gradient Glow on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} blur-3xl rounded-full`} />
                  </div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10`}>
                      <Icon
                        className="w-8 h-8 text-white"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Animated Border Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-20"
        >
          <button className="group relative px-8 py-4 bg-white/5 border border-white/10 text-white overflow-hidden rounded-full font-bold uppercase tracking-widest transition-all hover:border-red-600 hover:shadow-lg hover:shadow-red-600/20 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-black">
            <span className="relative z-10">Explorer toutes les fonctionnalités</span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-full bg-gradient-to-r from-red-600 to-red-700 transition-all duration-300 group-hover:scale-100" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
