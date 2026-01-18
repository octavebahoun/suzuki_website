import React, { useState } from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <footer
      id="contact"
      className="relative min-h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* Background Video */}
      {!videoLoaded && (
        <div className="absolute inset-0 bg-gradient-to-t from-black via-neutral-900 to-black animate-pulse" />
      )}
      <div className="absolute inset-0 opacity-40">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src="/footer.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6 mt-16">
          Prêt à rouler ?
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 font-light">
          Réservez votre essai dès aujourd'hui et découvrez la route autrement.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 hover:scale-105 transition-all rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">
            Contactez-nous
          </button>
          <button className="px-8 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:scale-105 transition-all rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">
            Trouver un concessionnaire
          </button>
        </div>

        <div className="mt-24 text-sm text-gray-500">
          <div className="flex justify-center gap-8 mb-6">
            <a
              href="#"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
          <p>&copy; 2026 Suzuki Premium. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
