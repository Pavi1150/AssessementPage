import React from "react";
import kronos from "./assets/kronos.png";
import { AiFillStar } from "react-icons/ai";

function Fproducts() {
  return (
    <div>
      <div className="h3 text-center mt-5 mb-5">Featured Products</div>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between">
          <div className="col-1 card border-0">
            <img src={kronos} height="150px" width="100%" />
          </div>
          <div className="col-2">
            <div className="fs-5">Blue swade Nike Sneakers</div>
            <div className="col-8 mt-3">
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
              <span>
                <AiFillStar color="#C1C8CE" />
              </span>
            </div>
            <div className="fw-bold mt-3">
              <span className="orangecolor">$499</span>
              <span className="text-decoration-line-through color ms-2">
                $599
              </span>
            </div>
          </div>
          <div className="col-1 card border-0">
            <img src={kronos} height="150px" width="100%" />
          </div>
          <div className="col-2">
            <div className="fs-5">Blue swade Nike Sneakers</div>
            <div className="col-8 mt-3">
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
              <span>
                <AiFillStar color="#C1C8CE" />
              </span>
            </div>
            <div className="fw-bold mt-3">
              <span className="orangecolor">$499</span>
              <span className="text-decoration-line-through color ms-2">
                $599
              </span>
            </div>
          </div>
          <div className="col-1 card border-0">
            <img src={kronos} height="150px" width="100%" />
          </div>
          <div className="col-2">
            <div className="fs-5">Blue swade Nike Sneakers</div>
            <div className="col-8 mt-3">
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
              <span>
                <AiFillStar color="#C1C8CE" />
              </span>
            </div>
            <div className="fw-bold mt-3">
              <span className="orangecolor">$499</span>
              <span className="text-decoration-line-through color ms-2">
                $599
              </span>
            </div>
            </div>
          </div>
          <div className="col-md-4 mx-auto ">
        <div class="input-group mb-5 mt-5">
          <input
            type="text"
            className="form-control"
            placeholder="Search query..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </div>
        </div>
      </div>
      
        </div>
      </div>
    </div>
  );
}

export default Fproducts;
