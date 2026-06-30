import { motion } from "framer-motion";
import {
  FaPrayingHands,
  FaOm,
  FaFire,
  FaLeaf,
} from "react-icons/fa";

import temple from "../assets/about/temple.jpg";

const features = [
  {
    icon: <FaPrayingHands />,
    title: "दिव्य वातावरण",
    desc: "मंदिर का शांत एवं आध्यात्मिक वातावरण मन को सकारात्मक ऊर्जा प्रदान करता है।",
  },
  {
    icon: <FaOm />,
    title: "वैदिक परंपरा",
    desc: "सभी पूजा एवं हवन वैदिक विधि-विधान के अनुसार सम्पन्न कराए जाते हैं।",
  },
  {
    icon: <FaFire />,
    title: "विशेष अनुष्ठान",
    desc: "हवन, कथा, विवाह, गृह प्रवेश एवं सभी धार्मिक अनुष्ठानों की सुविधा उपलब्ध है।",
  },
  {
    icon: <FaLeaf />,
    title: "सकारात्मक ऊर्जा",
    desc: "श्रद्धालुओं के जीवन में सुख, शांति एवं समृद्धि लाने का उद्देश्य।",
  },
];

function AboutTemple() {
  return (
    <section className="relative bg-gray-50 py-24 overflow-hidden">

      {/* Decorative Background */}

      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-yellow-200 blur-3xl opacity-30 animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-orange-200 blur-3xl opacity-30 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-yellow-600 uppercase tracking-[5px] font-semibold">
            मंदिर परिचय
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
            हमारे मंदिर के बारे में
          </h2>

          <div className="w-28 h-1 bg-yellow-500 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, rotate: -8 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={temple}
              alt="Temple"
              className="rounded-3xl shadow-2xl"
            />

            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-8 -right-8 w-24 h-24 border-4 border-yellow-500 rounded-full"
            />

            <motion.div
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-8 -left-8 w-16 h-16 border-4 border-orange-400 rounded-full"
            />
          </motion.div>

          {/* Right */}

          <div>

            <motion.h3
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              आस्था, विश्वास एवं सनातन संस्कृति का केंद्र
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: .3 }}
              viewport={{ once: true }}
              className="text-gray-600 text-lg leading-9 mb-10"
            >
              हमारा मंदिर केवल पूजा-अर्चना का स्थान नहीं बल्कि
              आध्यात्मिक ज्ञान, वैदिक संस्कृति एवं सकारात्मक ऊर्जा
              का केंद्र है। वर्षों से हजारों श्रद्धालु यहाँ आकर
              ईश्वर की कृपा एवं मानसिक शांति का अनुभव करते हैं।
            </motion.p>

            <div className="space-y-6">

              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * .2,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.03,
                    x: 8,
                  }}
                  className="bg-white rounded-2xl p-6 shadow-lg flex gap-5 cursor-pointer transition"
                >

                  <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center text-2xl text-yellow-600">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-bold text-xl mb-2">
                      {item.title}
                    </h4>

                    <p className="text-gray-600">
                      {item.desc}
                    </p>
                  </div>

                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutTemple;