import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#01173d] text-white pt-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Temple Info */}
          <div>
            <h2 className="text-4xl font-bold text-yellow-400 mb-6">
              Deepakji
            </h2>

            <p className="text-gray-300 leading-relaxed">
              माँ बगलामुखी की कृपा से जीवन की समस्याओं
              का समाधान एवं विशेष पूजा-अनुष्ठान।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-yellow-400">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><Link to="/">होम</Link></li>
              <li><Link to="/about">हमारे बारे में</Link></li>
              <li><Link to="/services">सेवाएं</Link></li>
              <li><Link to="/gallery">गैलरी</Link></li>
              <li><Link to="/contact">संपर्क</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-yellow-400">
              सेवाएं
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>हवन</li>
              <li>गृह प्रवेश</li>
              <li>विवाह पूजा</li>
              <li>बगलामुखी साधना</li>
              <li>ऑनलाइन पूजा</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-yellow-400">
              संपर्क करें
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">
                <FaPhoneAlt className="text-yellow-400 mt-1" />
                <span>+91 7470567335</span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-yellow-400 mt-1" />
                <span>7405673az@gmail.com</span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-yellow-400 mt-1" />
                <span>
                  Temple Address Here
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Map Section */}
        <div className="mt-16">

          <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
            मंदिर का स्थान
          </h3>

          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-xl">
            <iframe
              title="Temple Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.3600259343925!2d76.23312507516648!3d23.841346078608503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3964b9b42235279b%3A0xa84790171d67b012!2sBaglamukhi%20darshan%20nalkheda%20(%20Dipanshu%20Bhagat%20ji%20)!5e0!3m2!1sen!2sin!4v1781198059420!5m2!1sen!2sin"
              width="100%"
              height="400"
              loading="lazy"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 py-10">

          <a
            href="https://www.facebook.com/share/1U7A63o7sM/"
            target="_blank"
  rel="noopener noreferrer"
            className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/pandit_deepak_shastri_4?igsh=ZjBieWJlM2Y5azdl"
            target="_blank"
  rel="noopener noreferrer"
            className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            target="_blank"
  rel="noopener noreferrer"
            className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
          >
            <FaYoutube />
          </a>

          <a
            href="https://wa.me/91747056733"
            target="_blank"
  rel="noopener noreferrer"
            className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
          >
            <FaWhatsapp />
          </a>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-6 text-center text-gray-400">
          © {new Date().getFullYear()} Deepakji Spiritual Services.
          All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;