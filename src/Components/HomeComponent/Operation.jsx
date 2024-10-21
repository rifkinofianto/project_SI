import { Clock, MapTrifold } from "@phosphor-icons/react";

const Operation = () => {
  return (
    <>
      <h1 className="md:text-3xl text-2xl font-extrabold mb-8 text-center">
        Informasi Operasional &{" "}
        <span className="text-color-accent">Lokasi</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card Jam Operasional */}
        <div className="flex items-center gap-4 p-6 bg-color-secondary rounded-lg shadow-lg">
          <Clock size={40} className="text-color-primary" />
          <div>
            <h3 className="text-xl font-bold mb-1">Jam Operasional</h3>
            <p className="text-gray-700">
              <strong>24 Jam</strong>, kecuali hari libur nasional.
            </p>
          </div>
        </div>

        {/* Card Lokasi */}
        <div className="flex items-center gap-4 p-6 bg-color-secondary rounded-lg shadow-lg">
          <MapTrifold size={40} className="text-color-primary" />
          <div>
            <h3 className="text-xl font-bold mb-1">Lokasi</h3>
            <p className="text-gray-700 mb-3">
              Alamat kami tersedia di Google Maps.
            </p>
            <a
              href="https://maps.app.goo.gl/TMxmVZxws4am9w7j7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-color-primary rounded-md hover:text-color-accent transition-colors underline"
            >
              Lihat di Google Maps
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Operation;
