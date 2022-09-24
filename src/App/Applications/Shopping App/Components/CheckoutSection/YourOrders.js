import React from "react";
import { useSelector } from "react-redux";

const YourOrders = () => {
  const { products } = useSelector(({ CartSlice }) => CartSlice);

  const totlaPriceFunc = () => {
    if (!products.length) {
      return 0;
    } else {
      return products
        .map((product) => +product.price.replace("$", "") * product.amount)
        .reduce((total, currValue) => total + currValue)
        .toFixed(2);
    }
  };

  const productsHandler = () =>
    products.map((product, index) => (
      <div
        className="product border-bottom pb-2 d-flex justify-content-between align-items-center mb-4"
        key={((product.id * 100) / product.amount + index).toFixed(0)}
      >
        <div className="left d-flex align-items-center">
          <img
            className="me-3"
            src={require(`../Products/${product.imgsrc}`)}
            alt={product.title}
            width="64px"
            height="64px"
            style={{ objectFit: "cover" }}
          />
          <p className="mb-0 me-2">
            <span>{product.title}</span>
            <span className="mx-2">-{product.size},</span>
            <span>{product.color}</span>
          </p>
        </div>
        <div className="right ms-3">
          ${(+product.price.replace("$", "") * product.amount).toFixed(2)}
        </div>
      </div>
    ));

  return (
    <div className="yourOrders">
      <h3 className="fw-bold mb-4">your order</h3>
      <div className="parent">
        <div className="d-flex justify-content-between py-3 mb-3">
          <h6 className="mb-0">product</h6>
          <h6 className="mb-0">subtotal</h6>
        </div>
        <div className="products mb-3">{productsHandler()}</div>
        <div className="totalPrice d-flex justify-content-between py-3 mb-3">
          <h6 className="mb-0">subtotal</h6>
          <h6 className="mb-0">${totlaPriceFunc()}</h6>
        </div>
        <div className="shippingType totalPrice d-flex justify-content-between py-3 mb-3">
          <h6 className="mb-0">shipping</h6>
          <h6 className="mb-0">free</h6>
        </div>
        <div className="totalPrice d-flex justify-content-between py-3 mb-3">
          <h6 className="mb-0">total</h6>
          <h6 className="mb-0">${totlaPriceFunc()}</h6>
        </div>
      </div>
    </div>
  );
};

export default YourOrders;
