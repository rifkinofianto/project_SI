import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-color-dark px-4">
      {/* Title Section */}
      <h1 className="text-center flex flex-col md:flex-row md:gap-3 font-extrabold text-color-primary">
        <span className="text-3xl md:text-6xl">WELCOME TO STYLE</span>
        <span className="text-3xl md:text-6xl text-color-accent">PLAY!</span>
      </h1>

      {/* Subtitle */}
      <p className="text-center text-lg md:text-2xl font-bold mt-4 text-color-primary">
        Nikmati pengalaman bermain yang menyenangkan dan menarik
      </p>

      {/* Button Section */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => navigate("/signup")}
          className="bg-color-accent text-color-dark text-sm md:text-lg px-4 py-2 md:px-6 md:py-3 rounded-full shadow-md hover:bg-yellow-500 transition duration-300"
        >
          Daftar Sekarang
        </button>
        <button
          onClick={() => navigate("/signin")}
          className="bg-color-secondary text-color-primary text-sm md:text-lg px-4 py-2 md:px-6 md:py-3 rounded-full shadow-md hover:bg-gray-600 transition duration-300"
        >
          Masuk Lagi?
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
