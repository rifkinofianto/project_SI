import { Star } from "@phosphor-icons/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Jika menggunakan React Router

const RatingPage = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [showAlert, setShowAlert] = useState(false); // Untuk mengontrol modal
  const [error, setError] = useState(""); // Untuk menyimpan pesan error
  const navigate = useNavigate(); // Untuk navigasi ke home

  const handleSubmit = () => {
    if (rating === 0) {
      setError("Silakan beri rating sebelum submit!"); // Tampilkan pesan error
      return; // Hentikan eksekusi jika rating masih 0
    }
    setShowAlert(true); // Tampilkan alert saat submit
    setError(""); // Reset pesan error
  };

  return (
    <div className="min-h-screen bg-color-dark text-color-primary flex flex-col items-center justify-center px-4 md:px-6">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">
        Beri <span className="text-color-accent">Rating</span> Kami
      </h1>

      {/* Container Rating */}
      <div className="flex gap-2 mb-6">
        {Array(5)
          .fill()
          .map((_, index) => {
            const starValue = index + 1;
            const isFilled = (hover || rating) >= starValue;

            return (
              <button
                key={index}
                type="button"
                className="relative focus:outline-none w-10 h-10 md:w-12 md:h-12"
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(0)}
              >
                <Star size={48} className="text-gray-500 absolute inset-0" />
                <div
                  className={`absolute inset-0 overflow-hidden transition-all duration-300 ${
                    isFilled ? "w-full" : "w-0"
                  }`}
                >
                  <Star size={48} className="text-color-accent" />
                </div>
              </button>
            );
          })}
      </div>

      <p className="text-lg mb-6">
        {rating > 0 ? `Anda memberi ${rating} bintang.` : "Pilih rating Anda."}
      </p>

      {error && <p className="text-red-500 mb-4">{error}</p>} {/* Menampilkan pesan error */}

      <button
        className={`bg-color-accent text-color-dark font-semibold px-4 md:px-6 py-2 md:py-3 rounded-md transition ${rating === 0 ? "opacity-50 cursor-not-allowed" : "hover:italic"}`}
        onClick={handleSubmit}
        disabled={rating === 0} // Menonaktifkan tombol jika rating 0
      >
        Submit Rating
      </button>

      {/* Alert Card */}
      {showAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-color-dark p-6 md:p-8 rounded-lg shadow-xl text-center space-y-6 max-w-sm w-full">
            <h2 className="text-2xl font-bold text-dark">
              Terima Kasih atas {rating} Bintangnya!
            </h2>
            <p className="text-gray-600">Kami sangat menghargai feedback Anda.</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button
                className="bg-color-accent text-color-dark px-4 py-2 rounded hover:italic transition"
                onClick={() => navigate("/home")} // Navigasi ke home
              >
                Kembali ke Home
              </button>
              <button
                className="bg-gray-300 text-dark px-4 py-2 rounded hover:bg-gray-400 transition"
                onClick={() => setShowAlert(false)} // Tutup alert
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RatingPage;
