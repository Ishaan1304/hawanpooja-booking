import {
  FaHeart,
  FaSkull,
  FaCoins,
  FaShieldAlt,
  FaUsers,
  FaStar,
  FaFire,
  FaOm,
} from "react-icons/fa";

import { motion } from "framer-motion";

const services = [
  {
    title: "संतान प्राप्ति",
    description:
      "मां बगलामुखी की आराधना से निसंतान को भी संतान सुख प्राप्त हो जाता है",
    icon: <FaUsers />,
  },
  {
    title: "तंत्र बाधा निवारण",
    description:
      "तंत्र बाधा से छुटकारा पाने के लिए मां बगलामुखी तंत्र का सहारा ले",
    icon: <FaOm />,
  },
  {
    title: "शत्रु से सुरक्षा",
    description:
      "शत्रु द्वारा दी गयी परेशानी से बचने हेतु अपना सुरक्षा कवच बनाये",
    icon: <FaShieldAlt />,
  },
  {
    title: "रोगनाश",
    description:
      "यदि आप हर दिन कोई बीमारी से परेशान हैं तो रोगनाश पूजा से रोग को दूर करें",
    icon: <FaFire />,
  },
  {
    title: "लक्ष्मी प्राप्ति",
    description:
      "बिना लक्ष्मी के कुछ नहीं होता है, इसलिए अपने व्यापार वृद्धि का आशीर्वाद प्राप्त करें",
    icon: <FaCoins />,
  },
  {
    title: "वशीकरण",
    description:
      "वशीकरण पूजा प्रयोग से वशीकरण करके अपना मनचाही मनोकामना पूरा करें",
    icon: <FaStar />,
  },
  {
    title: "उच्चाटन",
    description:
      "उच्चाटन से किसी के भी बीच दूरियां बना सकते हैं",
    icon: <FaSkull />,
  },
  {
    title: "सम्मोहन",
    description:
      "सम्मोहन प्रयोग से हमारी आकर्षण शक्ति बढ़ायें",
    icon: <FaHeart />,
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