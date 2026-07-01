import { motion } from "framer-motion";

function BookingForm() {
  return (
    <section className="relative  px-6 overflow-hidden">

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Form Card */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12"
        >

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Full Name"
              className="input"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="input"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="input"
            />

            <input
              type="text"
              placeholder="City"
              className="input"
            />

          </div>

          <textarea
            rows="3"
            placeholder="Complete Address"
            className="input resize-none mt-6"
          />

          <select className="input mt-6">

            <option>Select Pooja</option>

            <option>माँ बगलामुखी पूजा</option>

            <option>हवन</option>

            <option>गृह प्रवेश</option>

            <option>विवाह पूजा</option>

            <option>व्यापार वृद्धि पूजा</option>

            <option>गृह शांति पूजा</option>

            <option>कोर्ट केस विजय पूजा</option>

            <option>शत्रु विजय पूजा</option>

          </select>

          <div className="grid md:grid-cols-2 gap-6 mt-6">

            <input
              type="date"
              className="input"
            />

            <input
              type="time"
              className="input"
            />

          </div>

          <textarea
            rows="4"
            placeholder="Additional Message (Optional)"
            className="input resize-none mt-6"
          />

          <button
            className="w-full mt-8 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(250,204,21,.5)]"
          >
            Continue →
          </button>

        </motion.div>

      </div>

    </section>
  );
}

export default BookingForm;