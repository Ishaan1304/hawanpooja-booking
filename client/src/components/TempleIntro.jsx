import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import templeImage from "../assets/temple.jpg";
import { Link } from "react-router-dom";

function TempleIntro() {
  return (
    <section className="relative overflow-hidden bg-[#021B49] py-24">
      
      {/* Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* Mandala Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 text-[500px] text-yellow-400 font-bold pointer-events-none">
        ॐ
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl blur opacity-30"></div>

            <div className="relative overflow-hidden rounded-3xl">
              <motion.img
                src={templeImage}
                alt="Temple"
                className="w-full h-[600px] object-cover"
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.8,
                }}
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ x: 120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-block bg-yellow-500/10 border border-yellow-400/30 px-5 py-2 rounded-full text-yellow-400 mb-6">
              🔱 माँ बगलामुखी साधक - दीपक शर्मा
            </div>

            {/* Heading */}
            <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-8">
              <TypeAnimation
                sequence={[
                  "माँ बगलामुखी के आशीर्वाद से होगी हर मनोकामना पूरी",
                  3000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </h2>

            {/* Divider */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              transition={{ duration: 1 }}
              className="h-1 bg-yellow-400 rounded-full mb-8"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.4,
                duration: 1,
              }}
              className="text-gray-300 text-lg leading-loose mb-10"
            >
              व्यापार में सफलता, शत्रु नाश, तंत्र बाधा निवारण,
              विवाह, संतान प्राप्ति, रोग नाश, लक्ष्मी प्राप्ति,
              वशीकरण, सम्मोहन तथा जीवन की अनेक समस्याओं के
              समाधान हेतु विशेष साधना एवं पूजा सेवाएँ उपलब्ध हैं।
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div>
                <h3 className="text-yellow-400 text-3xl font-bold">
                  20+
                </h3>
                <p className="text-gray-300">
                  वर्षों का अनुभव
                </p>
              </div>

              <div>
                <h3 className="text-yellow-400 text-3xl font-bold">
                  5000+
                </h3>
                <p className="text-gray-300">
                  सफल अनुष्ठान
                </p>
              </div>

              <div>
                <h3 className="text-yellow-400 text-3xl font-bold">
                  100%
                </h3>
                <p className="text-gray-300">
                  समर्पण
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5">
              <Link to='/about'>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold transition duration-500 hover:scale-105">
                और जानें
              </button>
              </Link>
              <Link to='/booking'>
              <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition duration-500 hover:scale-105">
                पूजा बुक करें
              </button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default TempleIntro;