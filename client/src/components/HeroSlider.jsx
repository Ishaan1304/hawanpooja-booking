import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import slider1 from "../assets/slider/slider1.jpeg";
import slider2 from "../assets/slider/slider2.jpeg";
import slider3 from "../assets/slider/slider3.jpeg";
import slider4 from "../assets/slider/slider4.jpeg";
import slider5 from "../assets/slider/slider5.jpeg";
import slider6 from "../assets/slider/slider6.jpeg";

const slides = [
  {
    image: slider1,
    title: "दिव्य हवन एवं पूजा सेवाएं",
    subtitle:
      "भक्ति और पूर्ण विधि-विधान के साथ पवित्र अनुष्ठानों का अनुभव करें।",
  },
  {
    image: slider2,
    title: "विश्वसनीय गुरुजी ऑनलाइन बुक करें",
    subtitle:
      "सभी धार्मिक एवं आध्यात्मिक अनुष्ठानों के लिए अनुभवी पंडितों से जुड़ें।",
  },
  {
    image: slider3,
    title: "अपने घर में सकारात्मक ऊर्जा लाएं",
    subtitle:
      "शांति, समृद्धि और आशीर्वाद हेतु पारंपरिक पूजा सेवाएं।",
  },
  {
    image: slider4,
    title: "मां बगलामुखी की विशेष पूजा",
    subtitle:
      "जीवन की बाधाओं और नकारात्मक शक्तियों से मुक्ति प्राप्त करें।",
  },
  {
    image: slider5,
    title: "सभी प्रकार की धार्मिक पूजा उपलब्ध",
    subtitle:
      "गृह प्रवेश, विवाह, हवन, कथा एवं विशेष अनुष्ठानों की सुविधा।",
  },
  {
    image: slider6,
    title: "आध्यात्मिक शांति और समृद्धि",
    subtitle:
      "सकारात्मक जीवन और सुख-समृद्धि के लिए दिव्य पूजा सेवाएं।",
  },
];

function HeroSlider() {
  const scrollToServices = () => {
    const section = document.getElementById("services");

    if (!section) return;

    const targetPosition =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      80;

    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1800;

    let start = null;

    function animation(currentTime) {
      if (start === null) start = currentTime;

      const timeElapsed = currentTime - start;

      const run = ease(
        timeElapsed,
        startPosition,
        distance,
        duration
      );

      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    function ease(t, b, c, d) {
      t /= d / 2;

      if (t < 1) {
        return (c / 2) * t * t + b;
      }

      t--;

      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  };

  return (
    <section className="w-full min-h-screen">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Autoplay,
          EffectFade,
        ]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        navigation
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="!h-screen"
          >
            <div className="relative w-full h-screen overflow-hidden">

              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center animate-[slowZoom_8s_linear_infinite]"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

              {/* Glow Effect */}
              <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
                  <div className="max-w-3xl text-white">

                    <p className="text-yellow-400 uppercase tracking-[5px] mb-5 text-sm lg:text-base animate-pulse">
                      आध्यात्मिक • पारंपरिक • विश्वसनीय
                    </p>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                      {slide.title}
                    </h1>

                    <div className="w-28 h-1 bg-yellow-400 rounded-full mb-8"></div>

                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl">
                      {slide.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-5">
                      <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg transition duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,197,66,0.6)]">
                        पूजा बुक करें
                      </button>

                      <button
                        onClick={scrollToServices}
                        className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition duration-500 hover:scale-105"
                      >
                        सेवाएं देखें
                      </button>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroSlider;