import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaUsers, FaFire, FaAward, FaPrayingHands } from "react-icons/fa";

const stats = [
  {
    icon: <FaFire />,
    number: 5000,
    suffix: "+",
    title: "सफल अनुष्ठान",
  },
  {
    icon: <FaUsers />,
    number: 15000,
    suffix: "+",
    title: "संतुष्ट श्रद्धालु",
  },
  {
    icon: <FaAward />,
    number: 20,
    suffix: "+",
    title: "वर्षों का अनुभव",
  },
  {
    icon: <FaPrayingHands />,
    number: 24,
    suffix: "/7",
    title: "मार्गदर्शन",
  },
];

function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="bg-[#01173d] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:border-yellow-400 transition"
            >
              <div className="text-yellow-400 text-5xl mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-white">
                {inView && (
                  <CountUp
                    end={item.number}
                    duration={3}
                  />
                )}
                {item.suffix}
              </h3>

              <p className="text-gray-300 mt-3">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;