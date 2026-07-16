import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const packages = [
    {
        id: 1,
        title: "सामान्य हवन",
        duration: "45 मिनट",
        price: "₹2100",
        badge: "",
        color: "from-yellow-500 to-orange-500",
        details: [
            "सम्पूर्ण पूजा विधि",
            "अनुभवी पंडित जी",
            "सामान्य हवन सामग्री",
            "45 मिनट का अनुष्ठान",
            "घर या मंदिर में पूजा",
        ],
    },

    {
        id: 2,
        title: "विशेष हवन",
        duration: "1 घंटा 30 मिनट",
        price: "₹5100",
        badge: "Most Popular",
        color: "from-orange-500 to-red-500",
        details: [
            "21 प्रकार की विशेष आहुति",
            "सम्पूर्ण सामग्री",
            "विशेष विधि-विधान",
            "पंडित जी द्वारा मार्गदर्शन",
            "शुभ कार्य हेतु उपयुक्त",
        ],
    },

    {
        id: 3,
        title: "महाविशेष हवन",
        duration: "2 घंटे",
        price: "₹11000",
        badge: "",
        color: "from-red-500 to-pink-500",
        details: [
            "36 प्रकार की विशेष आहुति",
            "सम्पूर्ण सामग्री",
            "पूर्ण वैदिक अनुष्ठान",
            "विशेष पूजा एवं हवन",
            "विशेष मनोकामना हेतु",
        ],
    },
];

function HawanPackages() {
    const [activeCard, setActiveCard] = useState(null);

    return (
        <section className="relative bg-[#021B49] py-24 overflow-hidden">

            {/* Background Glow */}

            <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-yellow-500/10 blur-3xl"></div>

            <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-orange-500/10 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >

                    <p className="text-yellow-400 tracking-[5px] uppercase mb-4">
                        Choose Your Package
                    </p>

                    <h2 className="text-5xl font-bold text-white">

                        हवन

                        <span className="text-yellow-400">
                            {" "}पैकेज
                        </span>

                    </h2>

                    <div className="w-32 h-1 bg-yellow-400 rounded-full mx-auto mt-5"></div>

                    <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg">

                        अपनी आवश्यकता अनुसार सामान्य, विशेष अथवा महाविशेष
                        हवन पैकेज चुनें।

                    </p>

                </motion.div>

                {/* Cards */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group perspective-[1200px]"
                        >
                            <div
                                onClick={() =>
                                    setActiveCard(activeCard === pkg.id ? null : pkg.id)
                                }
                                className={`relative h-[400px] cursor-pointer transition-all duration-700 [transform-style:preserve-3d]
                ${activeCard === pkg.id
                                        ? "[transform:rotateY(180deg)]"
                                        : ""
                                    }`}
                            >

                                {/* Front */}
                                <div className="absolute inset-0 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden [backface-visibility:hidden]">

                                    {pkg.badge && (
                                        <div className="absolute top-5 right-5 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-bold">
                                            {pkg.badge}
                                        </div>
                                    )}

                                    

                                    <div className="p-8">

                                        <h3 className="text-3xl font-bold text-white mb-4">
                                            {pkg.title}
                                        </h3>

                                        <p className="text-gray-300 mb-2">
                                            अवधि
                                        </p>

                                        <p className="text-yellow-400 text-2xl font-semibold mb-8">
                                            {pkg.duration}
                                        </p>

                                        <div className="text-5xl font-bold text-white mb-10">
                                            {pkg.price}
                                        </div>

                                        <button className="w-full py-4 rounded-xl bg-yellow-400 text-black font-bold hover:scale-105 transition">
                                            विवरण देखें →
                                        </button>

                                    </div>

                                </div>

                                {/* Back */}
                                <div className="absolute inset-0 rounded-3xl bg-[#08275E] border border-yellow-400/30 p-8 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col">

                                    <h3 className="text-3xl font-bold text-yellow-400 mb-8">
                                        {pkg.title}
                                    </h3>

                                    <div className="space-y-4 flex-1">

                                        {pkg.details.map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-start gap-3"
                                            >
                                                <span className="text-yellow-400 mt-1">
                                                    ✔
                                                </span>

                                                <p className="text-gray-200">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}

                                    </div>

                                    <Link to="/booking">
                                        <button className="mt-8 w-full py-4 rounded-xl bg-yellow-400 text-black font-bold hover:scale-105 transition">
                                            अभी बुक करें
                                        </button>
                                    </Link>

                                </div>

                            </div>
                        </motion.div>
                    ))}

                </div>

                {/* Comparison Section */}

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-24"
                >

                    <h2 className="text-4xl font-bold text-center text-white mb-12">
                        कौन सा पैकेज आपके लिए
                        <span className="text-yellow-400"> उपयुक्त है?</span>
                    </h2>

                    <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

                        <table className="w-full min-w-[850px]">

                            <thead>

                                <tr className="bg-yellow-500 text-black">

                                    <th className="py-5 px-6 text-left">
                                        सुविधाएँ
                                    </th>

                                    <th className="py-5">
                                        सामान्य
                                    </th>

                                    <th className="py-5">
                                        विशेष
                                    </th>

                                    <th className="py-5">
                                        महाविशेष
                                    </th>

                                </tr>

                            </thead>

                            <tbody className="text-center text-white">

                                {[
                                    ["पूजा सामग्री", "✔", "✔", "✔"],
                                    ["अनुभवी पंडित जी", "✔", "✔", "✔"],
                                    ["विशेष आहुति", "✖", "21", "36"],
                                    ["विशेष मंत्र जाप", "✖", "✔", "✔"],
                                    ["पूर्ण वैदिक विधि", "✖", "✔", "✔"],
                                    ["घर / मंदिर", "✔", "✔", "✔"],
                                    ["समय", "45 मिनट", "1.5 घंटा", "2 घंटे"],
                                    ["मूल्य", "₹2100", "₹5100", "₹11000"],
                                ].map((row, index) => (
                                    <tr
                                        key={index}
                                        className="border-t border-white/10 hover:bg-white/5 transition"
                                    >
                                        {row.map((item, i) => (
                                            <td
                                                key={i}
                                                className={`py-5 px-6 ${i === 0
                                                        ? "text-left font-semibold text-yellow-300"
                                                        : ""
                                                    }`}
                                            >
                                                {item}
                                            </td>
                                        ))}
                                    </tr>
                                ))}

                            </tbody>

                        </table>

                    </div>

                    {/* Bottom CTA */}

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: .3 }}
                        viewport={{ once: true }}
                        className="mt-16 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-400/20 rounded-3xl p-10 text-center"
                    >

                        <h3 className="text-3xl font-bold text-white mb-4">
                            अभी अपना हवन बुक करें
                        </h3>

                        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                            यदि आपको यह समझ नहीं आ रहा कि कौन सा पैकेज आपके लिए सही रहेगा,
                            तो हमारे पंडित जी आपकी आवश्यकता के अनुसार उचित मार्गदर्शन करेंगे।
                        </p>

                        <div className="flex flex-wrap justify-center gap-5">

                            <Link to="/booking">
                                <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-full font-bold transition hover:scale-105">
                                    पूजा बुक करें
                                </button>
                            </Link>

                            <Link to="/contact">
                                <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-bold transition hover:scale-105">
                                    संपर्क करें
                                </button>
                            </Link>

                        </div>

                    </motion.div>

                </motion.div>

            </div>

        </section>
    );
}

export default HawanPackages;