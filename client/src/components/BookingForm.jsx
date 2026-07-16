import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { saveBooking } from "../api/googleSheet";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    pooja: "",
    date: "",
    time: "",
    message: "",
    package: "",
  });

  const timeSlots = [
    "07:00 AM",
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
    "10:00 PM",

  ];

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim())
      newErrors.name = "Full Name is required";

    if (!/^[6-9]\d{9}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10 digit mobile number";

    if (
      formData.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    )
      newErrors.email = "Invalid Email";

    if (!formData.city.trim())
      newErrors.city = "City is required";

    if (!formData.address.trim())
      newErrors.address = "Address is required";

    if (!formData.pooja)
      newErrors.pooja = "Please select a pooja";

    if (!formData.date)
      newErrors.date = "Select booking date";

    if (!formData.time)
      newErrors.time = "Select booking time";

    if (!formData.package)
      newErrors.package = "Please select a package";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      // Later replace this with Google Sheets API
     const result = await saveBooking(formData);

if (result.success) {
  setShowQR(true);
};

      setShowQR(true);
    } catch (err) {
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  const inputClass =
    "w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-300 outline-none focus:border-yellow-400";



  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <section className="px-6 py-10">
        <div className="max-w-5xl mx-auto">

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 shadow-xl p-8 md:p-12"
          >

            <h2 className="text-4xl text-center font-bold text-white mb-10">
              Book Your <span className="text-yellow-400">Pooja</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <input
                  className={inputClass}
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              </div>

              <div>
                <input
                  className={inputClass}
                  name="phone"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
              </div>

              <div>
                <input
                  className={inputClass}
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              </div>

              <div>
                <input
                  className={inputClass}
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                />
                <p className="text-red-400 text-sm mt-1">{errors.city}</p>
              </div>

            </div>

            <textarea
              rows="3"
              name="address"
              placeholder="Complete Address"
              value={formData.address}
              onChange={handleChange}
              className={`${inputClass} mt-6`}
            />
            <p className="text-red-400 text-sm mt-1">{errors.address}</p>

            <select
              name="pooja"
              value={formData.pooja}
              onChange={handleChange}
              className={`${inputClass} mt-6`}
            >
              <option value="">Select Pooja</option>
              <option>माँ बगलामुखी पूजा</option>
              <option>हवन</option>
              <option>गृह प्रवेश</option>
              <option>विवाह पूजा</option>
              <option>व्यापार वृद्धि पूजा</option>
              <option>गृह शांति पूजा</option>
              <option>कोर्ट केस विजय पूजा</option>
              <option>शत्रु विजय पूजा</option>
              <option>पितृ दोष निवारण</option>
              <option>कालसर्पदोष पूजा</option>
              <option>मंगल दोष भात पूजा</option>
              <option>कुंडली मिलान</option>
              <option>वास्तु दोष शांति</option>
              <option>दांपत्य में आ रही बाधाएँ समाप्त होती हैं।</option>
              <option>राजनीति में विजय </option>
            </select>

            <p className="text-red-400 text-sm mt-1">{errors.pooja}</p>

            <div className="mt-6">
  <select
    name="package"
    value={formData.package}
    onChange={handleChange}
    className={inputClass}
  >
    <option value="">Select Package</option>

    <option value="सामान्य (45 मिनट - ₹2100)">
      🟢 सामान्य (45 मिनट - ₹2100)
    </option>

    <option value="विशेष (1 घंटा 30 मिनट - ₹5100)">
      🟡 विशेष (1 घंटा 30 मिनट - ₹5100)
    </option>

    <option value="महाविशेष (2 घंटे - ₹11000)">
      🔴 महाविशेष (2 घंटे - ₹11000)
    </option>
  </select>

  <p className="text-red-400 text-sm mt-1">
    {errors.package}
  </p>
</div>

{formData.package && (
  <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4">
    <h3 className="text-yellow-400 font-semibold">
      Selected Package
    </h3>

    <p className="text-white mt-2">
      {formData.package}
    </p>
  </div>
)}


            {/* Date */}
            <div className="mt-6">
              <label className="block text-white font-semibold mb-3">
                Select Booking Date
              </label>

              <input
                type="date"
                name="date"
                min={today}
                value={formData.date}
                onChange={handleChange}
                className={inputClass}
              />

              <p className="text-red-400 text-sm mt-2">
                {errors.date}
              </p>
            </div>

            {/* Time Slots */}
            <div className="mt-8">
              <label className="block text-white font-semibold mb-4">
                Select Time Slot
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">

                {timeSlots.map((slot) => {
                  const isToday = formData.date === today;
                  let disabled = false;

                  if (isToday) {
                    const now = new Date();
                    const slotDate = new Date();

                    const [time, period] = slot.split(" ");
                    let [hours, minutes] = time.split(":");

                    hours = Number(hours);

                    if (period === "PM" && hours !== 12) hours += 12;
                    if (period === "AM" && hours === 12) hours = 0;

                    slotDate.setHours(hours, Number(minutes), 0);

                    disabled = slotDate < now;
                  }

                  return (
                    <button
                      key={slot}
                      type="button"
                      disabled={disabled}
                      onClick={() =>
                        setFormData({
                          ...formData,
                          time: slot,
                        })
                      }
                      className={`rounded-xl py-3 px-4 border transition-all duration-300 font-medium
            ${disabled
                          ? "bg-gray-700 border-gray-700 text-gray-500 cursor-not-allowed"
                          : formData.time === slot
                            ? "bg-yellow-400 border-yellow-400 text-black shadow-lg scale-105"
                            : "bg-white/10 border-white/20 text-white hover:border-yellow-400 hover:bg-yellow-400/20"
                        }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>

              <p className="text-red-400 text-sm mt-2">
                {errors.time}
              </p>
            </div>

            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Additional Message (Optional)"
              className={`${inputClass} mt-6`}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-8 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 rounded-xl transition hover:scale-[1.02]"
            >
              {loading ? "Please Wait..." : "Book Pooja"}
            </button>

          </motion.form>

        </div>
      </section>

      {/* QR Modal */}

      <AnimatePresence>
        {showQR && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setShowQR(false);
              setSuccess(false);
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-5"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl"
            >
              {/* Close Button */}

              <button
                onClick={() => {
                  setShowQR(false);
                  setSuccess(false);
                }}
                className="absolute right-5 top-5 text-2xl text-gray-500 hover:text-red-500 transition"
              >
                ✕
              </button>

              {!success ? (
                <>
                  <div className="text-center">

                    <div className="text-5xl mb-3">🛕</div>

                    <h2 className="text-3xl font-bold text-[#061A45]">
                      Advance Payment
                    </h2>

                    <p className="mt-3 text-gray-600 leading-7">
                      Scan the QR Code to pay the advance amount.
                      <br />
                      You may also skip payment and pay later.
                    </p>

                    <img
                      src="/qr.jpeg"
                      alt="QR Code"
                      className="w-60 h-60 mx-auto my-6 rounded-xl border shadow-lg"
                    />

                    <p className="font-semibold text-lg">
                      UPI ID
                    </p>

                    <p className="text-gray-500">
                      deepakji@upi
                    </p>

                    <div className="mt-8 space-y-4">

                      <button
                        onClick={() => setSuccess(true)}
                        className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
                      >
                        ✅ I've Paid
                      </button>

                      <button
                        onClick={() => setSuccess(true)}
                        className="w-full rounded-xl border-2 border-yellow-400 py-3 font-semibold text-yellow-600 transition hover:bg-yellow-400 hover:text-black"
                      >
                        ⏳ Pay Later & Confirm Booking
                      </button>

                    </div>

                    <p className="mt-5 text-sm text-gray-500">
                      * Your booking will be confirmed even if you choose to pay later.
                    </p>

                  </div>
                </>
              ) : (
                <>
                  <div className="text-center">

                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                      }}
                      className="text-7xl"
                    >
                      🎉
                    </motion.div>

                    <h2 className="mt-5 text-3xl font-bold text-green-600">
                      Booking Confirmed
                    </h2>

                    <p className="mt-5 text-gray-600 leading-8">
                      Thank you for booking your pooja.
                      <br />
                      Your booking request has been received successfully.
                      <br />
                      <br />
                      <span className="font-semibold text-[#061A45]">
                        Panditji or our team will contact you shortly
                      </span>
                      <br />
                      for confirmation and further details.
                    </p>

                    <button
                      onClick={() => {
                        setShowQR(false);
                        setSuccess(false);

                        setFormData({
                          name: "",
                          phone: "",
                          email: "",
                          city: "",
                          address: "",
                          pooja: "",
                          date: "",
                          time: "",
                          message: "",
                        });
                      }}
                      className="mt-8 w-full rounded-xl bg-yellow-400 py-3 text-lg font-bold transition hover:bg-yellow-300"
                    >
                      Done
                    </button>

                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default BookingForm;