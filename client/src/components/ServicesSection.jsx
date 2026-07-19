import {
  FaUsers,
  FaOm,
  FaShieldAlt,
  FaFire,
  FaCoins,
  FaHeart,
  FaHome,
  FaBookOpen,
  FaRing,
  FaBalanceScale,
  FaTrophy,
} from "react-icons/fa";

import {
  GiPrayer,
  GiDragonHead,
} from "react-icons/gi";

import { motion } from "framer-motion";

const services = [
  {
    title: "संतान प्राप्ति",
    description:
      "माँ बगलामुखी की आराधना से निसंतान दंपत्ति को संतान सुख की प्राप्ति होती है।",
    icon: <FaUsers />,
  },
  {
    title: "तंत्र बाधा निवारण",
    description:
      "तंत्र, टोना-टोटका एवं नकारात्मक शक्तियों से मुक्ति हेतु विशेष पूजा।",
    icon: <FaOm />,
  },
  {
    title: "शत्रु से सुरक्षा",
    description:
      "शत्रु बाधा एवं विरोधियों से रक्षा के लिए विशेष अनुष्ठान एवं हवन।",
    icon: <FaShieldAlt />,
  },
  {
    title: "रोगनाश",
    description:
      "शारीरिक एवं मानसिक रोगों से मुक्ति तथा उत्तम स्वास्थ्य के लिए विशेष पूजा।",
    icon: <FaFire />,
  },
  {
    title: "लक्ष्मी प्राप्ति",
    description:
      "धन, व्यापार वृद्धि एवं आर्थिक समृद्धि के लिए माँ बगलामुखी की विशेष साधना।",
    icon: <FaCoins />,
  },
  {
    title: "पितृ दोष निवारण",
    description:
      "पितृ दोष से मुक्ति एवं पूर्वजों के आशीर्वाद की प्राप्ति हेतु विशेष पूजा।",
    icon: <GiPrayer />,
  },
  {
    title: "कालसर्प दोष पूजा",
    description:
      "कालसर्प दोष शांति एवं जीवन की बाधाओं को दूर करने हेतु विशेष अनुष्ठान।",
    icon: <GiDragonHead />,
  },
  {
    title: "मंगल दोष भात पूजा",
    description:
      "मंगल दोष निवारण एवं वैवाहिक जीवन में सुख-समृद्धि हेतु विशेष पूजा।",
    icon: <FaRing />,
  },
  {
    title: "कुंडली मिलान",
    description:
      "विवाह एवं अन्य शुभ कार्यों के लिए विस्तृत कुंडली मिलान एवं परामर्श।",
    icon: <FaBookOpen />,
  },
  {
    title: "वास्तु दोष शांति",
    description:
      "घर, दुकान एवं कार्यालय के वास्तु दोषों की शांति हेतु विशेष पूजा।",
    icon: <FaHome />,
  },
  {
    title: "दांपत्य में आ रही बाधाएँ",
    description:
      "पति-पत्नी के बीच प्रेम, विश्वास एवं सुख-शांति स्थापित करने हेतु विशेष अनुष्ठान।",
    icon: <FaHeart />,
  },
  {
    title: "राजनीति में विजय",
    description:
      "राजनीतिक सफलता, मान-सम्मान एवं विजय प्राप्ति के लिए विशेष साधना।",
    icon: <FaTrophy />,
  },
  {
    title: "कोर्ट केस निवारण",
    description:
      "न्यायालय संबंधी मामलों एवं कानूनी बाधाओं से राहत हेतु विशेष पूजा।",
    icon: <FaBalanceScale />,
  },
];
function ServicesSection() {
  return (
    <section id="services" className="relative bg-[#021B49] py-28 overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>

        <div className="absolute top-40 right-1/3 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>

        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>

        <div className="absolute bottom-20 right-20 w-2 h-2 bg-white rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-yellow-400 uppercase tracking-[6px] mb-5 text-sm">
            Spiritual Solutions
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Sacred Services
          </h2>

          <div className="w-32 h-1 bg-yellow-400 mx-auto rounded-full mb-8"></div>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
            Divine spiritual guidance and sacred rituals designed to bring
            peace, positivity, protection, and prosperity into your life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                rotateX: 4,
                rotateY: 4,
              }}
              className="group relative perspective-[1000px]"
            >
              {/* Glow Border */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-yellow-400/40 via-yellow-200/20 to-yellow-400/40 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-700"></div>

              {/* Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden transition duration-700 hover:border-yellow-400/40 hover:bg-white/10">
                
                {/* Light Sweep Animation */}
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-[200%] transition-all duration-1000"></div>

                {/* Floating Icon */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 text-5xl text-yellow-400 mb-8"
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="relative z-10 text-2xl font-bold text-white mb-5 group-hover:text-yellow-300 transition duration-500">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-gray-300 leading-relaxed text-[15px]">
                  {service.description}
                </p>

                {/* Bottom Glow */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>

                {/* Background Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;