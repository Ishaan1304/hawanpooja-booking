import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import { saveContact } from "../api/contactSheet";

function ContactSection() {
  const cardClass =
    "bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-yellow-400 transition duration-300 hover:-translate-y-2";

  const inputClass =
    "w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-300 outline-none focus:border-yellow-400";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    await saveContact(formData);

    alert("संदेश सफलतापूर्वक भेजा गया। हमारी टीम जल्द ही आपसे संपर्क करेगी।");

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });

  } catch (err) {
    alert("कुछ गलत हो गया।");
  }

  setLoading(false);
};

  return (
    <section className="p-10 bg-[#061A45] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white">
            संपर्क <span className="text-yellow-400">करें</span>
          </h2>

          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mt-5"></div>

          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            यदि आपको पूजा, हवन या किसी धार्मिक अनुष्ठान से संबंधित
            कोई जानकारी चाहिए, तो हमसे संपर्क करें।
          </p>
        </motion.div>

        {/* Contact Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          <motion.div whileHover={{ scale: 1.04 }} className={cardClass}>
            <FaPhoneAlt className="text-yellow-400 text-3xl mb-4" />
            <h3 className="text-white font-semibold text-xl mb-2">फोन</h3>
            <p className="text-gray-300 text-xl">+91 7470567335</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} className={cardClass}>
            <FaEnvelope className="text-yellow-400 text-3xl mb-4" />
            <h3 className="text-white font-semibold text-xl mb-2">ईमेल</h3>
            <p className="text-gray-100 break-all text-xl">
              7405673az@gmail.com
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} className={cardClass}>
            <FaMapMarkerAlt className="text-yellow-400 text-3xl mb-4" />
            <h3 className="text-white font-semibold text-xl mb-2">पता</h3>
            <p className="text-gray-300 text-xl">
              नलखेड़ा, मध्य प्रदेश
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} className={cardClass}>
            <FaClock className="text-yellow-400 text-3xl mb-4" />
            <h3 className="text-white font-semibold text-xl mb-2">समय</h3>
            <p className="text-gray-300 text-xl">
              सुबह 6:00 - रात्रि 9:00
            </p>
          </motion.div>

        </div>

        {/* Contact Form */}

        <form onSubmit={handleSubmit}>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              संदेश भेजें
            </h3>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                name="name"
                placeholder="पूरा नाम"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="मोबाइल नंबर"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
                required
              />

            </div>

            <input
              type="email"
              name="email"
              placeholder="ईमेल (वैकल्पिक)"
              value={formData.email}
              onChange={handleChange}
              className={`${inputClass} mt-6`}
            />

            <textarea
              rows="5"
              name="message"
              placeholder="अपना संदेश लिखें..."
              value={formData.message}
              onChange={handleChange}
              className={`${inputClass} mt-6 resize-none`}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-8 w-full bg-yellow-400 hover:bg-yellow-300 text-black py-4 rounded-xl font-bold text-lg transition duration-300 hover:scale-[1.02] disabled:opacity-60"
            >
              {loading ? "भेजा जा रहा है..." : "संदेश भेजें"}
            </button>

          </motion.div>
        </form>

      </div>
    </section>
  );
}

export default ContactSection;