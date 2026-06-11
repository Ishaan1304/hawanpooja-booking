import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function OnlineHawan() {
  return (
    <section className="relative py-28 bg-[#021B49] overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <div className="text-8xl text-yellow-400 mb-6">
              ॐ
            </div>

            <h2 className="text-5xl font-bold text-white mb-6">
              घर बैठे ऑनलाइन हवन
            </h2>

            <TypeAnimation
              sequence={[
                "लाइव हवन",
                2000,
                "वीडियो कॉल पूजा",
                2000,
                "ऑनलाइन दर्शन",
                2000,
                "विशेष अनुष्ठान",
                2000,
              ]}
              wrapper="div"
              repeat={Infinity}
              className="text-yellow-400 text-3xl font-semibold mb-6"
            />

            <p className="text-gray-300 text-lg leading-relaxed">
              अब आप घर बैठे ऑनलाइन हवन, पूजा और
              विशेष अनुष्ठानों में भाग ले सकते हैं।
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold">
                पूजा बुक करें
              </button>

              <button className="border border-white text-white px-8 py-4 rounded-full">
                लाइव देखें
              </button>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <div className="bg-white/5 rounded-3xl p-10 border border-white/10">
              <div className="text-center text-yellow-400 text-[200px]">
                ॐ
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default OnlineHawan;