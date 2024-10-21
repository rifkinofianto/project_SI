import { useLocation, useNavigate } from "react-router-dom";

const DetailBookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state;

  const handleBack = () => navigate("/rating");

  if (!bookingData) {
    return <p>Tidak ada data booking yang tersedia.</p>;
  }

  const {
    name,
    nameProduct,
    date,
    time,
    duration,
    seats,
    payment,
    priceTotal,
  } = bookingData;

  const formatRupiah = (angka, prefix = "Rp ") => {
    // Pastikan angka adalah tipe number
    const number = typeof angka === "number" ? angka : parseFloat(angka);

    // Pembulatan angka hingga dua desimal
    const roundedNumber = number.toFixed(2); // Dua desimal tetap dipertahankan
    const [wholePart, decimalPart] = roundedNumber.split("."); // Pisahkan bagian utuh dan desimal

    // Format bagian utuh menjadi ribuan dengan titik
    const rupiah = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    // Gabungkan dengan bagian desimal menggunakan koma
    const formattedDecimal = "," + decimalPart;

    return prefix + rupiah + formattedDecimal;
  };
  return (
    <>
      <div className="bg-color-dark text-color-primary">
        <div className="container mx-auto p-8 min-h-screen">
          <h1 className="md:text-3xl text-2xl font-bold mb-6 text-center">
            Detail Booking {nameProduct}
          </h1>
          <div className="rounded-lg shadow-md md:p-6 p-4 bg-color-secondary md:text-xl text-md">
            <ul className="space-y-4">
              <li>
                <strong>Nama:</strong> {name}
              </li>
              <li>
                <strong>Tanggal:</strong> {date}
              </li>
              <li>
                <strong>Jam:</strong> {time}
              </li>
              <li>
                <strong>Durasi:</strong> {duration} jam
              </li>
              <li>
                <strong>Jumlah Kursi:</strong> {seats}
              </li>
              <li>
                <strong>Harga Total:</strong> {formatRupiah(priceTotal)}
              </li>
              <li>
                <strong>Metode Pembayaran:</strong> {payment}
              </li>
            </ul>
          </div>
          <button
            onClick={handleBack}
            className="mt-6 text-color-dark bg-color-accent hover:italic text-white px-6 py-2 rounded hover:bg-yellow-500"
          >
            Rating Kami
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailBookingPage;
