import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg"
          alt="banner"
        />

        <div className="home__row">
          <Product
            id={1}
            title="Apple AirPods Pro (2nd Generation) Wireless Earbuds"
            image="https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_UL480_QL65_.jpg"
            price={29.99}
            rating={4}
          />

          <Product
            id={2}
            title="Apple Pencil (2nd Generation)"
            image="https://m.media-amazon.com/images/I/21SPDoiRuGL._AC_UL480_QL65_.jpg"
            price={85.0}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={3}
            title="Apple AirPods Pro (2nd Generation) Wireless Earbuds"
            image="https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_UL480_QL65_.jpg"
            price={29.99}
            rating={4}
          />

          <Product
            id={4}
            title="Apple Pencil (2nd Generation)"
            image="https://m.media-amazon.com/images/I/21SPDoiRuGL._AC_UL480_QL65_.jpg"
            price={85.0}
            rating={4}
          />

          <Product
            id={5}
            title="Apple Pencil (2nd Generation)"
            image="https://m.media-amazon.com/images/I/21SPDoiRuGL._AC_UL480_QL65_.jpg"
            price={85.0}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={6}
            title="Apple Pencil (2nd Generation)"
            image="https://m.media-amazon.com/images/I/21SPDoiRuGL._AC_UL480_QL65_.jpg"
            price={85.0}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
