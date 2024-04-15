import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { TbShoppingBagPlus } from "react-icons/tb";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import axios from "axios";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/fdc0b20e-490c-43af-af48-c2e40b8bddf7")
      .then((response) => setData(response.data.data));
    console.log(data);
  });

  return (
    <div className="bg-container">
      <div className="header-section">
        <h2 className="logo-text">TANN TRIM</h2>
        <div className="icons-section">
          <CiSearch className="icon" />
          <CgProfile className="icon" />
          <CiBookmark className="icon" />
          <MdOutlineShoppingBag className="icon" />
        </div>
      </div>
      <div className="tags-section">
        <p className="tags-text">Bags</p>
        <p className="tags-text">Travel</p>
        <p className="tags-text">Accesories</p>
        <p className="tags-text">Gifting</p>
        <p className="tags-text">Jewelery</p>
      </div>
      <div class="bags-category-section">
        <div className="image-text-container">
          <img
            src="https://res.cloudinary.com/drmf7ywbu/image/upload/v1713084888/Frame_461_xehphu.png"
            className="image"
            alt="all bags"
          />
          <p className="bags-category-text">All Bags</p>
        </div>
        <div className="image-text-container">
          <img
            src="https://res.cloudinary.com/drmf7ywbu/image/upload/v1713084898/Frame_50_b21w0k.png"
            className="image"
            alt="vanity pouch"
          />
          <p className="bags-category-text">Vanity Pouch</p>
        </div>
        <div className="image-text-container">
          <img
            src="https://res.cloudinary.com/drmf7ywbu/image/upload/v1713084907/Frame_49_b6xkuz.png"
            className="image"
            alt="tote bags"
          />
          <p className="bags-category-text">Tote Bags</p>
        </div>
        <div className="image-text-container">
          <img
            src="https://res.cloudinary.com/drmf7ywbu/image/upload/v1713084924/Frame_13_dy6w7u.png"
            className="image"
            alt="duffle bags"
          />
          <p className="bags-category-text">Duffle Bags</p>
        </div>
        <div className="image-text-container">
          <img
            src="https://res.cloudinary.com/drmf7ywbu/image/upload/v1713084938/Frame_49_1_ccqqw2.png"
            className="image"
            alt="laptop sleeves"
          />
          <p className="bags-category-text">Laptop Sleeves</p>
        </div>
        <div className="image-text-container">
          <img
            src="https://res.cloudinary.com/drmf7ywbu/image/upload/v1713084946/Frame_49_2_cyg4lz.png"
            className="image"
            alt="messenger bags"
          />
          <p className="bags-category-text">Messenger Bags</p>
        </div>
        <div className="image-text-container">
          <img
            src="https://res.cloudinary.com/drmf7ywbu/image/upload/v1713084962/Frame_22_ntpt8m.png"
            className="image"
            alt="sling bags"
          />
          <p className="bags-category-text">Sling Bags</p>
        </div>
        <div className="image-text-container">
          <img
            src="https://res.cloudinary.com/drmf7ywbu/image/upload/v1713084970/Frame_20_tcspef.png"
            className="image"
            alt="hand bags"
          />
          <p className="bags-category-text">Hand Bags</p>
        </div>
      </div>
      <div className="active-products-section">
        <div className="active-products-texts">
          <p className="active-products-text">Bags</p>
          <ul className="active-products-text">
            <li>Backpacks</li>
          </ul>
        </div>
        <div className="active-products-icons">
          <p className="active-products-text">13 Products</p>
          <FaArrowUpFromBracket className="active-products-text icon" />
        </div>
      </div>
      <div className="products-section">
        {data.map((eachData) => {
          return (
            <div className="products">
              <div className="product-image">
                <img src={eachData.image_url} alt="bags" />
              </div>
              <div className="content-container">
                <h3>{eachData.name}</h3>
                <div className="price-icon-section">
                  <div className="price-section">
                    <h2>
                      <MdOutlineCurrencyRupee />
                      {eachData.current_price}
                    </h2>
                    <p>{eachData.actual_price}</p>
                    <span>({eachData.offer} Off)</span>
                  </div>
                  <div className="icon">
                    <TbShoppingBagPlus className="i" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
