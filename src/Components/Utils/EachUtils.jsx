import PropTypes from "prop-types";
import { Children } from "react";

const EachUtils = ({ of, render }) => {
  // Tambahkan validasi dan fallback
  if (!Array.isArray(of)) {
    console.error("'of' is not an array. Received:", of);
    return <p>No items to display.</p>; // Fallback UI jika of bukan array
  }

  return (
    <>
      {Children.toArray(of.map((item, index) => render(item, index)))}
    </>
  );
};

EachUtils.propTypes = {
  of: PropTypes.array.isRequired,
  render: PropTypes.func.isRequired,
};

export default EachUtils;
