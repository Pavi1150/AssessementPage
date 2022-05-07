import React, { useState } from "react";
import "./index.css";
import shoenav from "./assets/shoenav.png";


function Adidas() {
  return (
    <div>
      <div>
        <div className="text-center fs-5 mt-5 mb-5">
          <a
            href="#"
            className="text-primary text-decoration-underline u-offset"
          >
            Load More
          </a>
        </div>
        <div className=" backgrounfColorClass">
          <div className="container">
            <div className="row">
              <div className="col-6 d-flex align-items-center">
                <div>
                  <span className="h1 ms-5">
                    Adidas Men Running
                    <br />
                    <span className="ms-5">Sneakers</span>
                  </span>
                  <br />
                  <br />
                  <span className="h6 mt-5 ms-5">
                    Performance and Design.Take right to the edge
                  </span>
                  <br />
                  <span className="ms-5 text-decoration-underline u-offset">
                    shop now
                  </span>
                </div>
              </div>
              <div className="col-6">
                <img
                  src={shoenav}
                  className="mb-5 move"
                  height="500px"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adidas;
