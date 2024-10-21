import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dataPrice from "../json/Data.json";

const FormBookingPage = () => {
  const { id } = useParams(); // Memanggil useParams sebagai fungsi
  const navigate = useNavigate();

  const [service, setService] = useState(null); // State untuk menyimpan layanan yang dipilih
  const [formData, setFormData] = useState({
    name: "",
    nameProduct: "", // Menambahkan nameProduct di sini
    date: "",
    time: "",
    duration: 1,
    seats: 1,
    priceTotal: 0,
    payment: "Cash",
  });

  useEffect(() => {
    // Mencari layanan berdasarkan ID
    const selectedService = dataPrice.services.items.find(
      (item) => item.id === parseInt(id)
    );
    setService(selectedService);

    if (selectedService) {
      // Mengupdate nameProduct saat service ditemukan
      setFormData((prevState) => ({
        ...prevState,
        nameProduct: selectedService.name, // Menyimpan nama produk
      }));
    }
  }, [id]);

  useEffect(() => {
    // Menghitung total harga setiap kali durasi atau jumlah kursi berubah
    if (service) {
      const pricePerHour = service.price; // Mengambil harga per jam
      const totalPrice = pricePerHour * formData.duration * formData.seats; // Menghitung total harga
      setFormData((prevState) => ({ ...prevState, priceTotal: totalPrice })); // Memperbarui priceTotal
    }
  }, [formData.duration, formData.seats, service]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = { ...formData }; // Menyertakan total harga
    navigate(`/booking/detailsBooking/${formData.nameProduct}`, { state: bookingData });
  };

  // Mendapatkan tanggal hari ini dalam format YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="container mx-auto p-8 bg-color-secondary text-color-primary min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Form Booking {formData.nameProduct}
      </h1>
      {service ? ( // Memastikan layanan ditemukan
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium">Nama:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Masukkan nama anda..."
              required
              className="w-full border border-color-secondary p-2 rounded text-color-dark"
            />
          </div>

          <div>
            <label className="block text-lg font-medium">
              Nama Produk: {/* Menambahkan label untuk nama produk */}
            </label>
            <input
              type="text"
              name="nameProduct"
              value={formData.nameProduct}
              readOnly // Menjadikan input ini hanya untuk dibaca
              className="w-full border border-color-secondary p-2 rounded text-color-dark"
            />
          </div>

          <div>
            <label className="block text-lg font-medium">Tanggal:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={today} // Menambahkan atribut min
              className="w-full border border-color-secondary p-2 rounded text-color-dark"
            />
          </div>

          <div>
            <label className="block text-lg font-medium">Jam:</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full border border-color-secondary p-2 rounded text-color-dark"
            />
          </div>

          <div>
            <label className="block text-lg font-medium ">Durasi (jam):</label>
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              min="1"
              max="8"
              required
              className="w-full border border-color-secondary p-2 rounded text-color-dark"
            />
          </div>

          <div>
            <label className="block text-lg font-medium ">Jumlah Kursi:</label>
            <input
              type="number"
              name="seats"
              value={formData.seats}
              onChange={handleChange}
              min="1"
              max="10"
              required
              className="w-full border border-color-secondary p-2 rounded text-color-dark"
            />
          </div>

          <div>
            <label className="block text-lg font-medium">
              Metode Pembayaran:
            </label>
            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              required
              className="w-full border border-color-secondary p-2 rounded text-color-dark"
            >
              <option value="Cash">Cash</option>
              <option value="Alfamart">Alfamart</option>
              <option value="Mandiri">Mandiri</option>
              <option value="Gopay">Gopay</option>
              <option value="OVO">OVO</option>
              <option value="Dana">Dana</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-color-accent text-color-dark hover:italic px-6 py-2 rounded-full hover:bg-yellow-500"
          >
            Booking Sekarang
          </button>
        </form>
      ) : (
        <p className="text-red-500">Layanan tidak ditemukan!</p> // Menampilkan pesan jika layanan tidak ditemukan
      )}
    </div>
  );
};

export default FormBookingPage;
