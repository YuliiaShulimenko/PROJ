import React from 'react';
import s from "./ProductItem.module.css";

function ProductItem({product}) {
  const {image, title, price, discont_price} = product;
  const discount = Math.floor(((price - discont_price) / price) * 100);

  // console.log(product);
  return (
    <div className={s.prodItem}>
      <img src={`http://localhost:3333${image}`} alt={title} />
      <div className={s.price_main}>
        {discont_price ? (
          <div className={s.priceWithDisc}>
            <p className={s.discont_price}>{discont_price}$</p>
            <p className={s.price}>{price}$</p>
            <p className={s.discount_percentage}>{discount}%</p>
          </div>
        ) : (
          <div className={`${s.no_discount_price} ${s.product_details}`}>
            <p className={s.price}>{price}$</p>
          </div>
        )}
      </div>
      <h2 className={s.product_title}>{title}</h2>
    </div>
  );
}

export default ProductItem;
