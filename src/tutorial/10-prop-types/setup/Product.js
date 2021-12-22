import React from "react";
import PropTypes from "prop-types";

const Product = ({ image, name, price }) => {
  return (
    <article className="product">
      <img src={image.url} />
      <h4>{name}</h4>
      <h4>{price}</h4>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

Product.defaultProps = {
  image: {
    url: "https://images.unsplash.com/photo-1523730205978-59fd1b2965e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1954&q=80",
  },
  name: "defaultName",
  price: 3.99,
};

export default Product;
