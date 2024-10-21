import { CaretDown, CaretUp } from "@phosphor-icons/react";
import PropTypes from "prop-types";

const ButtonOpen = ({ handleMenu, isOpen }) => {
  return (
    <button className="md:hidden flex items-center mb-2" onClick={handleMenu}>
      {isOpen ? <CaretUp size={24} /> : <CaretDown size={24} />}
    </button>
  );
};

ButtonOpen.propTypes = {
  handleMenu: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default ButtonOpen;
