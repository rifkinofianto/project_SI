import { useNavigate } from "react-router-dom";
import EachUtils from "../Utils/EachUtils";
import PropTypes from "prop-types";

const Services = ({ services, formatRupiah }) => {
  const navigate = useNavigate();

  const renderService = (service) => (
    <div
      key={service.id}
      className="md:flex flex-col justify-center items-center gap-5 bg-color-secondary rounded-lg shadow-xl"
    >
      <img
        src={service.image}
        alt={service.name}
        className="w-full md:h-full h-64 object-cover"
      />
      <div className="p-4 flex flex-col gap-4">
        <h3 className="md:text-xl text-lg font-bold text-center text-color-primary">
          {service.name}
        </h3>
        <p className="md:text-lg text-md leading-relaxed text-justify">
          {service.description}
        </p>
        {service.price ? (
          <span className="md:text-lg text-md font-semibold">
            Harga : {formatRupiah(service.price)}
          </span>
        ) : (
          ""
        )}
        <button
          onClick={() => navigate(`/booking/${service.path}/${service.id}`)}

          className="bg-color-accent text-color-dark md:px-4 px-2 py-2 md:text-lg text-md rounded-full hover:italic"
        >
          Booking {service.name} Sekarang
        </button>
      </div>
    </div>
  );
  return (
    <>
      <EachUtils of={services} render={renderService} />
    </>
  );
};

Services.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  formatRupiah: PropTypes.func.isRequired,
};

export default Services;
