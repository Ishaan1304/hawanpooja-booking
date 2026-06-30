import BookingForm from "../components/BookingForm";

function BookingPage() {
  return (
    <div className="min-h-screen bg-[#061A45] pt-36 pb-20 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-500/10 blur-3xl rounded-full animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-yellow-400 uppercase tracking-[5px]">
            Book Your Pooja
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-white mt-4">
            पूजा बुकिंग
          </h1>

          <div className="w-28 h-1 bg-yellow-400 mx-auto rounded-full mt-6"></div>

          <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-8">
            कृपया अपनी जानकारी भरें। हमारी टीम शीघ्र ही आपसे संपर्क करेगी
            और आपकी पूजा की पुष्टि करेगी।
          </p>

        </div>

        <BookingForm />

      </div>

    </div>
  );
}

export default BookingPage;