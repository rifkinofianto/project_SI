import PropTypes from "prop-types";
import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FormAuth = ({ title }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-color-dark px-4">
      <div className="w-full max-w-lg p-8 rounded-lg bg-color-secondary text-color-primary shadow-lg">
        <h1 className="md:text-4xl text-3xl font-bold text-center mb-6">
          {title}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block md:text-xl text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 md:py-3 rounded bg-color-dark md:text-lg text-color-primary border border-color-primary focus:outline-none focus:ring-2 focus:ring-color-accent"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block md:text-xl text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 md:py-3 rounded md:text-lg bg-color-dark text-color-primary border border-color-primary focus:outline-none focus:ring-2 focus:ring-color-accent"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={() => navigate("/home")}
            className="w-full py-2 md:text-xl text-lg font-semibold rounded bg-color-accent text-color-dark hover:bg-yellow-500 transition duration-300"
          >
            <FaGoogle size={32} className="inline -mt-1 mr-1" /> {title} With
            Google
          </button>
          <button
            onClick={() => navigate("/home")}
            className="w-full py-2 md:text-xl text-lg font-semibold rounded bg-color-accent text-color-dark hover:bg-yellow-500 transition duration-300"
          >
            <FaFacebook size={32} className="inline -mt-1 mr-1" /> {title} With
            Facebook
          </button>
          <button
            type="submit"
            className="w-full py-2 md:text-xl text-lg font-semibold rounded bg-color-accent text-color-dark hover:bg-yellow-500 transition duration-300"
          >
            {title}
          </button>
        </form>

        {/* Optional: Link for Sign Up / Login */}
        <p className="mt-6 text-center md:text-lg text-sm">
          {title === "Sign In" ? (
            <>
              Belum punya akun ?{" "}
              <a href="/signup" className="text-color-accent hover:underline">
                Sign up
              </a>
            </>
          ) : (
            <>
              Sudah punya akun ?{" "}
              <a href="/signin" className="text-color-accent hover:underline">
                Sign in
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

FormAuth.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormAuth;
