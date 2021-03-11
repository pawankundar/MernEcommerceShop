import React, { useEffect, useState } from "react";
import Base from "../core/Base";
import Card from "../core/card";
import { loadProducts } from "../core/helper/cardhelper";

const Cart = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    console.log(products);
    setProduct(loadProducts());
  }, []);

  const cartProducts = () => (
    <div >
      <h2 >Products In Your Cart</h2>
      {products.map((prod, index) => (
        <Card
          key={index}
          product={prod}
          showAddtoCart={false}
          showRemovefromCart={true}
        ></Card>
      ))}
    </div>
  );

  const checkOutSection = () => (
    <div>
      <h2>CheckOut</h2>
    </div>
  );

  return (
    <Base Title="Cart Page" description="Check your cart here">
      <div className="row text-center">
        <div className="row">
          <div className="col-6">{cartProducts()}</div>
          <div className="col-6">{checkOutSection()}</div>
        </div>
      </div>
    </Base>
  );
};

export default Cart;
