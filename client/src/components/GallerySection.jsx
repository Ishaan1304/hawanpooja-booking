import { motion } from "framer-motion";

import img1 from "../assets/gallery/1.jpeg";
import img2 from "../assets/gallery/2.jpeg";
import img3 from "../assets/gallery/3.jpeg";
import img4 from "../assets/gallery/4.jpeg";
import img5 from "../assets/gallery/5.jpeg";
import img6 from "../assets/gallery/6.jpeg";
import img7 from "../assets/gallery/7.jpeg";
import img8 from "../assets/gallery/8.webp";
import img9 from "../assets/gallery/9.jpeg";


const galleryImages = [
  {
    image: img1,
    title: "माँ बगलामुखी पूजा",
  },
  {
    image: img2,
    title: "विशेष हवन",
  },
  {
    image: img3,
    title: "गृह शांति पूजा",
  },
  {
    image: img4,
    title: "धार्मिक अनुष्ठान",
  },
  {
    image: img5,
    title: "भक्तगण",
  },
  {
    image: img6,
    title: "मंदिर दर्शन",
  },
  {
    image: img7,
    title: "धार्मिक अनुष्ठान",
  },
  {
    image: img8,
    title: "भक्तगण",
  },
  {
    image: img9,
    title: "मंदिर दर्शन",
  },
];

function GallerySection() {
  return (
    <section className="py-24 bg-[#061A45] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white">
            मंदिर
            <span className="text-yellow-400"> गैलरी</span>
          </h2>

          <div className="w-24 h-1 bg-yellow-400 rounded-full mx-auto mt-5"></div>

          <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            हमारे मंदिर में आयोजित दिव्य पूजा, हवन एवं धार्मिक
            अनुष्ठानों की कुछ विशेष झलकियाँ।
          </p>
        </motion.div>

        {/* Gallery */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {galleryImages.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .1,
              }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10"
            >

              <div className="h-80 bg-[#0A1E4F] flex items-center justify-center overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain transition duration-700 group-hover:scale-110"
                />

              </div>

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Title */}

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 group-hover:translate-y-0 transition duration-500">

                <h3 className="text-white text-2xl m-2 color-yello font-bold">
                  {item.title}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default GallerySection;