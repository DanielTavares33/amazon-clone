import React from "react";
import "./Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12312312"
            title="Disposable Face Masks"
            price={12.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61nAkcenNTS._SL1200_.jpg"
            rating={3}
          />
          <Product
            id="12312312"
            title="ULTRALOQ Smart Lock U-Bolt Pro + Bridge WiFi Adaptor"
            price={15.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81a4urmFeyL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="12312312"
            title="Fitbit Charge 4 Fitness"
            price={99.95}
            image="https://images-na.ssl-images-amazon.com/images/I/71smqRr0pmL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="12312312"
            title="Intex Explorer K2 Kayakss"
            price={155.87}
            image="https://images-na.ssl-images-amazon.com/images/I/71Gix6EC8hL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="12312312"
            title="AMD Ryzen 5 5600X 6-core"
            price={297.48}
            image="https://images-na.ssl-images-amazon.com/images/I/61vGQNUEsGL._AC_SL1384_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="12312312"
            title="SAMSUNG QN32Q50RAFXZA Flat 32 QLED 4K 32Q50 Series Smart TV"
            price={447.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_SL1024_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}
