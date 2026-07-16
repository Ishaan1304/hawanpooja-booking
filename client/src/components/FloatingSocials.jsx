import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

function FloatingSocials() {
  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-4">

      {/* WhatsApp */}
      <a
        href="https://wa.me/917470567335"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-xl hover:scale-110 hover:shadow-green-500/50 transition-all duration-300"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/pandit_deepak_shastri_4?igsh=ZjBieWJlM2Y5azdl"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300"
      >
        <FaInstagram size={24} />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/share/1U7A63o7sM/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl hover:scale-110 hover:shadow-blue-500/50 transition-all duration-300"
      >
        <FaFacebookF size={22} />
      </a>

    </div>
  );
}

export default FloatingSocials;