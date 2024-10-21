import EachUtils from "../Utils/EachUtils";
import ButtonOpen from "../Utils/ButtonOpen";
import PropTypes from "prop-types";


const Opening = ({toggleOpen, descriptions, renderDescription, open}) => {
  return (
    <>
      <div className="flex items-start">
      <div className="flex flex-col md:flex-row items-center justify-between md:gap-10 gap-5">
        {/* Bagian Teks */}
        <div className="md:w-1/2 w-full text-center md:text-left flex flex-col gap-6">
          <h1 className="md:text-4xl text-xl font-extrabold text-color-primary">
            WELCOME User to Style
            <span className="text-color-accent">PLAY</span>
          </h1>
          <div className="flex items-start gap-3" onClick={toggleOpen}>
            <ButtonOpen handleMenu={toggleOpen} isOpen={open} />
            {open ? <p className="md:hidden">Lihat Semua</p> : <p className="md:hidden">Lihat Lebih Sedikit</p>}
          </div>
          <EachUtils of={descriptions} render={renderDescription} />
        </div>

        {/* Bagian Gambar */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="https://superlive.id/storage/articles/647befa4-2a2c-4204-bbcf-5bd1e99d958a.jpg"
            alt="Gambar Warnet"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
    </>
  );
};

Opening.propTypes = {
  toggleOpen: PropTypes.func.isRequired,
  descriptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      isBold: PropTypes.bool,
    })
  ).isRequired,
  renderDescription: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};


export default Opening;
