import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import guruji from "../assets/about/about-hero.jpeg";

function HeroBanner() {
  return (
    <section className="w-full bg-gradient-to-br from-[#021B49] via-[#032766] to-[#01122F] py-40 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div className="absolute w-80 h-80 rounded-full bg-yellow-400/20 blur-3xl animate-pulse"></div>

            <motion.img
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              src={guruji}
              alt="Guruji"
              className="relative z-10 w-[340px] lg:w-[430px] rounded-3xl shadow-2xl border-4 border-yellow-400 object-cover"
            />
          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >
            <p className="text-yellow-400 uppercase tracking-[5px] mb-4">
              हमारे गुरुजी
            </p>

            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              पंडित श्री दीपक जी
            </h1>

            <p className="text-gray-300 text-lg leading-8 mb-8">
              वर्षों से वैदिक परंपराओं के अनुसार हवन, पूजा,
              कथा एवं धार्मिक अनुष्ठानों का संचालन कर रहे हैं।
              उनका उद्देश्य प्रत्येक श्रद्धालु के जीवन में
              सुख, शांति और समृद्धि का संचार करना है।
            </p>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-6 mb-10">

              <div className="text-center bg-white/10 rounded-xl p-5 backdrop-blur">
                <h3 className="text-3xl font-bold text-yellow-400">10+</h3>
                <p className="text-gray-300 text-sm">वर्षों का अनुभव</p>
              </div>

              <div className="text-center bg-white/10 rounded-xl p-5 backdrop-blur">
                <h3 className="text-3xl font-bold text-yellow-400">5000+</h3>
                <p className="text-gray-300 text-sm">पूजा सम्पन्न</p>
              </div>

              <div className="text-center bg-white/10 rounded-xl p-5 backdrop-blur">
                <h3 className="text-3xl font-bold text-yellow-400">100%</h3>
                <p className="text-gray-300 text-sm">वैदिक विधि</p>
              </div>

            </div>

            <div className="flex gap-5 flex-wrap">

              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-400 px-8 py-4 rounded-full text-black font-semibold transition hover:scale-105"
              >
                संपर्क करें
              </Link>

              <Link
                to="/services"
                className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition hover:scale-105"
              >
                सेवाएं देखें
              </Link>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default HeroBanner;