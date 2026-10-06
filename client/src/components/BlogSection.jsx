import { motion } from "framer-motion";
import guruji from "../assets/guruji.jpeg";
import { Link } from "react-router-dom";

function BlogSection() {
  return (
    <section className="relative overflow-hidden bg-[#061A45] py-24">

      {/* Background Glow */}

      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-yellow-400/10 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-yellow-500/10 blur-3xl"></div>

      {/* Floating Particles */}

      <div className="absolute inset-0 overflow-hidden">

        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-yellow-300/20"
            initial={{
              y: 900,
              x: Math.random() * 1600,
            }}
            animate={{
              y: -300,
            }}
            transition={{
              duration: 18 + Math.random() * 8,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 6,
            }}
          />
        ))}

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-5xl font-bold text-white">

            Guruji's

            <span className="text-yellow-400"> Divine Thoughts</span>

          </h2>

          <div className="w-28 h-1 rounded-full bg-yellow-400 mx-auto mt-5"></div>

          <p className="text-gray-300 mt-6 max-w-3xl mx-auto text-lg">

            Spiritual guidance and divine blessings from Guruji.

          </p>

        </motion.div>

        {/* Main Content */}

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Guruji Image */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="relative"
            >

              <img
                src={guruji}
                alt="Guruji"
                className="w-full max-w-md rounded-3xl border-4 border-yellow-400 shadow-[0_0_45px_rgba(250,204,21,.25)]"
              />

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

            </motion.div>

          </motion.div>

          {/* Blog Card */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-2"
          >

            {/* Quote */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: .3 }}
              className="border-l-4 border-yellow-400 pl-5 mb-8"
            >

              <p className="text-yellow-400 text-xl italic leading-9">

                "धर्म केवल पूजा नहीं,
                बल्कि जीवन को सत्य, शांति और
                सकारात्मक ऊर्जा की ओर ले जाने का मार्ग है।"

              </p>

            </motion.div>

            {/* Blog */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: .4 }}
              className="text-yellow-400 text-xl italic leading-9"
            >
              माँ बगलामुखी की आराधना केवल एक धार्मिक अनुष्ठान नहीं,
              बल्कि आत्मविश्वास, साहस और सकारात्मक ऊर्जा प्राप्त करने
              का दिव्य माध्यम है।
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: .6 }}
              className="text-yellow-400 text-xl italic leading-9"
            >
              श्रद्धा, विश्वास एवं सही विधि से किया गया हवन और पूजा
              जीवन की अनेक बाधाओं को दूर कर सुख, समृद्धि और मानसिक
              शांति प्रदान करता है।
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: .8 }}
              className="text-yellow-400 text-xl italic leading-9"
            >
              हमारा उद्देश्य प्रत्येक भक्त को केवल पूजा सेवा देना नहीं,
              बल्कि आध्यात्मिक मार्गदर्शन एवं माँ बगलामुखी की कृपा से
              जीवन में सकारात्मक परिवर्तन लाना है।
            </motion.p>

            <Link to="/booking">

              <button className="mt-10 bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-full font-semibold transition duration-500 hover:scale-105 hover:shadow-[0_0_35px_rgba(250,204,21,.45)]">

                📿 पूजा बुक करें

              </button>

            </Link>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default BlogSection;