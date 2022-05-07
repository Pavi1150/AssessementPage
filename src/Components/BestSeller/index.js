import React, { useState } from "react";
import "./index.css";
import { AiFillStar } from "react-icons/ai";
import { IoHeartCircleOutline } from "react-icons/io5";
import { BsFillCartFill } from "react-icons/bs";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import imgg5 from "./assets/imgg5.jpg";
import imgg6 from "./assets/imgg6.jpg";
import imgg from "./assets/imgg.jpg";
import imgg8 from "./assets/imgg8.jpg";
import { useSelector } from "react-redux";

function Seller() {
  const product = useSelector((state) => state.products);
  const [datas, setDatas] = useState([
    {
      id: 1,
      category: "Sneakers",
      title: "Nike Air Max 2700 react",
      image: img1,
      discount: 299.43,
      price: 534.33,
      offer: "24% off",
    },
    {
      id: 2,
      category: "Bag",
      title: "Bag-1",
      image: img2,
      discount: 299.43,
      price: 534.33,
      offer: "24% off",
    },
    {
      id: 3,
      category: "Bag",
      title: "Bag-2",
      image: img3,
      discount: 299.43,
      price: 534.33,
      offer: "24% off",
    },
    {
      id: 4,
      category: "Sneakers",
      title: "Sneaker-2",
      image: img4,
      discount: 299.43,
      price: 534.33,
      offer: "24% off",
    },
    {
      id: 5,
      category: "Belt",
      title: "Belt-1",
      image: imgg5,
      discount: 299.43,
      price: 534.33,
      offer: "24% off",
    },
    {
      id: 6,
      category: "Sunglasses",
      title: "Sunglasses-1",
      image: imgg6,
      discount: 299.43,
      price: 534.33,
      offer: "24% off",
    },
    {
      id: 7,
      category: "Belt",
      title: "Belt-2",
      image: imgg,
      discount: 299.43,
      price: 534.33,
      offer: "24% off",
    },
    {
      id: 8,
      category: "Sunglasses",
      title: "Sunglasses-2",
      image: imgg8,
      discount: 299.43,
      price: 534.33,
      offer: "24% off",
    },
  ]);
  const [dataRender, setRenderData] = useState(product);
  const category = datas.map((data) => data.category);
  const UniqCategory = [...new Set(category)];
  UniqCategory.unshift("All");
  const handleTab = (d) => {
    if (d === "All") {
      setRenderData(datas);
      return;
    }
    const filteredData = datas.filter((data) => data.category === d);
    setRenderData(filteredData);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="h3 text-center mt-5 mb-3 fw-bold">Best Seller</div>
          <div className="text-center mb-5">
            {UniqCategory.map((d, i) => (
              <button
                className="border-remove hov"
                onClick={() => handleTab(d)}
                key={i}
              >
                {d}
              </button>
            ))}
          </div>
          <div className="container">
            <div className="row">
              {dataRender.map((data) => (
                <div className="d-flex col-3 fw-bold" key={data.id}>
                  <div className="container">
                    <div className="row">
                      <div className="image-wrapper">
                        <img src={data.image} height="200px" width="100%" />
                        <div className="edit">
                          <a href="#" class="">
                            <i>
                              <IoHeartCircleOutline size="50" />
                              <BsFillCartFill size="35" />
                            </i>
                          </a>
                        </div>
                      </div>
                      <div className="card mb-5 card-8">
                        <div className="text-center product-title">
                          {data.title}
                        </div>
                        <div className="col-8 ms-2 d-flex justify-content-between ps-5">
                          <span className="zoom">
                            <AiFillStar />
                          </span>
                          <span className="zoom">
                            <AiFillStar />
                          </span>
                          <span className="zoom">
                            <AiFillStar />
                          </span>
                          <span className="zoom">
                            <AiFillStar />
                          </span>
                          <span className="zoom">
                            <AiFillStar color="#C1C8CE" />
                          </span>
                        </div>

                        <div className="text-center">
                          <span className="color-blue">{data.discount}</span>
                          <span className="strike-price">{data.price}</span>
                          <span className="color-orange">{data.offer}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seller;
