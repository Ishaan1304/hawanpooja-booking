import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  EffectCoverflow,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { FaStar, FaExpand } from "react-icons/fa";

import testimonial1 from "../assets/testimonials/testimonial1.jpg";
import testimonial2 from "../assets/testimonials/testimonial2.jpg";
import testimonial3 from "../assets/testimonials/testimonial3.jpg";
import testimonial4 from "../assets/testimonials/testimonial4.jpg";
import testimonial5 from "../assets/testimonials/testimonial5.jpg";

const testimonials = [
  {
    image: testimonial1,
    title: "संतान प्राप्ति",
    text: "पूजा के बाद सकारात्मक परिणाम प्राप्त हुए।",
  },
  {
    image: testimonial2,
    title: "व्यापार वृद्धि",
    text: "व्यापार में उल्लेखनीय प्रगति हुई।",
  },
  {
    image: testimonial3,
    title: "विवाह सफलता",
    text: "लंबे समय से रुके कार्य पूर्ण हुए।",
  },
  {
    image: testimonial4,
    title: "बाधा निवारण",
    text: "जीवन में सकारात्मक परिवर्तन आए।",
  },
   {
    image: testimonial5,
    title: "बाधा निवारण",
    text: "जीवन में सकारात्मक परिवर्तन आए।",
  },
];

function TestimonialsSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="relative py-24 bg-[#021B49] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-400/30 px-5 py-2 rounded-full text-yellow-400 mb-6">
            🙏 वास्तविक अनुभव
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            श्रद्धालुओं के अनुभव
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto">
            माँ बगलामुखी की कृपा से जीवन में आए सकारात्मक बदलाव
          </p>

          {/* Stars */}
          <div className="flex justify-center gap-1 text-yellow-400 mt-6 text-xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p className="text-yellow-400 mt-2 font-semibold">
            5000+ संतुष्ट श्रद्धालु
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 180,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[
            EffectCoverflow,
            Pagination,
            Autoplay,
          ]}
          className="pb-16"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide
              key={index}
              className="max-w-sm"
            >
              <div className="group relative bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-yellow-400 transition-all duration-500">

                {/* Image */}
                <div className="relative overflow-hidden">

                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-[450px] object-cover group-hover:scale-105 transition duration-700"
                  />

                  <button
                    onClick={() =>
                      setSelectedImage(item.image)
                    }
                    className="absolute top-4 right-4 bg-black/60 p-3 rounded-full text-white hover:bg-yellow-500 hover:text-black transition"
                  >
                    <FaExpand />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">

                  <div className="inline-block bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm mb-4">
                    {item.title}
                  </div>

                  <p className="text-gray-300">
                    {item.text}
                  </p>

                </div>

                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 shadow-[0_0_50px_rgba(250,204,21,0.35)] pointer-events-none"></div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-5"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt=""
            className="max-w-full max-h-[90vh] rounded-2xl"
          />
        </div>
      )}
    </section>
  );
}

export default TestimonialsSection;