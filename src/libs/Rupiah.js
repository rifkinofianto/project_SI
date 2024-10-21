// src/libs/formatRupiah.js

const formatRupiah = (angka, prefix = 'Rp ') => {
    // Pastikan angka adalah tipe number
    const number = typeof angka === 'number' ? angka : parseFloat(angka);

    // Pembulatan angka hingga dua desimal
    const roundedNumber = number.toFixed(2); // Dua desimal tetap dipertahankan
    const [wholePart, decimalPart] = roundedNumber.split('.'); // Pisahkan bagian utuh dan desimal

    // Format bagian utuh menjadi ribuan dengan titik
    const rupiah = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // Gabungkan dengan bagian desimal menggunakan koma
    const formattedDecimal = ',' + decimalPart;

    return prefix + rupiah + formattedDecimal;
};

export default formatRupiah;
